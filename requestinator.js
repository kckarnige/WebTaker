var config = (q) => { return new URLSearchParams(location.search).get(q) }

if ((config("api_key") == undefined || null || "") || (config("id") == undefined || null || "")) {
  id = prompt("Please enter your Walltaker ID")
  key = prompt("Please enter your Walltaker API Key")
  location.href = (location.host+ location.pathname+ "?api_key="+ key+ "&id="+ id) 
}

async function postData() {
  try {
    const response = await fetch(`https://walltaker.joi.how/api/links/${config("id")}/response.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "api_key": config("api_key"),
          "type": document.getElementById("freakometer").value,
          "text": document.getElementById("freakSpeak").value
        }
      )
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    document.location.reload();
  } catch (error) {
    console.error('Error:', error);
  }
}

document.getElementById("freakSubmitter").addEventListener("click", () => { postData() })


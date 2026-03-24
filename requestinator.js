var config = (q) => { return new URLSearchParams(location.search).get(q) }

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
          "text": "This is a placeholder until I get text working properly!"
        }
      )
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    alert("IT REALLY WOOOOOOOORKS!!!!!!")
  } catch (error) {
    console.error('Error:', error);
  }
}

document.getElementById("mediaContainer").addEventListener("click", () => { postData() })


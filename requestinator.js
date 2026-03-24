var config = (q) => { return new URLSearchParams(location.search).get(q) }

async function postData() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "api_key": config("api_key"),
        "type": document.getElementById("freakometer").value,
        "text": "This is a placeholder until I get text working properly!"
      }
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

document.getElementById("mediaContainer").onclick(() => {postData()})
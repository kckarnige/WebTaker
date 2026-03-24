var config = (q) => { return new URLSearchParams(location.search).get(q) }
var noClick = false;

if (config("blurBg") != "false") {
  document.body.classList.add("fancyBlur")
}


if (config("noClick") != "false") {
  document.getElementById("freakContainer").style.display = "none";
  document.body.style.pointerEvents = "none";
}

fetch(`https://walltaker.joi.how/api/links/${config("id")}.json`, {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => {
    document.getElementById("selfExplanitory").innerText = `${config("id")} (${json.username})`;
    var background = document.createElement("img")
    background.setAttribute("src", json.post_thumbnail_url)
    background.setAttribute("id", "bgbg")
    document.body.append(background)

    console.log(json.post_url)
    vidFTs = [".webm", ".mp4"]
    if (vidFTs.some((ext) => json.post_url.includes(ext))) {
      var vid = document.createElement("video")
      vid.setAttribute("loop", "")
      vid.setAttribute("autoplay", "")

      if (config("controls") == "true") {
        vid.setAttribute("controls", "")
      }

      vid.setAttribute("src", json.post_url)
      vid.setAttribute("id", "bg")
      document.getElementById("mediaContainer").append(vid)
    } else {
      var img = document.createElement("img")
      img.setAttribute("src", json.post_url)
      img.setAttribute("id", "bg")
      document.getElementById("mediaContainer").append(img)
    }
    return json;
  })
  .then((json) => {
    fetch(`https://e694.net/posts/${json.post_url.split("/").at(-1).split(".")[0]}.json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => res.json())
    .then((e6json) => {
      document.getElementById("mediaContainer").setAttribute("href",`https://e694.net/posts/${e6json.post.id}`)
      document.getElementById("freakInQuestion").setAttribute("href",`https://walltaker.joi.how/users/${json.username}`)
    })
  })
//17985 51359
fetch("./config.json", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((config) => {
    fetch(`https://walltaker.joi.how/api/links/${config.id}.json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {

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
          vid.setAttribute("src", json.post_url)
          vid.setAttribute("id", "bg")
          document.body.append(vid)
        } else {
          var img = document.createElement("img")
          img.setAttribute("src", json.post_url)
          img.setAttribute("id", "bg")
          document.body.append(img)
        }
      })
  })
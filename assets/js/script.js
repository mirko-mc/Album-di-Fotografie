let language = "en-US";
function setLanguage(lang) {
  language = lang;
  switch (lang) {
    case "it-IT":
      document.getElementById("language").textContent = "Italiano";
      break;
    case "fr-FR":
      document.getElementById("language").textContent = "Français";
      break;
    case "de-DE":
      document.getElementById("language").textContent = "Deutsch";
      break;
    case "es-ES":
      document.getElementById("language").textContent = "Español";
      break;

    default:
      document.getElementById("language").textContent = "English";
      break;
  }
}
const row = document.querySelector("main .row");
let cardTag = "";

function getPhotos(images) {
  images.map((image) => {
    cardTag = `
    <div class="col-md-3">
      <div class="card">
        <img src=${image.src.tiny} class="card-img-top" alt=${image.alt}>
        <div class="card-body">
          <h6 class="card-title text-truncate">${image.alt}</h6>
          <p class="card-text text-truncate">Photographer: <a href=${image.photographer_url}class="card-link">${image.photographer}</a></p>
        </div>
      </div>
    </div>`;
    row.innerHTML += cardTag;
  });
}
function getVideos(videos) {
  videos.map((video) => {
    cardTag = `
    <div class="col-md-3">
      <div class="card">
        <video src=${video.video_files[3].link} class="card-img-top" controls></video>
        <div class="card-body">
          <h6 class="card-title text-truncate"></h6>
          <p class="card-text text-truncate">Videomaker: <a href=${video.user.url}class="card-link">${video.user.name}</a></p>
        </div>
      </div>
    </div>`;
    row.innerHTML += cardTag;
  });
}

let page = 1;
function search() {
  const typeMedia = document.getElementById("typeMedia").value;
  const url = `https://api.pexels.com/${typeMedia}/search?locale=${language}&page=${page}&per_page=16&query=`;
  row.innerHTML = "";
  const searchInput = document.getElementById("searchInput").value;
  fetch(url + searchInput, {
    headers: {
      authorization: "fIkyno8gQDEm1PZUEmtoK9lL2dDSeCL748E5YmRTBtgL04GfjjBzUu0k",
      "content-type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      typeMedia === "v1" ? getPhotos(data.photos) : getVideos(data.videos);
    });
  page === 1 ? document.getElementById("next").classList.remove("d-none") : "";
}

function prevPage() {
  page -= 1;
  page === 1 ? document.getElementById("prev").classList.toggle("d-none") : "";
  search();
}
function nextPage() {
  page += 1;
  page === 2 ? document.getElementById("prev").classList.toggle("d-none") : "";
  search();
}

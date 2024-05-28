// https://www.pexels.com/api/documentation/
// https: {
//   Authorization: "fIkyno8gQDEm1PZUEmtoK9lL2dDSeCL748E5YmRTBtgL04GfjjBzUu0k";
// }
let language = "it-IT";
let page = 1;
const row = document.querySelector("main .row");
let cardTag = "";

function getPhotos(images) {
  images.map((image) => {
    cardTag = `
    <div class="col-md-4">
      <div class="card">
        <img src=${image.src.tiny} class="card-img-top" alt=${image.alt}>
        <div class="card-body">
          <h5 class="card-title">${image.alt}</h5>
          <p class="card-text">Photographer: <a href=${image.photographer_url}class="card-link">${image.photographer}</a></p>
        </div>
        
      </div>
    </div>`;
    row.innerHTML += cardTag;
  });
}

function search() {
  const url = `https://api.pexels.com/v1/search?locale=${language}&page=${page}&query=`;
  row.innerHTML = "";
  const searchInput = document.getElementById("searchInput").value;
  // console.log("SEARCH - searchInput - 1 => ", searchInput);
  fetch(url + searchInput, {
    headers: {
      authorization: "fIkyno8gQDEm1PZUEmtoK9lL2dDSeCL748E5YmRTBtgL04GfjjBzUu0k",
      "content-type": "application/json",
    },
  })
    .then((resp) => {
      // console.log("SEARCH - resp - 2 => ", resp);
      return resp.json();
    })
    .then((data) => {
      console.log("SEARCH - data - 3 => ", data);
      getPhotos(data.photos);
    });
}

function prevPage() {
  page -= 1;
  search();
}
function nextPage() {
  page += 1;
  search();
}
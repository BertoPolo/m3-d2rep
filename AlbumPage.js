const mouseoverSong = function () {
  songNode = document.getElementsByClassName("song");
  numNode = document.getElementsByClassName("listNumber");
  heartNode = document.getElementsByClassName("heartSong");
  threeDotsNode = document.getElementsByClassName("threeDotsSong");
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener("mouseover", function (e) {
      songNode[i].classList.add("highLighting");
      numNode[i].innerText = " ";
      numNode[i].classList.add("listPlay");
      heartNode[i].classList.remove("hidden");
      threeDotsNode[i].classList.remove("hidden");
    });
    songNode[i].addEventListener("mouseleave", function (e) {
      songNode[i].classList.toggle("highLighting");
      numNode[i].innerText = i + 1;
      numNode[i].classList.toggle("listPlay");
      heartNode[i].classList.add("hidden");
      threeDotsNode[i].classList.add("hidden");
    });
  }
};
mouseoverSong();

// m3-d2rep
const bandsPlace = document.getElementById("bandsPlace");

const loadBands = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        bandsPlace.innerHTML += `<div class="col"> ${data.id}</div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = function () {
  loadBands();
};

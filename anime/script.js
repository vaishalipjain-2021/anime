let animeData = [];
let globalData = [];

const url = "https://api.jikan.moe/v4/top/anime";

function array(displayData) {
  const divC = document.getElementById("row");
  console.log(displayData, "qqqq");

  displayData.map(function (anime) {
    let divCr = document.createElement("div");
    divCr.className = "card col-lg-3";
    divCr.id = "card";

    let divB = document.createElement("div");
    divB.className = "card-body";

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.id = "img";
    img.src = `${anime.images.jpg.image_url}`;

    let title = document.createElement("h2");
    title.className = "card-text";
    title.innerHTML = `${anime.title}`;
    title.id = "title";

    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.id = "mybtn";
    button.innerHTML = "More";
    // var modal = document.getElementById("myModal");
    button.onclick = () => {
      console.log("gghghg");
      // modal.style.display = "block";
      details(anime.mal_id);
    };

    
    

    // let imgD = document.createElement('img')
    // imgD.className = "imgDetais"
    // imgD.src = `${anime.images.jpg.image_url}`

    divC.append(divCr);
    divCr.appendChild(img);
    divCr.appendChild(divB);
    divB.appendChild(title);
    divCr.append(button);
    

    if(anime.hasOwnProperty("isLocal")){

      let row = document.createElement('div')
      row.className = "row"

      let col1 = document.createElement('div')
      col1.className = "col"

      let col2 = document.createElement('div')
      col2.className = "col"      
      
      let remove = document.createElement('button')
      remove.innerHTML= "Remove"
      remove.className = "btn btn-primary";
      remove.id = "remove";
      
      remove.onclick = () => {
        removeR(anime.mal_id) }
      
      let a = document.createElement('a')
      a.href = "editAnimeDetails.html"
      a.id = "a"
      a.onclick = () => {
        editE(anime.mal_id) }

      let edit = document.createElement('button')
      edit.innerHTML= "Edit"
      edit.className = "btn btn-primary";
      edit.id = "edit";
      
      // edit.onclick = () => {
      //   editE(anime.mal_id) }

      divCr.append(row)
      row.append(col1)
      row.append(col2)
      col1.append(remove)
      col2.append(a)
      a.append(edit)
        
    }
    
  });
}

// var storage = localStorage.getItem("storedData")
// 
// var newData = [...animeData, JSON.parse(storage)]
// console.log(newData, "newdata")

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let animes = data;
    console.log(animes, "single ");
    var storedData = localStorage.getItem("storedData");
    // console.log(`${storedData}`, 'aaa')
    animeData = data.data;
    var newData = [...animeData, ...JSON.parse(storedData)];
    globalData = newData;

    console.log(newData, "check");

    array(globalData);
  })
  .catch(function (error) {
    console.log(error);
  });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
console.log(btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     console.log('ffff');
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function details(id) {
  console.log(id, "aaaaa");

  let anime = globalData.find((anime) => anime.mal_id === id);
  console.log(anime, "data");
  console.log(anime.title, "title");

  let MdivO = document.createElement("div");
  MdivO.className = "modal";
  MdivO.id = "myModal";

  // var modal = document.getElementById("myModal");
  MdivO.style.display = "block";

  let MdivT = document.createElement("div");
  MdivT.className = "modal-content";
  MdivT.id="popup"

  let span = document.createElement("span");
  span.className = "close";
  span.innerHTML = "&times;";
  span.onclick = function () {
    console.log("jbekfjnk");
    var modal = document.getElementById("myModal");
    modal.remove()
    // modal.style.display = "none";
  };

  let p = document.createElement("h1");
  p.innerHTML = `${anime.title}`;

  let body = document.getElementById("body");

  let img = document.createElement("img");

  img.src = `${anime.images.jpg.image_url}`;
  img.style.width = "200px";
  img.style.height = "200px";

  let div = document.createElement("div");

  let ul = document.createElement("ul");
  let episodes = document.createElement("li");
  episodes.innerHTML = `Number of episodes : ${anime.episodes}`;
  let source = document.createElement("li");
  source.innerHTML = `Source : ${anime.source}`;
  let status = document.createElement("li");
  status.innerHTML = `Status : ${anime.status}`;
  let aired = document.createElement("li");
  aired.innerHTML = `Aired Period : ${anime.aired.string} `;
  let rating = document.createElement("li");
  rating.innerHTML = `Rating : ${anime.rating} `;
  let score = document.createElement("li");
  score.innerHTML = `Score : ${anime.score} `;
  let synopsis = document.createElement("li");
  synopsis.innerHTML = `Synopsis : ${anime.synopsis} `;
  let season = document.createElement("li");
  season.innerHTML = `Season : ${anime.season} `;
  let year = document.createElement("li");
  year.innerHTML = `Year : ${anime.year} `;
  let broadcast = document.createElement("li");
  broadcast.innerHTML = `Broadcast : ${anime.broadcast.string} `;

  body.appendChild(MdivO);
  MdivO.appendChild(MdivT);
  MdivT.appendChild(span);
  MdivT.appendChild(p);
  MdivT.appendChild(img);
  MdivT.appendChild(div);
  div.appendChild(ul);
  ul.appendChild(episodes);
  ul.appendChild(source);
  ul.appendChild(status);
  ul.appendChild(aired);
  ul.appendChild(rating);
  ul.appendChild(score);
  ul.appendChild(synopsis);
  ul.appendChild(season);
  ul.appendChild(year);
}

function yearOnChange(year) {
  var card = document.getElementById("row");
  card.parentNode.removeChild(card);

  let newDiv = document.createElement("div");
  newDiv.id = "row";
  newDiv.className = "row";

  let body = document.getElementById("body");

  body.appendChild(newDiv);

  if (year === "year") {
    array(animeData);
  } else {
    let Ssyear = animeData.filter((a) => a.year === ~~year);
    array(Ssyear);
  }
}

function sourceOnChange(source) {
  var card = document.getElementById("row");
  card.parentNode.removeChild(card);

  let newDiv = document.createElement("div");
  newDiv.id = "row";
  newDiv.className = "row";

  let body = document.getElementById("body");

  body.appendChild(newDiv);

  if (source === "source") {
    array(animeData);
  } else {
    let Ssource = animeData.filter((a) => a.source === source);
    array(Ssource);
  }
}

function statusOnChange(status) {
  var card = document.getElementById("row");
  card.parentNode.removeChild(card);

  let newDiv = document.createElement("div");
  newDiv.id = "row";
  newDiv.className = "row";

  let body = document.getElementById("body");

  body.appendChild(newDiv);

  if (status === "status") {
    array(animeData);
  } else {
    let Sstatus = animeData.filter((a) => a.status === status);
    array(Sstatus);
  }
}

function seasonOnChange(season) {
  var card = document.getElementById("row");
  card.parentNode.removeChild(card);

  let newDiv = document.createElement("div");
  newDiv.id = "row";
  newDiv.className = "row";

  let body = document.getElementById("body");

  body.appendChild(newDiv);

  if (season === "season") {
    array(animeData);
  } else {
    let Sseason = animeData.filter((a) => a.season === season);
    array(Sseason);
  }
}

function trial() {
  var storedData = localStorage.getItem("storedData");

  var newData = [...globalData, JSON.parse(storedData)];

  array(newData);
}


function removeR(id){
  console.log(id , "removed")
  let a = localStorage.getItem('storedData')
  let removeData = JSON.parse(a)
  let index = removeData.findIndex(x => x.mal_id = id)
  console.log(index, "index") 
  removeData.splice(index, 1)
  localStorage.setItem('storedData', JSON.stringify(removeData))

  var card = document.getElementById("row");
  card.parentNode.removeChild(card);

  let newDiv = document.createElement("div");
  newDiv.id = "row";
  newDiv.className = "row";

  let body = document.getElementById("body");

  body.appendChild(newDiv)

  window.location.reload();
  
}

function editE(id){
  // console.log(id , "removed")
  let editData = globalData.find(x => x.mal_id == id )
  

  document.getElementById("a").onclick = function(e){
    e.preventDefault();
    // window.open(this.href+"?editData="+ editData, '_blank');
    location.href=this.href+'?xyz='+editData;return false;
    
  }
  
}




// import array from "./script";




function store() {
  


  var title = document.getElementById("title");
 

  var img = document.getElementById("img");


  var episodes = document.getElementById("episodes");

  var source = document.getElementById("source");

  var statuses = document.getElementById("status");

  var dateFrom = document.getElementById("dateFrom");

  var dateTo = document.getElementById("dateTo");

  var now = new Date(dateFrom.value);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var formattedFromDate =
    months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();

  var now = new Date(dateTo.value);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var formattedToDate =
    months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();

  

  var aired = `${formattedFromDate} to ${formattedToDate}`;
 

  var duration = document.getElementById("duration");

  var rating = document.getElementById("rating");

  var scores = document.getElementById("score");

  var synopsis = document.getElementById("synopsis");

  var season = document.getElementById("season");

  var year = document.getElementById("year");

  var broadcast = document.getElementById("broadcast");

  alert("data saved to localStorage");

  var mal_id = Math.floor(Math.random() * 100)
  console.log(mal_id, "id")

  

  const localData = {
    mal_id,
    title: title.value,
    images: { jpg: { image_url: img.value } },
    episodes: episodes.value,
    source: source.value,
    status: statuses.value,
    aired: { string: aired },
    duration: duration.value,
    rating: rating.value,
    score: scores.value,
    synopsis: synopsis.value,
    season: season.value,
    year: year.value,
    broadcast: {string: broadcast.value},
    isLocal: true,
  };
//   console.log(localData, "local");
  
//   localStorage.setItem("storedData", JSON.stringify(localData));
  var storedData = localStorage.getItem("storedData");

  if (storedData && storedData.length){
      let updatedData = [...JSON.parse(storedData), localData]

      localStorage.setItem("storedData", JSON.stringify(updatedData) )
  }else{
      localStorage.setItem("storedData", JSON.stringify([localData]) )
  }


  

}

const submit = (e) => {
  e.preventDefault();
  store();
};

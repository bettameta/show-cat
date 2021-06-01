var pressButton = document.getElementById("lolcatButton");
var showCat = document.getElementById("lolcatImage");
var whatCat = "https://i.postimg.cc/sDTMtgRn/photo-2021-06-01-09-39-26.jpg";

var catAppears = function(){
   showCat.src= whatCat;
};

pressButton.addEventListener("click", catAppears);






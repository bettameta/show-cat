var pressButton = document.getElementById("lolcatButton");
var showCat = document.getElementById("lolcatImage");
var whatCat = "https://i.postimg.cc/8kdrh6hL/oops-bug.jpg";

var catAppears = function(){
   showCat.src= whatCat;
};

pressButton.addEventListener("click", catAppears);






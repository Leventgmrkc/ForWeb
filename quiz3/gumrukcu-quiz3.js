$(document).ready(function() {
	
}); // end ready


var btn=document.getElementsByClassName("sorkin");
var animalContainer=document.getElementById("animal-info");
btn.addEventListener("click",function(){

 var ourRequest= new XMLHttpRequest();
ourRequest.open('GET',"json_files/sorkin.json");

  ourRequest.onload=function(){
  var ourData=JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();
});

function renderHTML(data){
  var htmlString="";
  for(i=0;i<data.length;i++){
    htmlString+="<p>" + data[i].month + "is a " +data[i].text + "</p>";

  }

  animalContainer.insertAdjacentHTML('beforeend',htmlString);

}
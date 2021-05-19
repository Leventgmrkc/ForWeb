var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};

var addScore = function(){
	var name_getted = $('name');
	var score_getted = $('score');
	if(name_getted.value == ""){
		alert("You should enter the valid name!");
	}
	else if (score_getted.value > 0 && score_getted.value <100){
		names[names.length] = name_getted.value;
		scores[scores.length] = score_getted.value;	
	}
	else{
		alert("You should enter valid between 100 and 0 !");
		
	}
	name_getted.value = "";
	score_getted.value = "";

	$("name").focus();
	
}


	var displayResults=function(){
		var sumofNum=0;
		var sonuc = $("results");
		var max=0;		
		for(var i = 0 ; i<names.length ; i ++){
			
			sumofNum +=Number(scores[i]);			
			if(Number(scores[i])>Number(scores[max])){
				max = i;
			}										
		}
		
		sonuc.innerHTML="<h2>Results</h2>";
		sonuc.innerHTML+="<p> Avarage score = "+sumofNum/scores.length+"</p>";
		sonuc.innerHTML+="<p> High Score  = "+names[max]+"with a score of "+scores[max]+" </p>";
		
	}





var displayScores = function() {
	var scores_display = $("scores_table");

	scores_display.innerHTML = "<h2> Scores </h2>";
	scores_display.innerHTML += "<tr> <th>Name</th> <th>Score</th></tr>";
	for(var i = 0 ; i < scores.length; i++){
		scores_display.innerHTML += "<tr><td>"+ names[i]+"</td><td>"+scores[i]+ "</td></tr>";
	} 
}





$(function(){
    var score = 0;
	var level = 1;
	var topmargin = 0;
    var leftmargin = 0;
    
    $("#btn").click(function(){
        
        $("#score").text(s_Score());

    });
    $("#btn").mouseover(function(){
        timer();
        
    });
    function s_Score(){
        score++;
        return "Score: " + score;
    }
    function changePosition(){
        leftmargin = (Math.random()*750);
        topmargin = Math.random()*425;
        $("#btn").css("marginTop", topmargin+"px");
        $("#btn").css("marginLeft", leftmargin+"px");
    }
    function timer(){
        if(score <= 3){
            setTimeout(changePosition,500);
        }
        else if(score <= 6){
            setTimeout(changePosition,400);
        }
        else if(score <= 9){
            setTimeout(changePosition,300);
        }
        else if(score <= 12){
            setTimeout(changePosition,200);
        }
        else if(score <= 15){
            setTimeout(changePosition,100);
        }
        else{
            setTimeout(changePosition,00);
        }
    }
	function increase_Level(){
		document.getElementById("level").innerHTML = "Level: " + level;
	}
	
	
	function point(){
    score ++;
    document.getElementById("score").innerHTML = "Score: " + s_Score;
    if(score % 10 == 0){
        level++;
        alert("Level is " + level);
        increase_Level();
		}
	}

	
	
	
   
});
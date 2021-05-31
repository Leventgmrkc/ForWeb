






var array=["nature1.jpeg","nature2.jpg"];

 $( function() {
	 setInterval(photoChanger,2000);
	
		 
	function photoChanger(){
		$("#naturell").fadeOut(200,(function(){
			var imageUrl=$("#naturell").attr("src");
		if(imageUrl=="nature1.jpeg"){
			$("#naturell").attr("src","nature2.jpg");
			$("#naturell").fadeIn();
		}
		else{
				$("#naturell").attr("src","nature1.jpeg");
				$("#naturell").fadeIn();
			
		}		
		})
		);
			
	}	 
	 
	 
 })
 
 
 
 var array=["nature1.jpeg","nature2.jpg"];

 $( function() {
	 setInterval(photoChanger,2000);
	
		 
	function photoChanger(){
		$("#culturell").fadeOut(200,(function(){
			var imageUrl=$("#culturell").attr("src");
		if(imageUrl=="culturel.jpg"){
			$("#culturell").attr("src","culturel1.png");
			$("#culturell").fadeIn();
		}
		else{
				$("#culturell").attr("src","culturel.jpg");
				$("#culturell").fadeIn();
			
		}		
		})
		);
			
	}	 
	 
	 
 })
 
  $( function() {
	 setInterval(photoChanger,2000);
	
		 
	function photoChanger(){
		$("#animasyonn").fadeOut(200,(function(){
			var imageUrl=$("#animasyonn").attr("src");
		if(imageUrl=="animasyon1.jpg"){
			$("#animasyonn").attr("src","animasyon.jpg");
			$("#animasyonn").fadeIn();
		}
		else{
				$("#animasyonn").attr("src","animasyon1.jpg");
				$("#animasyonn").fadeIn();
			
		}		
		})
		);
			
	}	 
	 
	 
 })








  $( function() {
    var availableTags = [
      "Ankara",
      "Adıyaman",
      "Hakkari",
      "Trabzon",
      "Antalya",
      "Bursa",
      "Bolu",
      "Bayburt",
      "Corum",
      "Cankırı",
      "Denizli",
      "Edirne",
      "Fatsa",
      "Giresun",
      "Igdir",
      "İzmir",
      "Kastamonu",
      "Lüleburgaz",
      "Malatya",
      "Nigde",
      "Pirlo",
	   "Samsun",
      "Sinop",
      "Şırnak",
      "Tokat",
      "Tunceli",
      "Urfa",
      "Yalova",
      "Zonguldak",
      "Ordu"
    ];
    $( "#als" ).autocomplete({
      source: availableTags
    });
  } );
function loaded(){
	$("#timer").css("visibility","hidden")
	alert("Welcome To The #100DEVS Class Reminder!\n\n I Will Be Updating This For Each Of The Sessions Throughout The Bootcamp! \n\n Created by Imran Mohamed")

	function clicked(){
		$("div").css("visibility", "visible");
		$("#reveal").remove()
}
$("#reveal").click(clicked)

function makeTimer() {	


		let endTime =new Date("26 October 2020 19:06 GMT");			
			endTime = (Date.parse(endTime) / 1000);

			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = endTime - now;

			let days = Math.floor(timeLeft / 86400); 
			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");	
			
			if(timeLeft<=121&&timeLeft>120){
				let audio = new Audio("bensound-scifi.mp3");
				audio.loop = true;
				audio.play().loop();}
			
			if(timeLeft<=110){
				let footer= '<span>Music: <a href="https://www.bensound.com">"Royalty Free Music from Bensound, Name: Sci Fi"</a></span>'
				$('footer').html(footer)
				}
			if(timeLeft===5){ 
					$("h1").text('runUpload()');
				}

			if(timeLeft===4){
				$("h1").text('BINARY UPLOAD.')
				}
			if(timeLeft===3){
				$("h1").text('BINARY UPLOAD..')
				}
			if(timeLeft===2){
				$("h1").text('BINARY UPLOAD...')
				}
			if(timeLeft===1){
				$("h1").text('BINARY UPLOAD....')
				}
			
			if (timeLeft<=0)   { 
                let img= '<img src="logo.png" width="100px" height="100px" class="img"></img>'
				$("#days").remove();
				$("#hours").remove();
				$("#minutes").remove();
            	$("#seconds").remove();
            	$(".imgSmall").remove()
			
				//main class link
				let reveal=img+img+img+img+img+img+img+img+img+img+img+img+"<h2><a href='https://www.twitch.tv/learnwithleon'>Click here for #100DEVS class </a>!!!</h2>"+img+img+img+img+img+img+img+img+img+img+img+img

				//alternate links
				// let reveal=img+img+img+img+img+img+img+img+img+img+img+img+"<h1> Click on your respective houses <a href='https://icebreaker.video/events/ex9Wzbp5qPb3Dhr5osF2'>TURING 8:00pm EST </a><br><a href='https://icebreaker.video/events/U3aXEZDAGhRw1Tjc7pIs'>HOPPER 7:15pm EST</a><br><a href='https://icebreaker.video/events/U9BmGUHBO4Q5HMDhGDEP'>HAMILTON(max 200) 6:30pm EST </a>!!!</h2>"
				
				$("h1").html(reveal)
			};
            }

	
    setInterval(function() { makeTimer(); }, 1000);
		}
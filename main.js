function loaded(){
//notification
// Notification.requestPermission()


//original	
	$("#timer").css("visibility","hidden")
	alert("Welcome To The #100DEVS Class Reminder! \n\n There should be an audible warning at 2 minutes before the class starts please let me know if this isnt the case\n\n Created by Imran Mohamed")

	function clicked(){
		$("div").css("visibility", "visible");
		$("#reveal").remove()
}
$("#reveal").click(clicked)
/*
 classDates

 "3 December 2020 23:30 GMT"
 "5 December 2020 17:30 GMT"
 "12 December 2020 17:30 GMT"
 "15 December 2020 23:30 GMT"
 "17 December 2020 23:30 GMT"
 "19 December 2020 17:30 GMT"
 "2 January 2021 17:30 GMT"
 "5 January 2021 23:30 GMT"
 "7 January 2021 23:30 GMT"
 "9 January 2021 17:30 GMT"
 "12 January 2021 23:30 GMT"
 "14 January 2021 23:30 GMT"
 "16 January 2021 17:30 GMT"
 "19 January 2021 23:30 GMT"
 "21 January 2021 23:30 GMT"
 "23 January 2021 17:30 GMT"
 "26 January 2021 23:30 GMT"
 "28 January 2021 23:30 GMT"
 "30 January 2021 17:30 GMT"
 
*/
function makeTimer() {	

		let endTime =new Date("19 December 2020 17:30 GMT");			
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
			
			// if(timeLeft===600){
			// 	let notification = new Notification("Hi there class starts in 10 minutes!");
			// 	Notification.requireInteraction = true;
			// }
			// if(timeLeft===300){
			// 	let notification = new Notification("Hi there class starts in 5 minutes!");
			// 	 Notification.requireInteraction = true;
			// }
			


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
				let reveal=img+"Check in on twitter!!"+img+"<h2><a href='https://www.twitch.tv/learnwithleon'>Click here for #100DEVS class!!! </a></h2>"

				//alternate/past links
				// let reveal=img+img+img+img+img+img+img+img+img+img+img+img+"<h1> Click on your respective houses <a href='https://icebreaker.video/events/ex9Wzbp5qPb3Dhr5osF2'>TURING 8:00pm EST </a><br><a href='https://icebreaker.video/events/U3aXEZDAGhRw1Tjc7pIs'>HOPPER 7:15pm EST</a><br><a href='https://icebreaker.video/events/U9BmGUHBO4Q5HMDhGDEP'>HAMILTON(max 200) 6:30pm EST </a>!!!</h2>"
				
				$("h1").html(reveal)
			};
            }

	
    setInterval(function() { makeTimer(); }, 1000);

		
}


// $(function () {
//     var dte = new Date();
//     let d = document.getElementById('d');
//     let m = document.getElementById('m');
//     let y = document.getElementById('y');
//     let hh = document.getElementById('hh');
//     let mm = document.getElementById('mm');
    
//    if (dte.getDay() === 1) {
//         d.value = dte.getDate() + 2;
//         //d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         m.value = dte.getMonth() + 1;
//         //m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         y.value = dte.getFullYear();
//         hh.value = 19;
//         mm.value = 30;
//     } else if (dte.getDay() === 2) {
//         d.value = dte.getDate() + 1;
//        // d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         m.value = dte.getMonth() + 1;
//        // m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         y.value = dte.getFullYear();
//         hh.value = 19;
//         mm.value = 30;
//     } else if (dte.getDay() === 3) {
//         d.value = dte.getDate();
//        // d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         m.value = dte.getMonth() + 1;
//        // m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         y.value = dte.getFullYear();
//         hh.value = 19;
//         mm.value = 30;
//     } else  if (dte.getDay() === 0){
//         y.value = dte.getFullYear();
//         m.value = dte.getMonth() + 1;
//        // m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         d.value = dte.getDate();
//       //  d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         hh.value = 17;
//         mm.value = '00';
//     } else  if (dte.getDay() === 4){
//         y.value = dte.getFullYear();
//         m.value = dte.getMonth() + 1;
//       //  m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         d.value = dte.getDate() + 3;
//       //  d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         hh.value = 17;
//         mm.value = '00';
//     }else  if (dte.getDay() === 5){
//         y.value = dte.getFullYear();
//         m.value = dte.getMonth() + 1;
//       //  m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         d.value = dte.getDate() + 2;
//      //   d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         hh.value = 17;
//         mm.value = '00';
//     }else  if (dte.getDay() === 6){
//         y.value = dte.getFullYear();
//         m.value = dte.getMonth() + 1;
//       //  m.value = m.value > 12 ? alert('Something is not right with the month \nPlease check and correct Manually') : m.value;
//         d.value = dte.getDate() + 1;
//       //  d.value = d.value > 31 ? alert('Something is not right with the date \nPlease check and correct Manually') : d.value;
//         hh.value = 17;
//         mm.value = '00';
//     } else {
//         y.value = dte.getFullYear();
//         m.value = dte.getMonth() + 1;
//         d.value = dte.getDate() + 1;
//         hh.value = 23;
//         mm.value = 59;
//     }
    
//     var calcNewYear = setInterval(function () {
//         date_future = new Date(y.value, m.value - 1, d.value, hh.value, mm.value);
//          date_now = new Date();
//         seconds = Math.floor((date_future - (date_now)) / 1000);
//         minutes = Math.floor(seconds / 60);
//         hours = Math.floor(minutes / 60);
//         days = Math.floor(hours / 24);

//         hours = hours - (days * 24);
//         hours = hours < 10 ? '0' + hours : hours;
//         minutes = minutes - (days * 24 * 60) - (hours * 60);
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         if (y.value !== '' && m.value !== '' && d.value !== '' && hh.value !== '' && mm.value !== '' && date_now < date_future) {
//             $("#time").html("<h2 id='heading2'>Remaining Time For Next Session</h2> <p id='timeLeft'>" + days + "<span class='red'>D </span>: " + hours + "<span class='red'>H</span> : " + minutes + "<span class='red'>M</span> : " + seconds + "<span class='red'>S</span> </p>")
//         } else if (date_future < date_now) {
//             $('#time').html("<h2 id='heading2'>Date/Time Cannot be Less than Current Date/Time nor can be Blank</h2>");
//         }
//         else {
//             $('#time').html("<h2 id='heading2'>CountDown Rules: </h2> <ul id='white'><li>Date/Time Cannot be Blank</li><li>Date/Time Cannot be Past Date.");
//         }
//     }, 1000);
// });

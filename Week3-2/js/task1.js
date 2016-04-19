(function() { //on load event

	var task1 = {
		render: function(){
			document.getElementById("screenX").textContent = window.screenX;
		
			document.getElementById("screenY").textContent = window.screenY;
		
			document.getElementById("screenWidth").textContent = window.innerWidth;
		
			document.getElementById("screenHeight").textContent = window.innerHeight;
		
			document.getElementById("location").textContent = window.pathname;
		},
		resize: function() {
			window.addEventListener("resize", this.render);
		},
		devInfo: function() {
			var btnDev = document.getElementById("dev-info");
			btnDev.addEventListener("click", function() {
				//add your code here to display developer information in 'p' block

				var devInfo="<br>" + "Mitushi Sindher" + "<br>" + "It Student" + "<br>" + "<a href='https://github.com/Twinkle1498/ITE220'>https://github.com/Twinkle1498/ITE220</a>";

				var devInfoElement= document.getElementById("dev-info-container");

				devInfoElement.innerHTML=devInfo;

				
			});
		}	
	}
	task1.render();
	task1.resize();
	task1.devInfo();
})(); //end on load event
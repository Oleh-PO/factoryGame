var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ilength = 89;
var xLength = 9;
var restar = true;
var word = {};
var bilding = {};
var element = "factory";
var numberBild = 0;
var selectedDraw = "bild";
var falseRender = false;
var money = 1000;
var moneySpend = 50;
var lineTons = 100;
var factoryPes = 5;
var caveSpeed = 70;
var energi = {};
var energiConekt = {};
var energiLine = false;
var controlingEnergi;
var  drawPover = function (name, x, y) {
	if (element === "energi") {
		facHTML ='<img src = "Energi.png">';
	}
	else if (element === "factori") {
		facHTML = '<img src = "factor.png">';
	}
	else if (element === "Line") {
		facHTML = '<img src = "trap.png">';
	}
	else if (element === "Line1") {
		facHTML = '<img src = "trap1.png">';
	}
	else if (element === "Line2") {
		facHTML = '<img src = "trap2.png">';
	}
	else if (element === "Line3") {
		facHTML = '<img src = "trap3.png">';
	}
	else if (element === "Cave") {
		facHTML = '<img src = "cave.png">';
	}
	else {
		return "air";
	}
	var facElement = $(facHTML);
	facElement.css({
		position : "absolute",
		left : x,
		top : y,
	});
	$("body").append(facElement);
};
var gameRender = function() {
	ctx.clearRect(0, 0, 200, 200);
	var renderX = 0;
	var renderY = 0;
	var render = 0;
	for (var i = 0; i < ilength; i++) {
		if (word[render] === "wall") {
			ctx.fillStyle = "Black";
		} else if (word[render] === "door") {
			if (doorOpen !== true) {
				ctx.fillStyle = "SaddleBrown";
			} else {
				ctx.fillStyle = "white";
			};
		} else if (word[render] === "clear") {
			ctx.fillStyle = "white";
		} else if (word[render] === "button") {
			ctx.fillStyle = "DarkGrey";
		} else if (word[render] === "line1") {
			ctx.strokeStyle = "FireBrick";
			ctx.fillStyle = "LightSlateGray";
			ctx.fillRect(renderX * 20, renderY * 20, 20, 20);
			ctx.beginPath();
			ctx.moveTo((renderX * 20) + 6, (renderY * 20) + 7);
			ctx.lineTo((renderX * 20) + 10, (renderY * 20) + 4);
			ctx.lineTo((renderX * 20) + 10, (renderY * 20) + 14);
			ctx.moveTo((renderX * 20) + 10, (renderY * 20) + 4);
			ctx.lineTo((renderX * 20) + 14, (renderY * 20) + 7);
			ctx.stroke();
			falseRender = true;
		} else if (word[render] === "line") {
			ctx.strokeStyle = "FireBrick";
			ctx.fillStyle = "LightSlateGray";
			ctx.fillRect(renderX * 20, renderY * 20, 20, 20);
			ctx.beginPath();
			ctx.moveTo((renderX * 20) + 7, (renderY * 20) + 6);
			ctx.lineTo((renderX * 20) + 4, (renderY * 20) + 10);
			ctx.lineTo((renderX * 20) + 14, (renderY * 20) + 10);
			ctx.moveTo((renderX * 20) + 4, (renderY * 20) + 10);
			ctx.lineTo((renderX * 20) + 7, (renderY * 20) + 14);
			ctx.stroke();
			falseRender = true;
		} else if (word[render] === "line3") {
			ctx.strokeStyle = "FireBrick";
			ctx.fillStyle = "LightSlateGray";
			ctx.fillRect(renderX * 20, renderY * 20, 20, 20);
			ctx.beginPath();
			ctx.moveTo((renderX * 20) + 6, (renderY * 20) + 13);
			ctx.lineTo((renderX * 20) + 10, (renderY * 20) + 16);
			ctx.lineTo((renderX * 20) + 10, (renderY * 20) + 6);
			ctx.moveTo((renderX * 20) + 10, (renderY * 20) + 16);
			ctx.lineTo((renderX * 20) + 14, (renderY * 20) + 13);
			ctx.stroke();
			falseRender = true;
		} else if (word[render] === "line2") {
			ctx.strokeStyle = "FireBrick";
			ctx.fillStyle = "LightSlateGray";
			ctx.fillRect(renderX * 20, renderY * 20, 20, 20);
			ctx.beginPath();
			ctx.moveTo((renderX * 20) + 13, (renderY * 20) + 6);
			ctx.lineTo((renderX * 20) + 16, (renderY * 20) + 10);
			ctx.lineTo((renderX * 20) + 6, (renderY * 20) + 10);
			ctx.moveTo((renderX * 20) + 16, (renderY * 20) + 10);
			ctx.lineTo((renderX * 20) + 13, (renderY * 20) + 14);
			ctx.stroke();
			falseRender = true;
		} else if (word[render] === "energi") {
			ctx.strokeStyle = "GoldenRod";
			ctx.fillStyle = "Navy";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc((renderX * 20) + 10, (renderY * 20) + 10, 9, 0, Math.PI * 2, false);
			ctx.fill();
			ctx.beginPath();
			ctx.arc((renderX * 20) + 10, (renderY * 20) + 10, 7, 0, Math.PI * 2, false);
			ctx.stroke();
			falseRender = true;
		} else if (word[render] === "factory") {
			ctx.fillStyle = "Chocolate";
		} else if (word[render] === "cave") {
			ctx.fillStyle = "Grey";
		} else if (word[render] === "portalA") {
			ctx.fillStyle = "Gold";
		} else if (word[render] === "portalB") {
			ctx.fillStyle = "DeepSkyBlue";
		} else if (word[render] === "buster") {
			if (busterAvailable === true) {
				ctx.fillStyle = "SeaGreen";
			} 
			else {
				ctx.fillStyle = "white";
			}
		} else if (word[render] === "lever") {
			ctx.fillStyle = "SlateGrey";
		} else {
			ctx.fillStyle = "white";
		}
		if (falseRender === false) {
			ctx.fillRect(renderX * 20, renderY * 20, 20, 20);
		}
		else {
			falseRender = false;
		}
		if (renderX === xLength) {
			renderY++;
			renderX = 0;
		} else {
			renderX++;
		}
		if (renderY === 0) {
			render = String(renderX);
		} else {
			render =  String(renderY) + String(renderX);
		};
	};
};
$("#selector").click(function(event){ //Menu main
	var clickX = event.offsetX;
	var clickY = event.offsetY;
	console.log(clickX + " X");
	if (clickX < 30) {
		selectedDraw = "bild";
		$("#selectorBild").text("Factory, Power, Line(1, 2, 3, 4), Cave ");
	}
	else if (clickX > 30 && clickX < 110 ) {
		selectedDraw = "upgrade";
		$("#selectorBild").text("Line Max T, Factory %, Cave Speed");
	}
	else if (clickX > 169 && clickX < 210) {
		element = "clear";
		moneySpend = 0;
	}
});
$("#selectorBild").click(function(event){ //Menu second
	var clickX = event.offsetX;
	var clickY = event.offsetY;
	console.log(clickX);
	if (selectedDraw === "bild") {
		if (clickX < 55) {
			element = "factory";
			console.log("Factory");
			moneySpend = 50;
		}
		else if (clickX > 55 && clickX < 100) {
			element = "energi";
			moneySpend = 45;
		}
		else if (clickX > 100 && clickX < 150) {
			element = "line";
			moneySpend = 25;
		}
		else if (clickX > 150 && clickX < 170) {
			element = "line1";
			moneySpend = 25;
		}
		else if (clickX > 170 && clickX < 190) {
			element = "line2";
			moneySpend = 25;
		}
		else if (clickX > 190 && clickX < 210) {
			element = "line3";
			moneySpend = 25;
		}
		else if (clickX > 210 && clickX < 250) {
			element = "cave";
			moneySpend = 60;
		}
	}
	else if (selectedDraw === "upgrade") {
		if (clickX < 80) {
			money = money - 100;
			$("#selector").text("Bild Upgrade " + money + "$ Clear");
			lineTons = lineTons + 50;
		}
		else if (clickX > 80 && clickX < 160) {
			money = money - 150;
			$("#selector").text("Bild Upgrade " + money + "$ Clear");
			factoryPes = factoryPes + 1;
		};
	};
});
setInterval(function () { //conveir code
	var xRender = 0;
	var yRender = 0;
	for (var i = 0; i < ilength; i++) {
		if (restar === true) {
			restar = false;
		} else if (yRender === 0) {
			if (word[xRender] === "cave") {
				var CaveX = xRender;
				var CaveY = 0;
				var clickY = 0;
				console.log(CaveY + "_" + CaveX);
				if (word[String(xRender - 1)] === "line") {
					bilding[String(xRender - 1)] = lineTons;
				}
				if (word[String(xRender + 1)] === 'line2') {
					bilding[String(xRender + 1)] = lineTons;
				}
				if (word[String(yRender + 1) + String(xRender)] === 'line3') {
					bilding[String(yRender + 1) + String(xRender)] = lineTons;
				}
				console.log(bilding);
			};
		} else if (yRender > 0) {
			if (word[String(yRender) + String(xRender)] === "cave") {
				// var portalCor = String(y) + String(x);
				var CaveX = xRender;
				var CaveY = yRender;
				// console.log(portalCor);
				console.log(CaveY + "_" + CaveX);
				if (word[String(yRender) + String(xRender - 1)] === "line") {
					bilding[String(yRender) + String(xRender - 1)] = lineTons;
				}
				if (word[String(yRender) + String(xRender + 1)] === 'line2') {
					bilding[String(yRender) + String(xRender + 1)] = lineTons;
				}
				if (word[String(yRender - 1) + String(xRender)] === 'line1') {
					bilding[String(yRender - 1) + String(xRender)] = lineTons;
				}
				if (word[String(yRender + 1) + String(xRender)] === 'line3') {
					bilding[String(yRender + 1) + String(xRender)] = lineTons;
				};

			console.log(bilding);
			} 
			else if (bilding[String(yRender) + String(xRender)] > 0) {
				if (word[String(yRender) + String(xRender)] === "line") {
					if (word[String(yRender) + String(xRender - 1)] === "line" || word[String(yRender) + String(xRender - 1)] === "line1" ||  word[String(yRender) + String(xRender - 1)] === "line3" || word[String(yRender) + String(xRender - 1)] === "factory") {
						bilding[String(yRender) + String(xRender)] = 0;
						bilding[String(yRender) + String(xRender - 1)] = lineTons;
					};
				};
				if (word[String(yRender) + String(xRender)] === "line1") {
					if (word[String(yRender - 1) + String(xRender)] === "line" || word[String(yRender - 1) + String(xRender)] === "line1" ||  word[String(yRender - 1) + String(xRender)] === "line2" || word[String(yRender - 1) + String(xRender)] === "factory") {
						bilding[String(yRender) + String(xRender)] = 0;
						bilding[String(yRender - 1) + String(xRender)] = lineTons;
					};
				};
				if (word[String(yRender) + String(xRender)] === "line2") {
					if (word[String(yRender) + String(xRender + 1)] === "line" || word[String(yRender) + String(xRender + 1)] === "line1" ||  word[String(yRender) + String(xRender  + 1)] === "line2" || word[String(yRender) + String(xRender + 1)] === "factory") {
						bilding[String(yRender) + String(xRender)] = 0;
						bilding[String(yRender) + String(xRender + 1)] = lineTons;
					};
				};
				if (word[String(yRender) + String(xRender)] === "line3") {
					if (word[String(yRender + 1) + String(xRender)] === "line" || word[String(yRender + 1) + String(xRender)] === "line2" ||  word[String(yRender + 1) + String(xRender )] === "line3" || word[String(yRender + 1) + String(xRender)] === "factory") {
						bilding[String(yRender) + String(xRender)] = 0;
						bilding[String(yRender + 1) + String(xRender)] = lineTons;
					};
				};
				if (word[String(yRender) + String(xRender)] === "factory") {
					money = money + Math.floor(bilding[String(yRender) + String(xRender)] * factoryPes * 0.01);
					$("#selector").text("Bild Upgrade " + money + "$ Clear");
					bilding[String(yRender) + String(xRender)] = 0;
				};
			};
		};
		if (xRender === xLength) {
			xRender = 0;
			yRender++;
		} else {
			xRender++;
		};
	};
	restar = true;
	// var CaveX = portalCor[1];
	// var CaveY = portalCor[0];
	
}, 100);
$("#canvas").click(function(event){ //Click finder
	var clickX = event.offsetX;
	var clickY = event.offsetY;
	clickX = Math.floor(clickX / 20);
	clickY = Math.floor(clickY / 20);
	console.log(clickX);
	console.log(clickY);
	if (clickY > 0) {
		word[String(clickY) + String(clickX)] = element;
		if (word[String(clickY) + String(clickX)] === "energi" && energiLine === false) {
			energiLine = true;
			controlingEnergi = String(clickY) + String(clickX);
		}
		else if (word[String(clickY) + String(clickX)] === "energi" && energiLine === true) {
			energiLine = false;
			energiConekt[String(clickY) + String(clickX)] = controlingEnergi;
		}
	}
	else {
		word[clickX] = element;
	};
	money = money - moneySpend;
	$("#selector").text("Bild Upgrade " + money + "$ Clear");
	console.log(word);
	gameRender();
	// drawPover(numberBild, (clickX * 15) + 8 , (clickY * 15) + 100);
});
// Energi.png
// var draw = function (name, element, x, y) {
	
// }
var min,sec,taste;
var string,array;
var array = [];

$(window).on('load',function(){

	string = location.search;

	calc();

	min = array[0];
	sec = array[1];
	taste = array[2];

	var source;

	if(taste == 'ton'){
		source = 'url("images/ton1.PNG")';
	}else if(taste == 'sio'){
		source = 'url("images/sio1.PNG")';
	}else if(taste == 'syoyu'){
		source = 'url("images/syoyu1.PNG")';
	}else if(taste == 'miso'){
		source = 'url("images/miso1.PNG")';
	}


	$('body').css('background-image',source);


	$("#min").text(min);
	$("#sec").text(sec);

 });

function calc(){
	var preeq = -1;
	var preand = -1;

	for(var i=0; i<3; i++){
		var eq = string.indexOf('=',preeq+1);
		if(i != 2){
			var and = string.indexOf('&',preand+1);
			var num = string.substr(eq+1,and-eq-1);
		}else{
			var num = string.substr(eq+1,5);
		}

		preeq = eq;
		preand = and;

		array.push(num);
	}
}

var testTimer;
var timer = false;

function start(){

	timer = !timer;

	if(timer == true){
		$('#start').html('ストップ');

		testTimer = setInterval(function(){

			if (sec <= 0 && min <= 0){
				toggle = false;
				clearInterval(testTimer);
				finish();
			} else if (sec <= 0) {
				min--;
				sec = 59;
				var i = 1;
				
				if (min == 1){
					i = 2;
				}else if (min == 0){
					i = 3;
				}
			
				$('body').css('background-image',"url(images/"+ taste + i +".PNG)");

			} else {
				sec--;
			}
			$("#min").text(min);
			$("#sec").text(sec);

		},1000);

	}else{
		$('#start').html('スタート');
		clearInterval(testTimer);
	}
}

function finish(){
	window.location.href = 'index3.html?taste=' + taste;
}

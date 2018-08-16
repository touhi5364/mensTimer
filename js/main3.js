$(window).on('load',function(){

	var string = location.search;

	var eq = string.indexOf('=');
	var taste = string.substr(eq+1,5);

	if(taste == 'ton'){
		source = 'url("images/豚骨.PNG")';
		$(".texts p").text("豚骨");
	}else if(taste == 'sio'){
		source = 'url("images/塩.PNG")';
		$(".texts p").text("塩");
	}else if(taste == 'syoyu'){
		source = 'url("images/醬油.PNG")';
		$(".texts p").text("しょゆ");
	}else if(taste == 'miso'){
		source = 'url("images/味噌.PNG")';
		$(".texts p").text("味噌");
	}

	$('body').css('background-image',source);

 });
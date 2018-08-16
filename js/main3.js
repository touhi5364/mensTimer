$(window).on('load',function(){

	var string = location.search;

	var eq = string.indexOf('=');
	var taste = string.substr(eq+1,5);

	if(taste == 'ton'){
		source = 'url("images/豚骨.PNG")';
		$(".texts p").text("ありのままの俺をお届けするぜぇええ！ヒョウッ！！！");
	}else if(taste == 'sio'){
		source = 'url("images/塩.PNG")';
		$(".texts p").text("たまたまラーメン余ったからやるよ…！黙って食えっ！！");
	}else if(taste == 'syoyu'){
		source = 'url("images/醬油.PNG")';
		$(".texts p").text("冷めないように、懐であっためといたZE！");
	}else if(taste == 'miso'){
		source = 'url("images/味噌.PNG")';
		$(".texts p").text("おじさんの手料理を喰らえ♪");
	}

	$('body').css('background-image',source);

 });
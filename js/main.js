var min,sec;
var taste;

var tasteClick=false,timeClick=false;

$('.taste img').on('click', function(){
	tasteClick = true;
	$('.taste img').removeClass('selected');
	$(this).addClass('selected');

	taste = $(this).attr('id');

	console.log(taste);

});

$('.controls div').on('click', function(){
	timeClick = true;
	$('.controls div').removeClass('selected');
	var id = $(this).attr('id');

	if(id == 'three'){
		min = 3;
		sec = 00;
	}else if(id == 'three-half'){
		min = 3;
		sec = 30;
	}else if(id == 'four'){
		min = 4;
		sec = 0;
	}else if(id == 'five'){
		min = 5;
		sec = 00;
	}

	$(this).addClass('selected');

}); 

function enter(){

	if(tasteClick == false || timeClick == false){
		alert('全て選択して下さい')
	}else{
		window.location.href = 'index2.html?min=' + min +'&sec=' + sec + '&taste=' + taste;
	}
}
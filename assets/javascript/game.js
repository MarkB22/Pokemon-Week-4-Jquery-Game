$(document).ready(function(){

	var firstPlayerDone= false;

function firstPlayer(){


	$(".enemy").on('click', function(){
		$(this).appendTo(".player")
		// $(".enemy").text(this.value);
		console.log(this.value)
	});

}

	function secondPlayer(){

		if (firstPlayerDone){
			
			$(".enemy").on('click', function(){
			$(this).appendTo(".fighter")
			console.log(this.value)
		});
	}
}


$(".enemy").on('click', function(){
			firstPlayer();


})


  

$(".fight").on("click", function() {
	firstPlayerDone = true;
        console.log(this.value)
        
    })

$(".enemy").on('click', function(){
	
	secondPlayer();

 });

});
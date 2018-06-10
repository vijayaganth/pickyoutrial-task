$(function () {

	/* Box Animation */
	$('#forwardBox').on('click', function(e){
		$('.black-box').removeClass('animation-backward');
		$('.black-box').addClass('animation-forward');
	});

	$('#backWardBox').on('click', function(e){
		$('.black-box').removeClass('animation-forward')
		$('.black-box').addClass('animation-backward');
	});

	if($('.black-box').hasClass('animation-forward')) {
		setTimeout(function(){ 
			$('.black-box').removeClass('animation-forward') 
		}, 5000);
	}

	if($('.black-box').hasClass('animation-backward')) {
		setTimeout(function(){ $('.black-box').removeClass('animation-backward') }, 5000);
	}
	/* Box Animation */



	/* Add list with text box value */
	$('#insertList').click(function(){
		var text = $('#textBox').val();
		var $newlist = $("<li>"+ text +"</li>");
		if(text!=="")
		$(".list-block ul").append($newlist);
		$('#textBox').val('');
	});
	/* Add list with text box value */

	

});
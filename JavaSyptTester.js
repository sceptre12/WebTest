$(document).ready(function(){

	//navigation click actions
	$('.scroll-link').on('click',function(event)
		{
			event.preventDefault();
			var sectionID = $(this).attr("data-id");
			scrollToID('#' + sectionID, 750);
		});
});

//scroll function
function scrollToID(id, speed)
{
	var offset = 50;
	var targetOffset = $(id).offset().top - offset;
	var mainNav = $('#mainNav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open"))
	{

		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined")
{
	console = {
		log:function(){}
	}
}
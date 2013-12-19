$(document).ready(function(){

		$("p").hide();

		$("h1").click(function()
			{
				$(this).next().slideToggle(9999);
			});
	});
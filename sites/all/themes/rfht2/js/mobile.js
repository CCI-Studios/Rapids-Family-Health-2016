(function($){

$(function(){

	$('#block-block-5').click(function(){

		$('#block-system-main-menu').slideToggle();
	});



	$('#block-system-main-menu li.expanded > a').click(function(e){

		e.preventDefault();
		$(this).parent().find('ul.menu').slideToggle();

	});
});

})(jQuery);

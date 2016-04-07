(function($){

$(function(){

		
		$('.view-banner .view-content').slick(
			{infinite: true,
			arrows: true,
			dots: false}); 
		$('.view-banner .slick-arrow').insertAfter('.view-banner .views-field-body .field-content');


	 	var max1=$('.view-banner .views-row').length;

	 	var feature= $('#block-imageblock-1');
	 	var programs= $('#block-imageblock-2');
	 	var events= $('#block-imageblock-3');

 		replacebg_blocks(feature);
 		replacebg_blocks(programs);
 		replacebg_blocks(events);

	 	setTimeout(function(){
	 		
	 		replacebg();


	 	},100)
	 	function replacebg()
	 	{
	 		for(var i=1; i<=max1; i++)
	        {
				var imgSrc1 = $('.view-banner .views-row-'+i+' .views-field-field-image-banner img').attr('src');
				var current2 = $('.view-banner .views-row-'+i+' .views-field-field-image-banner');
				$('.view-banner .views-row-'+i+' .views-field-field-image-banner img').remove();
				$(current2).append('<div class="backbg"></div>');
				$('.view-banner .views-row-'+i+' .views-field-field-image-banner .backbg').css('background-image', 'url(' + imgSrc1 + ')');  
	 	    }
	 	}

	 	function replacebg_blocks(block)
	 	{
 			var imgSrc1 = block.find('.block-image img').attr('src');
			var current2 = block.find('.block-image');
			block.find('.block-image img').remove();
			block.find(current2).append('<div class="backbg"></div>');
			block.find('.block-image .backbg').css('background-image', 'url(' + imgSrc1 + ')');  
	 	}
     	

		//boxHeight(0.3);

		function boxHeight(h)
		{
			var width=$(window).width();
		  	$('#block-views-banner-block .backbg, #block-views-banner-block .views-row').css({'height':h*width});
		  	$('.views-field-field-image-banner').css({'height':h*width});
		}

		if($(window).width() < 580)
		{
			//boxHeight(0.8);
		}

	  	$(window).resize(function(){

		  	//boxHeight(0.3);

		  	if($(window).width() < 580)
			{
				//boxHeight(0.8);
			}

	  	});

	  	$('#block-system-main-menu .menu li a').wrapInner('<span></span>');
});

})(jQuery);

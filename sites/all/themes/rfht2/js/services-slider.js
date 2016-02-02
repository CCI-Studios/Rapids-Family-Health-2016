(function($) {
	var active = 0;
	var min = 0;
	var max = 0;
	var timer;
	var row=[];

	$(function()
	{
		init();	
		
	});

	function init()
	{
		
		$("#block-views-program-services-detail-block .prev").click(clickPrevious);
		$("#block-views-program-services-detail-block .next").click(clickNext);
		$(".view-program-services-detail .views-row").click(stop);
		max = rows().length;


		$('.view-team-description a.close').click(function(e){

			e.preventDefault();
			console.log('clicked');
			$('#block-views-team-description-block-1').removeClass('open');
			$('.view-our-team').removeClass('close');
		});


		 hideArrows();
		 createIndicators();
		setTimeout(layout, 50);
		$(window).resize(layout);
		
	}
	
	  function createIndicators()
        {
            var $ul = $("<ul class='indicators' />");
            i=0;
            rowsName().each(function(i){

                if (i < max)
                {   
                    row[i]=rowsName().eq(i).text(); 
                }
            });
         $.each( row, function( i,val ) {
         if (i < max)
            {   
                 var $li = $("<li>"+val+"</li>");
                    $li.click(clickIndicator_inner);
                    $ul.append($li);
                    console.log(val);
            }
        
        });
            $ul.find(":first-child").addClass("firstitem");
            $ul.find(":last-child").addClass("lastitem");
            $ul.appendTo(".view-header");
            $ul.find(":first-child+li").addClass('nextitem');
        }


	function start()
	{
		timer = setInterval(timerNext, 8000);
	}

	function container()
	{
		return $(".view-program-services-detail .view-content");
	}
	function rows()
	{
		return container().find(".views-row");
	}
	function indicators()
	{
		return $(".view-program-services-detail .indicators li");
	}

	function layout()
	{
		var numRows = rows().length;
		var containerWidth = numRows * rowWidth();
		var width = 1/numRows*100
		container().width(containerWidth+"%");
		rows().width(width+"%");
	}

	function moveContainer()
	{
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},1500);
		setActiveIndicator(active);
	}
	function jumpToEnd()
	{
		var active = rows().length-rowsPerPage();
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function jumpToBeginning()
	{
		var active = min;
		var left = "-" + (active*rowWidth()) + "%";
		container().css({"left":left});
	}
	function rowWidth()
	{
		return 100/rowsPerPage();
	}
	function rowsPerPage()
	{
		if (isMobile())
		{
			return 1;
		}
		else if (isTablet())
		{
			return 1;
		}
		
		return 1;
	}

	function isMobile()
	{
		return $(window).width() < 540;
	}
	
	function isTablet()
	{
		return $(window).width() < 1220;
	}

	function previous()
	{
		if (hasPrevious())
        {
			active--;
			moveContainer();
			hideArrows();
		}
	}

	function next()
	{
		if (hasNext())
        {
			active++;
			moveContainer();
			hideArrows();
		}
	}

	function gotoIndex(i)
	{
		active = i;
		$('ul.indicators li').removeClass('active');
		var left = "-" + (active*rowWidth()) + "%";
		container().stop(false, false).animate({"left":left},0);
		setActiveIndicator(active);
		//moveContainer();
	}

	 
    function rowsName()
    {
        return container().find(".views-row .views-field-name span");
    }

	function clickPrevious()
	{
	
		previous();
		stop();
		return false;
	}

	function clickNext()
	{	
		next();
		stop();
		return false;
	}

	function clickIndicator_inner()
    {
        var i = $(this).index();
        setActiveIndicator(i);
        gotoIndex(i);
        stop();
    }

	function clickIndicator(i)
	{
		
		setActiveIndicator(i);
		gotoIndex(i);
		console.log(i);
		if($(window).width()<1080)
		{
			$("html, body").animate({ scrollTop: 0 }, 0);
			return false;

		}
		else
		{
			$("html, body").animate({ scrollTop: 200 }, 0);
			return false;
		}
		
		stop();
	}

	function setActiveIndicator(i)
	{	

			if(!hasPrevious())
			{
				indicators().removeClass("previtem nextitem");
				indicators().removeClass("active").eq(i).addClass("active");

			}
			else if(!hasNext())
			{
				indicators().removeClass("previtem nextitem");
				indicators().removeClass("active").eq(i).addClass("active");
			}
			else
			{
				indicators().removeClass("active").eq(i).addClass("active");
				indicators().removeClass("previtem").eq(i-1).addClass("previtem");
				indicators().removeClass("nextitem").eq(i+1).addClass("nextitem");
			}
		
	}

	function stop()
	{
		clearInterval(timer);
	}

	function timerNext()
	{
		next();
		layout();
	}

	 function minIndex()
    {
        return 0;
    }
    function maxIndex()
    {
        return rows().length - rowsPerPage();
    }
    function hasPrevious()
    {
        if (active - 1 < minIndex())
            return false;
        return true;
    }
    function hasNext()
    {
        if (active + 1 > maxIndex())
            return false;
        return true;
    }
    function hideArrows()
    {
    	var $btnPrevious = $("#block-views-program-services-detail-block .prev");
    	var $btnNext = $("#block-views-program-services-detail-block .next");

        if (hasPrevious())
        {
            $btnPrevious.show();
        }
        else
        {
            $btnPrevious.hide();
                        $('<p>Prev</p>').insertAfter.$btnPrevious;

        }

        if (hasNext())
        {
            $btnNext.show();
        }
        else
        {
            $btnNext.hide();
        }
    }


}(jQuery));

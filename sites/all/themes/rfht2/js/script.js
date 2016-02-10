(function($) {
    $(function(){
       
       $('.view-our-team .views-field-title').click(function(){

             
            $(this).parent().find('.views-field-body').slideToggle();
            $(this).parent().find('.views-field-body-1').toggleClass('hide');
            $('.views-field-body').not($(this).parent().find('.views-field-body')).slideUp();
            $('.view-our-team .views-field-title').not($(this)).removeClass('open');
            $(this).toggleClass('open');
       });

        $('.view-physicians h3,.view-accepting-new-patients h3').click(function(){

            $(this).parent().parent().find('.views-field-body').slideToggle();
            $('.views-field-body').not($(this).parent().parent().find('.views-field-body')).slideUp();
            $('.view-physicians h3,.view-accepting-new-patients h3').not($(this)).removeClass('open');
            $(this).toggleClass('open');
       });


        if($(window).width() < 920)
        {
          $('#services-nav').insertAfter('#page-title');
        }

        $(window).resize(function()
        {

          if($(window).width() < 920)
          {
            $('#services-nav').insertAfter('#page-title');
          }
          else
          {
            $('#services-nav').insertBefore('.field-name-body');
          }

        });

       if(window.location.href.indexOf("program-services/") > -1)
       {
          var pathname = window.location.pathname; 
          var pathname=pathname.substr(pathname.indexOf('/',0)).split('/')[2];
          var pathname=pathname.replace(/%20/g," ");
           var pathname=pathname.replace(/-/g," ");
          var sd = "'"+pathname+"'";
           console.log(toTitleCase(sd));
       }
       else
       {
          var pathname = window.location.pathname; 
          var pathname2=pathname.substr(pathname.indexOf('/',0)).split('/')[1];
          var pathname1=pathname2.replace(/-/g, " ");
          var sd = "'"+ pathname1+"'";
         
       }

      function toTitleCase(str)
      {
          return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
  
      $(".view-program-services .views-row .field-content span:contains("+toTitleCase(sd)+")").parents('.views-row').addClass('active');


     
      if($('.field-name-field-category-cal').length > 1)
      {
         var link = $(this).find('.field-item').text();
          str = link.replace(/\s+/g, '-').toLowerCase();
          console.log(str);
      }

      $('#menu-about').click(function(e){

        e.preventDefault();

      });

      /* Calendar pop up event size*/

      var cboxOptions =
       {
        width: '95%',
        height: '95%',
        maxWidth: '500px',
        maxHeight: '400px',
       }

        $('#colorbox').colorbox(cboxOptions);

        $(window).resize(function(){
            $.colorbox.resize({
              width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
              height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height,

            });
        });

      /* Thank you message pop up */
      if (document.location.href.indexOf('submit') > -1  )
      {
        $('#block-block-6').fadeIn();
        $('#block-block-6').addClass('overlay');  
      }

      $(document).mouseup(function (e)
      { 
        var container =$('#block-block-6');
        if (!container.is(e.target)
                  && container.has(e.target).length === 0) 
              {
                  container.fadeOut();
              }
      });


      /*placeholder*/

       $('html.lt-ie10 [placeholder]').focus(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.css('padding-bottom','15px');
            input.val(input.attr('placeholder'));
          }
        }).blur();

    });
  

    $('html.lt-ie10 [placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
   
}(jQuery)); 
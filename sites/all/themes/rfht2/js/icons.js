(function($) {
    $(function()
    {
        if($(".view-program-services .field-icons").length > -1)
        {
          $(".view-professional-servcies .field-icons").each(function(){
              var at = $(this).parent('.content').attr('id');
              console.log(at);
              var icon =  $(this).text(); 
              console.log(icon);

              if (icon)
              {     
                  var title_url = "/sites/all/themes/KBHNS/images/icons/"+icon+".png";
                  var title_url_small="/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png";
                  $("<span class=\"icons\" style=\"background-image:url('/sites/all/themes/KBHNS/images/icons/"+icon+"-small.png')\"></span>").prependTo(('.view-ps-sidebar a[href="#'+at+'"]'));
                  $("<span><img class=\"title-icons\" src='"+title_url+"' alt='' /></span>").insertBefore($(this).parent('.content').find(".views-field-title span"));
              }
          });
        }

        $('.view-program-sub-category  .field-content span').each(function() {
           var word = $(this).html();
           var index = word.lastIndexOf(' ');
           var wl = word.split(' ');
           var len = word.length;
           if(index == -1) {
              index = word.length;
           }

           if(wl.length > 1)
           {
             $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
           }

           if(wl.length == 1)
           {
             $(this).html('<span class="single-word">' + word.substring(0, index) + '</span>');
           }
        });

         $('#menu-hpr span').each(function() {
           var word = $(this).html();
           var index = word.indexOf(' ',word.indexOf(' ') + 1);
           var wl = word.split(' ');
        
           if(wl.length > 1)
           {
             $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
           }
  
        });

           $('#menu-pr span').each(function() {
           var word = $(this).html();
           var index = word.indexOf(' ');
           var wl = word.split(' ');
        
           if(wl.length > 1)
           {
             $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
           }

  
        });
  });
}(jQuery));
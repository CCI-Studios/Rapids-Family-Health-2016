
(function($) {
    $(function()
    {    // Reset Font Size



  var originalFontSize = $('html').css('font-size');

    $(".resetFont").click(function () {
        $('html').css('font-size', originalFontSize);
    });
    // Increase Font Size
    $("#text-resize-increase").on('click', function () {
        changeFontSize(true);
    });
    // Decrease Font Size
    $("#text-resize-decrease").on('click', function () {

        changeFontSize(false);
    });


var changeFontSize = function (increaseFont) {
    var fontTargets = new Array('#content p, .views-row p, .block p, #content li');

    fontTargets.forEach(function (element) {
        var $element = $(element);
        var newFontSize;
        var currentFontSize = $element.css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);

        if (increaseFont) {
          

            if(currentFontSizeNum < 28)
            {     $element.css('font-size', 0);
                newFontSize = currentFontSizeNum * 1.2;
            }
            
        } else {
            if(currentFontSizeNum > 22)
            {
                newFontSize = currentFontSizeNum * 0.8;

            }
        }

        $element.css('font-size', newFontSize);
    });
};


});


}(jQuery));




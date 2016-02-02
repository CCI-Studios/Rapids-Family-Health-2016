
(function($) {
    $(function()
    {    // Reset Font Size
    var originalFontSize = $('html,p').css('font-size');

    $("#text-resize-decrease").click(function () {
        $('html,p').css('font-size', originalFontSize);
    });
    // Increase Font Size
    $("#text-resize-increase").on('click', function () {
        changeFontSize(true);
    });
    // Decrease Font Size
    $("#text_resize_decrease").on('click', function () {
        changeFontSize(false);
    });

    var changeFontSize = function (increaseFont) {
    var fontTargets = new Array('#content', '#content p');

    fontTargets.forEach(function (element) {
        var $element = $(element);
        var newFontSize;
        var currentFontSize = $element.css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);

        if(currentFontSizeNum < 28)
        {
          if (increaseFont) {
            $element.css('font-size', 0);
                newFontSize = currentFontSizeNum * 1.2;
            } else {
                newFontSize = currentFontSizeNum * 0.8;
            }
        }
      
        $element.css('font-size', newFontSize);
    });
}

});
}(jQuery));

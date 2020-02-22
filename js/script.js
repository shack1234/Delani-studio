// 'what we do' functions
$(document).ready(function () {
    $(".design_icon").click(function () {
        $("#design_icon").toggle();
        $("#design-p").toggle();
    });
    $(".dev_icon").click(function () {
        $("#development").toggle();
        $("#dev_icon").toggle();
    });
    $(".product_icon").click(function () {
        $("#pmanagent").toggle();
        $("#product_icon").toggle();
    });
});
//characters counting on remaining text
$(document).ready(function () {
    var textMax = 500;
    $('#textarea-feed').html(textMax + " " + 'characters remaining');
    $('#textarea').keyup(function () {
        var textLength = $('#textarea').val().length;
        var textRemaining = textMax - textLength;
        $('#textarea-feed').html(textRemaining + " " + 'characters remaining');
    });
});
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

// form validation
function myforms() {
    var buttons = document.getElementById("button");
    buttons.onclick = function (event) {
        var name = document.forms["myForm"]["cName"].value;
        var email = document.forms["myForm"]["cEmail"].value;
        var message = document.forms["myForm"]["textarea"].value;
        if (name == "" || email == "" || message == "") {
            alert("Please fill in all the fields and try again to submit");
            return false;
        }
        if (name !== "" && email !== "" && message !== "") {
            alert("Hello " + name + " " + ", Your message has been sent successful! we will reach out to you soon");
        }
    }
}
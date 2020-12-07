// Content Contact Form
// ---------------------------------------------------------------------------------------
$(function () {
    $("#af-form .form-control").tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    $('#af-form .form-control').blur(function () {
        $(this).tooltip({placement: 'top', trigger: 'manual'}).tooltip('hide');
    });

    $("#af-form #submit_btn").click(function () {
        // validate and process form
        // first hide any error messages
        $('#af-form .error').hide();

        var name = $("#af-form input#name").val();
        if (name == "" || name == "Name...." || name == "Name" || name == "Name *" || name == "Type Your Name...") {
            $("#af-form input#name").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form input#name").focus();
            return false;
        }
        var email = $("#af-form input#email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //console.log(filter.test(email));
        if (!filter.test(email)) {
            $("#af-form input#email").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form input#email").focus();
            return false;
        }
        var subject = $("#af-form input#subject").val();
        if (subject == "") {
            $("#af-form input#subject").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form input#subject").focus();
            return false;
        }
        var message = $("#af-form #input-message").val();
        if (message == "" || message == "Message...." || message == "Message" || message == "Message *" || message == "Type Your Message...") {
            $("#af-form #input-message").tooltip({placement: 'bottom', trigger: 'manual'}).tooltip('show');
            $("#af-form #input-message").focus();
            return false;
        }

        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"php/contact-form.php",
            data:dataString,
            success:function () {
                $('#af-form').prepend("<div class=\"alert alert-success fade in\"><button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>Contact Form Submitted!</strong> We will be in touch soon.</div>");
                $('#af-form')[0].reset();
            }
        });
        return false;
    });
});
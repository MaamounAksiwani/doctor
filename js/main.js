$(document).ready(function() {
    /// let mynav = $('nav').innerHeight();
    let mywindow = $(window).height();
    $(".header , .carousel-item").height(mywindow);


    $(window).scroll(function() {
        if ($(this).scrollTop() > 45) {
            $(".up").show();
        } else {
            $(".up").hide();
        }
    });

    $(".up").click(function() {

        $('html,body').animate({ scrollTop: 0 }, 700);
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 55) {
            // $('.navbar').addClass("navover");
            $(".navbar-brand").css("font-weight", "bold");
            $(".navbar-brand").css("color", "#000");
            $(".navbar").removeClass("newnav");
            //  $(".nabar").addClass("navover");
        } else {
            /// $('.navbar').removeClass("navover");
            //    $(".nabar").removeClass("navover");
            $(".navbar").addClass("newnav");
            $(".navbar-brand").css("font-weight", "normal");
            $(".navbar-brand").css("color", "#fff");

        }
    });
    window.onload = function() { $("#showPassword").hide(); }

    $("#txtPassword").on('change', function() {
        if ($("#txtPassword").val()) {
            $("#showPassword").show();
        } else {
            $("#showPassword").hide();
        }
    });

    $(".reveal").on('click', function() {
        var $pwd = $("#txtPassword");
        if ($pwd.attr('type') === 'password') {
            $pwd.attr('type', 'text');
        } else {
            $pwd.attr('type', 'password');
        }
    });

    $(".navbar-light .navbar-nav .nav-link:last").click(function() {

        $(".login").fadeIn(500);
    });

    $(".close").click(function() {
        $(".login").fadeOut(500);
    });

    $(".login-button").click(function(e) {
        e.preventDefault();
    })
})


let mylink = document.querySelectorAll(".navbar-light .navbar-nav .nav-link");
mylink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(e.target.dataset.class).scrollIntoView({

            behavior: 'smooth'
        })
    })
});
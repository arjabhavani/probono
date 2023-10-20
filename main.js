$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
    $(".close-button").on('click', function () {
        console.log('it is working')
        $('.top-advt').remove();
    });
    $(".side-close-btn").on('click', function () {
        $(".drop-down-nav").removeClass('active');
    });
    $('.hamburger').on('click', function(){
        console.log('it is working')
        $(".drop-down-nav").addClass('active');
    })

    $('.form-bt').on('click', function () {
        var name = $('#name').val();
        console.log(name)
        var phone = $('#phone').val();
        console.log(phone)
        var email = $('#email').val();
        console.log(email)
        var city = $('#city').val();
        console.log(city)
        var country = $('#country').val();
        console.log(country)
    });


});



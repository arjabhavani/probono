$(document).ready(function () {
    $('#owl-carousel-one').owlCarousel({
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
        $('.top-advt').remove();
    });
    $(".side-close-btn").on('click', function () {
        $(".drop-down-nav").removeClass('active');
    });

    $('.hamburger').on('click', function () {
        $(".drop-down-nav").addClass('active');
    });
    $('.search').on('click', function () {
        $(".search-popup").show();
        $(".search").css('background', '#10397B');
    });
    $(".search-close-btn").on('click', function () {
        $(".search-popup").hide();
        $(".search").css('background', 'none');
    });

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

    $('.showcoupon').on('click', function () {
        $(".coupon-form-div").toggle();
    });

    $('#owl-carousel-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});



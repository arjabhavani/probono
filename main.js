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
        $('.top-advt').remove()
    });

    $('.form-bt').on('click', function () {
        var value = $('#name').val();
        // alert(value);
        console.log(value)
        var value = $('#phone').val();
        // alert(value);
        console.log(value)
        var value = $('#email').val();
        // alert(value);
        console.log(value)
        var value = $('#city').val();
        // alert(value);
        console.log(value)
        var value = $('#email').val();
        // alert(value);
        console.log(value)
    });

});



// effect sidebar icon
$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })


    // setting owl carousel
    let navText = ["<i class='bx bx-chevron-left'></i>", 
    "<i class='bx bx-chevron-right'></i>"]

    $('#movie-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        navText: navText,
        autoplayHoverPause: true
    })

    $('#top-series-slide').owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 6
            },
            1600: {
                items: 6
            }

        }
    })

    $('.movies-slide').owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 6
            },
            1600: {
                items: 6
            }

        }
    })


})



$(document).ready(function () {

//Variables
//     let hiddenElement = $('.hidden')
    let overlayMenu = $('#overlay-menu');
    let mainSearch = $('#main-search-block');
    let dropdownOptions = $('.dropdown-options');
    let collapseFilerBtn = $('#form-filter-collapse-btn');
    // let hideOnOutsideClickElements = [overlayMenu, mainSearchInputBlock, dropdownOptions, collapseFilerBtn, chooseClientModal]

//Helpers

//Initial transformations
    $(window).click(() => {
        console.log($('#choose-client-modal').is(':visible'))
        $('.hidden').hide();
        // if ($('#choose-client-modal').is(':visible')) {
        //     $('#choose-client-modal').hide();
        //     $('main, header, footer').fadeIn(110);
        //     $('body').removeClass('fixed-scroll');
        // }
        $('.header-nav-right-container:hidden').show()
    });


//Overlay-menu
    $("#nav-more").click((e) => {
        e.stopPropagation();
        overlayMenu.is(':hidden') ? overlayMenu.show() : overlayMenu.hide();
    });
    $('.overlay-menu a').click(() => {
        overlayMenu.hide();
    })

//Choose-site modal
    const showHeaderElementsForModal = () => {
        $('.header-nav-left-container > a, button').not('#home').fadeIn(500);
        $('#contact-form-nav-btn').fadeIn(500);
        $('#close-choose-site-modal-btn').fadeOut(0, () => {
            $('#main-search-btn').fadeIn(300);
        });
    };

    const hideHeaderElementsForModal = () => {
        $('.header-nav-left-container > a, button').not('#home').fadeOut(500, 0);
        $('#contact-form-nav-btn').fadeOut(500);
        $('#main-search-btn').fadeOut(0, () => {
            $('#close-choose-site-modal-btn').fadeIn(300);
        });
    };

    $('#choose-site-nav-btn').click(() => {
        hideHeaderElementsForModal();

        $('main > div, section, article').fadeOut(300, () => {
            $('#choose-site-modal').slideDown(500);
        });
    })

    $('#close-choose-site-modal-btn').click(() => {
        showHeaderElementsForModal();

        $('main > div, section, article').fadeIn(300, () => {
            $('#choose-site-modal').slideUp(500);
        });

    })

//Search
    $('#main-search-btn').click((e) => {
        e.stopPropagation();
        $('.header-nav-right-container').hide(0, () => {
            mainSearch.show();
        });
    })
    $('#close-main-search-btn').click(() => {
        $('.hidden').hide(0, () => {
            $('.header-nav-right-container').show();
        });
    })
    $('.hidden').not('#close-main-search-btn').click((e) => {
        e.stopPropagation();
    })

//Form-filter
    $('#form-filter-btn').click(function () {
        if ($('#procurements-planned .form-container-body').is(':hidden')) {
            $('.form-container-header').addClass('divider')
            $('#form-filter-clear-btn').fadeIn(500);
            $('#procurements-planned .form-container-body').slideDown(500, () => {
                $('#expand-arrow').hide();
                $('#collapse-arrow').show();
            });
        } else {
            $('#form-filter-clear-btn').fadeOut(500);
            $('#procurements-planned .form-container-body').slideUp(500, () => {
                $('#expand-arrow').show();
                $('#collapse-arrow').hide();
                $('.form-container-header').removeClass('divider')
            });
        }
    })

//Dropdown options
    $('.input-with-btn.is-select').click(function (e) {
        e.stopPropagation();
        $('.dropdown-options').hide();
        $(this).children('.dropdown-options').slideDown(500);
    })

    $('.dropdown-options  li').click(function (e) {
        $(this).addClass('chosen');
        $('.dropdown-options li').not(this).removeClass('chosen');
        $('.dropdown-options').hide();
    });

//Modal choose client
    const closeChooseClientModal = () => {
        $('main, header, footer').fadeTo(500, 1);
        $('#choose-client-modal').fadeOut(500, () => {
            $('body').removeClass('fixed-scroll');
        });
    }
    const openChooseClientModal = () => {
        $('#choose-client-modal').fadeIn(500, () => {
            $('body').addClass('fixed-scroll');
        });
        $('main, header, footer').fadeTo(500, 0.5);
    }

    $('.input-with-btn.client').click(function (e) {
        e.stopPropagation();
        openChooseClientModal();
    })

    $('#choose-client-modal, #close-choose-client-modal').click(() => {
        closeChooseClientModal();
    })

    $('#choose-client-modal .choose-client-modal-container').click(function (e) {
        e.stopPropagation();
    })
})



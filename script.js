$(document).ready(function () {

//Variables
    let lastVisiblePage = $('#main');
    let overlayMenu = $('.overlay-menu');
    let mainSearchInputBlock = $('.main-search');
    let dropdownOptions = $('.dropdown-options');
    let chooseClientModal = $('.choose-client-modal-container');
    let collapseFilerBtn = $('#form-filter-collapse-btn');
    let hideOnInitialLoadElements = [overlayMenu, mainSearchInputBlock, dropdownOptions, collapseFilerBtn, chooseClientModal]
    let hideOnOutsideClickElements = [overlayMenu, mainSearchInputBlock, dropdownOptions, collapseFilerBtn, chooseClientModal]

//Helpers

    const hideOnOutsideClick = () => {
        hideOnOutsideClickElements.forEach(element => {
            element.hide();
        })
    };

//Initial transformations
    hideOnInitialLoadElements.forEach(element => {
        element.hide();
    })


    $(window).click(() => {
        hideOnOutsideClick();
        if (mainSearchInputBlock.css('display') === 'none') {
            $('.header-nav-right-container').show();
        }
    });


//Overlay-menu
    $("#nav-more").click((e) => {
        e.stopPropagation();
        if (overlayMenu.css('display') !== 'none') {
            overlayMenu.hide();
        } else {
            overlayMenu.show();
        }
    });
    $(overlayMenu).click(e => {
        e.stopPropagation();
    })
    $('.overlay-menu button').click(() => {
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
        $('.header-nav-right-container').hide();
        mainSearchInputBlock.show();
    })
    $('#close-main-search-btn').click(() => {
        $('.header-nav-right-container').show();
        mainSearchInputBlock.hide();
    })
    $('#main-search-input')
    mainSearchInputBlock.click((e) => {
        e.stopPropagation();
    })

//Form-filter
    $('#form-filter-expand-btn').click(function () {
        $('.form-container-header').addClass('divider')
        $('#form-filter-clear-btn').show();

        $('#procurements-planned .form-container-body').slideDown(500, () => {
            $(this).hide();
            collapseFilerBtn.show();
        });

    })

    collapseFilerBtn.click(function () {
        $('#procurements-planned .form-container-body').slideUp(500, () => {
            $(this).hide();
            $('#form-filter-clear-btn').hide();
            $('#form-filter-expand-btn').show();
            $('.form-container-header').removeClass('divider');
        });
    })

//Dropdown options
    $('.input-with-btn.is-select').click(function (e) {
        e.stopPropagation();
        $(this).children('.dropdown-options').slideDown(500);
    })

    $('.dropdown-options  li').click(function (e) {
        e.stopPropagation();
        $(this).addClass('chosen');
        $('.dropdown-options li').not(this).removeClass('chosen');
    });

//Modal choose client
    $('.input-with-btn.client').click(function () {
        console.log('clicked')
        chooseClientModal.show();
        // $('body').not('.choose-client-modal-container').fadeTo(500, 0.3);

    })

});


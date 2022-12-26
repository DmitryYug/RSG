$(document).ready(function () {

//Variables
    const content = $('.router > div');
    let lastVisiblePage = $('#main');
    let overlayMenu = $('.overlay-menu');
    let mainSearchInputBlock = $('.main-search');
    let dropdownOptions = $('.dropdown-options');
    let chooseClientModal = $('.choose-client-modal-container');
    let collapseFilerBtn = $('#form-filter-collapse-btn');
    let hideOnInitialLoadElements = [overlayMenu, mainSearchInputBlock, dropdownOptions, collapseFilerBtn, chooseClientModal]
    let hideOnOutsideClickElements = [overlayMenu, mainSearchInputBlock, dropdownOptions, collapseFilerBtn, chooseClientModal]

//Helpers
    const showHeaderElementsForModal = () => {
        $('.header-nav-left-container > button').not('#home').show(100, 0);
        $('#contact-form-nav-btn').show();
        $('#main-search-btn').show();
        $('#close-choose-site-modal-btn').hide();
    };

    const hideHeaderElementsForModal = () => {
        $('.header-nav-left-container > button').not('#home').hide(100, 0);
        $('#contact-form-nav-btn').hide(100, 0);
        $('#main-search-btn').hide();
    };

    const routeTo = (pageTitle) => {
        if (pageTitle === '#main') {
            $('.background-section').fadeIn(500);
            showHeaderElementsForModal();
        } else {
            $('.background-section').fadeOut(500);
        }
        $(pageTitle).fadeIn(500)
        $(content.not(pageTitle)).fadeOut(500)
    };

    const hideOnOutsideClick = () => {
        hideOnOutsideClickElements.forEach(element => {
            element.hide();
        })
    };

//Initial transformations
    hideOnInitialLoadElements.forEach(element => {
        element.hide();
    })
    routeTo('#main');

    $('#close-choose-site-modal-btn').hide().click(() => {
        showHeaderElementsForModal();
        routeTo(`#${lastVisiblePage[0].id}`);
    });

    $(window).click(() => {
        hideOnOutsideClick();
        if (mainSearchInputBlock.css('display') === 'none') {
            $('.header-nav-right-container').show();
        }
    });

//Routing
    $('#home').click(() => {
        routeTo('#main');
    })
    $('#procurements-planned-nav-btn').click(() => {
        routeTo('#procurements-planned')
    })
    $('#procurements-about-nav-btn').click(() => {
        routeTo('#procurements-about')
    })
    $('#agreements-nav-btn').click(() => {
        routeTo('#agreements')
    })
    $('#stats-nav-btn').click(() => {
        routeTo('#stats')
    })
    $('#mtr-nav-btn').click(() => {
        routeTo('#mtr')
    })
    $('#archive-nav-btn').click(() => {
        routeTo('#archive')
    })
    $('#tt-projects-nav-btn').click(() => {
        routeTo('#tt-projects')
    })
    $('#results-nav-btn').click(() => {
        routeTo('#results')
    })
    $('#contacts-nav-btn').click(() => {
        routeTo('#contacts')
    })
    $('#contact-form-nav-btn').click(() => {
        routeTo('#contact-form')
    })

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
    const showChooseSiteModal = () => {
        $('#choose-site').fadeIn(100);
        $('#close-choose-site-modal-btn').show();
    }

    $('#choose-site-nav-btn').click(() => {
        lastVisiblePage = $('.router > div:visible:last');
        hideHeaderElementsForModal();

        if ((lastVisiblePage[0].id) === 'main') {
            $('.background-section').hide();
        }
        lastVisiblePage.hide();
        showChooseSiteModal();
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
    $('.input-with-btn.client').click(function() {
        console.log('clicked')
        chooseClientModal.show();
        // $('body').not('.choose-client-modal-container').fadeTo(500, 0.3);

    })

});


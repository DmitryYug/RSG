$(document).ready(function () {

//Variables
    const content = $('.router > div');
    let lastVisiblePage = $('#main');
    let overlayMenu = $('.overlay-menu');
    let mainSearchInput = $('.main-search');

//Helpers
    const showHeaderElementsForModal = () => {
        $('.header-nav-left-container > button').not('#home').show(100, 0);
        $('#contact-form-nav-btn').show();
        $('#main-search-btn').show();
        $('#close-choose-site-modal-btn').hide();
    }

    const hideHeaderElementsForModal = () => {
        $('.header-nav-left-container > button').not('#home').hide(100, 0);
        $('#contact-form-nav-btn').hide(100, 0);
        $('#main-search-btn').hide();
    }

    const routeTo = (pageTitle) => {
        if (pageTitle === '#main') {
            $('.background-section').fadeIn(500);
            showHeaderElementsForModal();
        } else {
            $('.background-section').fadeOut(500);
        }
        $(pageTitle).fadeIn(500)
        $(content.not(pageTitle)).fadeOut(500)
    }

//Initial transformations
    routeTo('#main');

    $('#close-choose-site-modal-btn').hide().click(() => {
        showHeaderElementsForModal();
        routeTo(`#${lastVisiblePage[0].id}`);
    });

    mainSearchInput.hide();

    $(window).click(function () {
        if (overlayMenu.hasClass('active')) {
            overlayMenu.removeClass('active');
        }

        if (mainSearchInput.css('display') !== 'none') {
            mainSearchInput.hide();
            $('.header-nav-right-container').show();
        }
    });

    $('.overlay-menu button').click(function () {
        if (overlayMenu.hasClass('active')) {
            $(overlayMenu).removeClass('active');
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
        $(overlayMenu).toggleClass('active');
    });
    $(overlayMenu).click(e => {
        e.stopPropagation();
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
        mainSearchInput.show();
    })
    $('#close-main-search-btn').click(() => {
        $('.header-nav-right-container').show();
        mainSearchInput.hide();
    })
    $('#main-search-input')
    mainSearchInput.click((e) => {
        e.stopPropagation();
    })
});

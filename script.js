$(document).ready(function () {

    //variables
    const content = $('.router > div')
    let lastVisiblePage = $('#main')

    //helpers
    const routeTo = (pageTitle) => {
        if (pageTitle !== '#main') {
            $('.background-section').fadeOut(500)
        } else {
            $('.background-section').fadeIn(500)
        }
        $(pageTitle).fadeIn(500)
        $(content.not(pageTitle)).fadeOut(500)
    }

    //Initial transformations
    routeTo('#main');
    $('#close-choose-site-modal-btn').hide().click(() => {
        showHeaderElements();
        routeTo(`#${lastVisiblePage[0].id}`);
    });;

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
    let overlayMenu = $('.overlay-menu');

    $(window).click(function () {
        if (overlayMenu.hasClass('active')) {
            $(overlayMenu).removeClass('active');
        }
    });
    $('.overlay-menu button').click(function () {
        if (overlayMenu.hasClass('active')) {
            $(overlayMenu).removeClass('active');
        }
    });

    $("#nav-more").click((e) => {
        e.stopPropagation();
        $(overlayMenu).toggleClass('active');
    });
    $(overlayMenu).click(e => {
        e.stopPropagation();
    })

    //Choose-site modal
    const hideHeaderElements = () => {
        $('.header-nav-left-container > button').not('#home').hide(100, 0);
        $('#contact-form-nav-btn').hide(100, 0);
        $('#main-search').hide();
    }

    const showHeaderElements = () => {
        $('.header-nav-left-container > button').not('#home').show(100, 0);
        $('#contact-form-nav-btn').show();
        $('#main-search').show();
        $('#close-choose-site-modal-btn').hide();
    }

    const showChooseSiteModal = () => {
        $('#choose-site').fadeIn(100);
        $('#close-choose-site-modal-btn').show();
    }

    $('#choose-site-nav-btn').click(() => {
        lastVisiblePage = $('.router > div:visible:last');
        hideHeaderElements();

        if ((lastVisiblePage[0].id) === 'main') {
            $('.background-section').hide();
        }
        lastVisiblePage.hide();
        showChooseSiteModal();
    })

    // $('#close-choose-site-modal-btn').click(() => {
    //     showHeaderElements();
    //     routeTo(`#${lastVisiblePage[0].id}`);
    // });

});

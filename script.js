$(document).ready(function () {

    //variables
    const content = $('.router > div')

    //helpers
    const routeTo = (pageTitle) => {
        $(pageTitle).fadeIn(500, () => {
            $(pageTitle).show()
        })
        $(content.not(pageTitle)).fadeOut(500, () => {
            $(content.not(pageTitle)).hide()
        })
        if (pageTitle !== '#main') {
            $('.background-section').fadeOut(100, () => {
                $('.background-section').hide()
            })
        } else {
            $('.background-section').fadeIn(100, () => {
                $('.background-section').show()
            })
        }
    }
    routeTo('#main');

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
    // const selectorsToHideChooseSiteModal = [
    //     '.background-section', '#main-start-article', '#main-search',
    //     '.header-nav-left-container .text-link',
    //     '.header-nav-right-container button:first', '.header-nav-right-container button:last'
    // ]
    //
    // $('#choose-site-btn').click(() => {
    //     hideElements(selectorsToHideChooseSiteModal)
    //     $('#choose-site, #close-choose-site-modal').toggleClass('active');
    // })
    // $('#close-choose-site-modal').click(() => {
    //     showElements(selectorsToHideChooseSiteModal)
    //     $('#choose-site, #close-choose-site-modal').removeClass('active');
    // })

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


});

$(document).ready(function () {
    //variables
    const content = $('.router > div')

    //helpers
    const routing = (pageTitle) => {
        console.log(content.not(pageTitle))
        if (pageTitle !== '#main') {
            $('.background-section').hide();
            $(content.not(pageTitle)).hide();
            $(pageTitle).show();
        } else {
            $(content.not(pageTitle)).hide();
            $(pageTitle).fadeIn();
            $('.background-section').show();
        }
    }

    const hideElements = (selectors) => {
        selectors.forEach((s) => {
            $(s).hide()
        })
    }
    const showElements = (selectors) => {
        selectors.forEach((s) => {
            $(s).show()
        })
    }

    //Overlay-menu
    let overlayMenu = $('.overlay-menu');

    $(window).click(function () {
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
        routing('#main');
    })
    $('#procurements-planned-nav-btn').click(() => {
        routing('#procurements-planned')
    })
    $('#procurements-about-nav-btn').click(() => {
        routing('#procurements-about')
    })
    $('#agreements-nav-btn').click(() => {
        routing('#agreements')
    })
    $('#results-nav-btn').click(() => {
        routing('#results')
    })


});

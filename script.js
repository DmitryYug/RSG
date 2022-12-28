$(document).ready(function () {

//Variables
    let overlayMenu = $('#overlay-menu');
    let mainSearch = $('#main-search-block');

//Helpers

//Initial transformations
    $(window).click(() => {
        $('.hidden').hide();
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

//Form-filter-expand
    const formAccordionHandler = (formBodySelector) => {
        if ($(formBodySelector).is(':hidden')) {
            $('.form-container-header').addClass('divider')
            $('#form-filter-clear-btn').fadeIn(500);
            $(formBodySelector).slideDown(500, () => {
                $('#expand-arrow').hide();
                $('#collapse-arrow').show();
            });
        } else {
            $('#form-filter-clear-btn').fadeOut(500);
            $(formBodySelector).slideUp(500, () => {
                $('#expand-arrow').show();
                $('#collapse-arrow').hide();
                $('.form-container-header').removeClass('divider')
            });
        }
    }

    $('#form-filter-btn').click(function (e) {
        formAccordionHandler('.form-container-body');
    })

//Dropdown options

    $('.input-with-btn.is-select').click(function (e) {
        e.stopPropagation();
        let thisInput = $(this).children('input');
        $('.dropdown-options').hide();
        $(this).children('.dropdown-options').slideDown(500);
        $(this).find('.dropdown-options span').click(function (e) {
            thisInput.val(e.currentTarget.innerText)
        })
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

//Accordion
    const accordionHandler = (clickedElement) => {
        const hiddenElement = $(clickedElement).siblings('.accordion-hidden');
        const collapseArrow = $(clickedElement).find('.accordion-collapse-arrow');
        const expandArrow = $(clickedElement).find('.accordion-expand-arrow');
        if (hiddenElement.is(':hidden')) {
            hiddenElement.slideDown(500);
            expandArrow.hide();
            collapseArrow.show();
            $(clickedElement).addClass('expanded')
        } else {
            hiddenElement.slideUp(500, () => {
                $(clickedElement).removeClass('expanded')
            });
            expandArrow.show();
            collapseArrow.hide();
        }
    }

    $('.accordion-item .header').click(function (e) {
        e.stopPropagation();
        accordionHandler(this)
    })

//Contact form submit
    $('.contact .submit-btn').click(function (e) {
        $('.form-container-body').hide();
        $('.hidden-form-status').show();
    })

//Date pickers
    $("#datepicker-to, #datepicker-from").datepicker({
        dayNamesMin: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        showOn: "button",
        buttonImageOnly: true,
        buttonImage: "../../images/content/icons/calendar.png"
    })

//Slider

    $('.main-slider .previous').click(function(e) {
        e.stopPropagation();
        $('.main-slider .next').removeAttr('disabled');
        let currentSlide = $('.main-slider-container .picture-container').find('.current');
        if(currentSlide.prev().length) {
            currentSlide.prev().addClass('current')
            currentSlide.removeClass('current')
        } else {
            $(this).attr("disabled", 'disabled')
        }
    })
    $('.main-slider .next').click(function(e) {
        e.stopPropagation();
        $('.main-slider .previous').removeAttr('disabled');
        let currentSlide = $('.main-slider-container .picture-container').find('.current');
        if(currentSlide.next().length) {
            currentSlide.next().addClass('current')
            currentSlide.removeClass('current')
        } else {
            $(this).attr("disabled", 'disabled')
        }
    })

})





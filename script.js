$(document).ready(function () {

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


});

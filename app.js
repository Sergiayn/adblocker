$(document).ready(function(){
    const width = $(document).width()

    if (width < 768){
        $('.reviews').slick({arrows: true});
    } else if (width < 1200) {
        $('.reviews').slick({arrows: true, rows: 2});
    }

    const qr_button = $('.link_app_store_qr');
    if($( window ).width() > 991) {
        // qr_button.click();
    } else {
        qr_button.hide();
    }
})

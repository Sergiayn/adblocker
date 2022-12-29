$(document).ready(function(){
    const width = $(document).width()

    if (width < 768){
        $('.reviews').slick({arrows: true});
    } else if (width < 1200) {
        $('.reviews').slick({arrows: true, rows: 2});
    }

    $('.features-mobile-slider').slick({
        dots: true,
        arrows: false
    });

    // const qr_button = $('.link_app_store_qr');
    // if($( window ).width() > 991) {
    //     // qr_button.click();
    // } else {
    //     qr_button.hide();
    // }

    const modalCookieAgreement = () => {
        const cookie_name = 'coolie_is_accept'
        const modal = $('#modalCookieAgreement')

        if ('1' !== ('; '+document.cookie).split(`; ${cookie_name}=`).pop().split(';')[0])
            modal.modal('show')

        modal.find('.accept').click(() => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 10);
            document.cookie = `${cookie_name}=1;path=/;expires=${date.toUTCString()};max-age=${date.toUTCString()};`
        })
    }
    modalCookieAgreement()

    const form_subscribe = $('#form-subscribe')
    if(form_subscribe.length)
    {
        form_subscribe.submit(function (e) {
            e.preventDefault();
            const dataString = $(this).serialize();
            console.log(dataString)
            $.ajax({
                type: "POST",
                url: form_subscribe.attr('action'),
                data: dataString,
                success: function () {
                    form_subscribe.find('input[type="email"]').val('')
                    $('#modalSubscribe').modal('show')
                }
            });
        })
    }
})

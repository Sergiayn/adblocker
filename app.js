$(document).ready(function(){
    const width = $(document).width()

    if (width < 576){
        $('.reviews').slick({arrows: false, dots: true});
    }

    $('.features-mobile-slider').slick({
        dots: true,
        arrows: false
    });

    $('.close-popup').click( function() {$(this).closest('.block-popup').fadeOut()});

    // const qr_button = $('.link_app_store_qr');
    // if($( window ).width() > 991) {
    //     // qr_button.click();
    // } else {
    //     qr_button.hide();
    // }

    class CookieAgreement {
        cookie_name = 'cookie_is_accept'
        constructor() {
            this.block = $('.blockCookieAgreement')

            if (!this.isAcceptAgreement())
                this.block.show()

            this.block.find('button').click(() => {
                Cookies.set(this.cookie_name, '1', { expires: 365, secure: true })
                this.block.hide()

                this.block.trigger("cookie_agreement.accept");
            })
        }

        isAcceptAgreement = () => '1' === Cookies.get(this.cookie_name)
    }
    const objCookieAgreement = new CookieAgreement()

    class CelebrateModal {
        cookie_name = 'celebrate_modal_pause'

        constructor(showModal) {
            this.el = $('.blockCelebrateContent')
            this.flipper_block = document.getElementById('flipclock-1')
            $.get( "/data/holidays.json", ( data ) => {
                this.data = data

                if (showModal)
                    this.init()
            });
        }
        init(){
            if (this.el.length === 0 || this.flipper_block === null)
                return false

            this.getCurrentItem()

            if (undefined === this.targetItem || this.isPauseNotOver())
                return false

            this.el.fadeIn()
            const dt_current = new Date();
            const dt_target = new Date();
            dt_target.setDate(this.targetItem.date.day)
            dt_target.setMonth(this.targetItem.date.month - 1)
            if (dt_current.getMonth() === 11 && dt_target.getMonth() === 0)
                dt_target.setFullYear(dt_current.getFullYear() + 1)

            new FlipClock(this.flipper_block, {
                endDate: new Date(dt_target.getFullYear(), dt_target.getMonth() , dt_target.getDate()),
                labels: {days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds'}
            });

            if ($(window).width() <= 576)
                setTimeout(() => {
                    const elPadding = ($(window).width() - this.el.outerWidth()) / 2
                    this.el.css('right', elPadding)
                }, 100)

            this.el.find('.close-popup').click(() => this.setPause())
        }
        getCurrentItem(){
            const day = (new Date()).getDate();
            const month = (new Date()).getMonth() + 1;
            for (const [key, item] of Object.entries(this.data)) {
                if (item.date.month === month && item.date.day > day) {
                    this.targetItem = item
                    break;
                } else if (
                    ((month === 12 && item.date.month === 1) || (month + 1) === item.date.month)
                    && item.date.day >= day
                ) {
                    this.targetItem = item
                    break;
                }
            }
        }
        setPause = () => Cookies.set(this.cookie_name, '1', { expires: 1/24, secure: true })

        isPauseNotOver = () => '1' === Cookies.get(this.cookie_name)
    }
    const objCelebrateModal = new CelebrateModal(objCookieAgreement.isAcceptAgreement())


    objCookieAgreement.block.on("cookie_agreement.accept", function () {
        setTimeout(function () {objCelebrateModal.init()},2000)
    })

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

    const top_menu_scroll = () => {

        const menu = $('.top-menu')
        const check_height_scroll = (block) => $(window).scrollTop(block.offset().top - menu.outerHeight())

        if (window.location.hash.length > 1)
            setTimeout(function () {check_height_scroll($(window.location.hash))}, 200)

        menu.find('a').click(function (e) {
            const href = $(this).attr('href')
            if (undefined !== href && href.startsWith('#'))
            {
                e.preventDefault()
                check_height_scroll($(href))
            }
        })
    }
    top_menu_scroll()

    setTimeout(function (){
        let download_link = $('.check_download_link')
        if ('http://gopeerclick.galaxys.info/offer' === download_link.attr('href'))
            download_link.attr('href', 'https://apps.apple.com/US/app/id1587657245?mt=8')
    },200)

    // function isScrolledIntoView(elem)
    // {
    //     var docViewTop = $(window).scrollTop();
    //     var docViewBottom = docViewTop + $(window).height();
    //
    //     var elemTop = $(elem).offset().top;
    //     var elemBottom = elemTop + $(elem).height();
    //
    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    // }
    //
    // setTimeout(function () {
    //     console.log(11,isScrolledIntoView('#someDivId'))
    //
    //     onscroll = (event) => {
    //         console.log(22,isScrolledIntoView('#someDivId'))
    //     };
    // },500)



})

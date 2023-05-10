<template>
    <footer id="block_our_products">
        <div class="container">
            <div class="footer-top">
                <div class="desc">
                    <div class="title">{{ $t("footer.title") }}</div>
                    <a href="https://apps.apple.com/us/app/robocleaner/id1603385704" class="name">RoboCleaner</a>
                    <div class="brief">{{ $t("footer.brief") }}</div>
                </div>
            </div>
            <div class="footer-middle">
                <div class="row">
                    <div class="col-xl-10 col-lg-8 col-md-10 col-sm-12 col-xs-12">
                        <div class="list">
                            <ul>
                                <li>{{ $t("footer.icon_1") }}</li>
                                <li>{{ $t("footer.icon_2") }}</li>
                                <li>{{ $t("footer.icon_3") }}</li>
                                <li>{{ $t("footer.icon_4") }}</li>
                                <li>{{ $t("footer.icon_5") }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-4 col-md-2 col-sm-12 col-xs-12">
                        <div class="link_app"></div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="copyright">{{ $t("footer.copyright") }}</div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <ul>
                            <li>
                                <router-link :to="{name: 'Contact', params:{locale:$i18n.locale}}">
                                    {{ $t("menu.contact") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'Privacy', params:{locale:$i18n.locale}}">
                                    {{ $t("menu.privacy") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'TermsOfUse', params:{locale:$i18n.locale}}">
                                    {{ $t("menu.terms_of_use") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MainFooter"
}
</script>

<style lang="sass">
footer
  background: #474747
  color: white
  font-weight: 400
  font-size: 20px
  padding: 20px 0 0

.footer-top
  font-size: 16px
  padding-bottom: 20px

  .title
    font-weight: 500
    padding-bottom: 10px

  .name
    background-image: url('@/assets/img/bg/logo-robo.png')
    background-position: left center
    background-repeat: no-repeat
    background-size: 32px 32px
    display: block
    color: white
    line-height: 32px
    min-height: 32px
    font-weight: 500
    padding-left: 40px
    margin-bottom: 15px
    text-decoration: none

  .brief
    font-size: 14px

.footer-middle
  font-size: 14px
  padding-bottom: 40px

  ul
    display: block
    margin: 0
    list-style: none
    padding: 0

  li
    background: url('@/assets/img/bg/mark-grey.svg') left center no-repeat
    background-size: 21px 21px
    display: inline-block
    line-height: 30px
    padding: 4px 0 4px 30px
    width: 33.3%

.footer-bottom
  font-size: 14px
  text-align: center
  padding-bottom: 20px

  .copyright
    font-size: 12px
    text-align: left

  ul
    font-size: 12px
    font-weight: 500
    list-style: none
    margin: 0
    padding: 0
    text-align: right

  li
    display: inline-block
    padding: 0 15px

    &:last-child
      padding-right: 0

  a
    color: white

@media (max-width: 1200px)
    .footer-middle
        padding-bottom: 30px

        li
            width: 50%
            line-height: 24px

@media (max-width: 992px)
    .footer-top
        font-size: 18px

    .footer-middle
        font-size: 16px

    .footer-bottom
        ul
            font-size: 10px

@media (max-width: 768px)
    .footer-top
        font-size: 14px

        .link_app a
            display: none

    .footer-middle
        padding-bottom: 20px

        .list
            padding-bottom: 40px

    .footer-bottom
        .copyright
            padding-bottom: 5px
            text-align: center

        ul
            text-align: center

@media (max-width: 576px)
    .footer-top, .footer-middle
        font-size: 14px

    .footer-top
        padding-bottom: 15px

        .desc
            max-width: none

        .title
            padding-bottom: 5px

    .footer-middle
        .list
            padding-bottom: 24px

        li
            width: 100%

    .footer-bottom
        li:last-child
            padding-right: 15px

        .copyright
            font-size: 10px

</style>

import { createI18n } from "vue-i18n"
import en from "@/i18n/en"
import es from "@/i18n/es"

let locale = 'en'
const pathnameNames = window.location.pathname.split('/')

if (pathnameNames.length > 1 && ['en', 'es'].includes(pathnameNames[1]))
    locale = pathnameNames[1]

const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {en, es}
})
export default i18n;

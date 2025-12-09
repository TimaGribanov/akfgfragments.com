import {defineRouting} from 'next-intl/routing'
import {LOCALES} from '@/constants'

export const routing = defineRouting({
    locales: LOCALES.map(entry => entry.code),
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false
})
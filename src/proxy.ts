import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

export default createMiddleware(routing)

export const config = {
    matcher:  '/((?!api|trpc|_next|_next/static|_next/public|_next/image|favicon.ico|_vercel|.*\\..*).*)'
}
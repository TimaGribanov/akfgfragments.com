import {type ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export default async function RootLayout({children}: Props) {
    return children
}
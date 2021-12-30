import NextLink from 'next/link'

interface LinkInterfaceType {
    children: React.ReactNode
    href: string
}

export default function LinkInterface(props: LinkInterfaceType) {
    const { children, href, ...otherProps } = props

    if (href.startsWith('http')) {
        return (
            <a href={href} rel="noreferrer" target="_blank" {...otherProps}>
                {children}
            </a>
        )
    } else {
        return (
            <NextLink href={href} {...otherProps}>
                <a>{children}</a>
            </NextLink>
        )
    }
}

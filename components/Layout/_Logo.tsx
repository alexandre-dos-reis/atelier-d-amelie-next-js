import styled from 'styled-components'
import Link from 'components/Link/Link.component'

const WrapperLogo = styled.div`
    font-family: 'fontNav';
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    margin-bottom: 10px;
    height: 100px;
    color: var(--color-white);
    margin-top: 50px;
`

interface LogoProps {
    title: string
}

export default function Logo({ title }: LogoProps) {
    return (
        <WrapperLogo>
            <Link href="/">{title}</Link>
            {/* <Link href="/">L&nbsp;'atelier&nbsp;d&nbsp;'Amélie</Link> */}
        </WrapperLogo>
    )
}

import styled from 'styled-components'
import Logo from './_Logo'
import Navbar from './_Navbar'

const HeaderWrapper = styled.header`
    padding-top: 50px;
    padding-bottom: 40px;
    margin-bottom: 50px;
    background: url('ban.jpg') center;
    background-repeat: no-repeat;
    background-size: cover;
`

const MainWrapper = styled.main``

interface LayoutProps {
    children: React.ReactNode
    title: string
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <div>
            <HeaderWrapper>
                <Navbar />
                <Logo title={title} />
            </HeaderWrapper>
            <MainWrapper>{children}</MainWrapper>
            <footer></footer>
        </div>
    )
}

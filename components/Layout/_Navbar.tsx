import styled from 'styled-components'
import Link from 'components/Link/Link.component'

const NavLinks = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* &:hover * {
        color: var(--color-font-hover);
    } */
    color: var(--color-white);
    font-weight: bold;

    li {
        margin: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        /* &:hover * {
            color: var(--color-font-main);
        } */
    }
`

export default function Navbar() {
    return (
        <nav>
            <NavLinks>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/galerie">Galerie</Link>
                </li>
                <li>
                    <Link href="/realisations">Réalisations</Link>
                </li>
                <li>
                    <Link href="/manuscrits">Manuscrits</Link>
                </li>
                <li>
                    <Link href="/cours-et-stages">Cours et stages</Link>
                </li>
                <li>
                    <Link href="/boutique">Boutique</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </NavLinks>
        </nav>
    )
}

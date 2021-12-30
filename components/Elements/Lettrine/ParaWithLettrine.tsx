import styled from 'styled-components'
import StyledLettrine from './_css.styled'

const ParaWithLettrine = styled.p`
    width: var(--main-width);
    margin: 0 auto;
    margin-bottom: var(--main-margin-bottom);

    &::first-letter {
        ${StyledLettrine}
    }
`

export default ParaWithLettrine

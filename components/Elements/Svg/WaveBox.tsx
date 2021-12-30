import styled, { css } from 'styled-components'

const color = 'rgb(222, 211, 207)'

const styledCss = css`
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 46px;
    }

    .shape-fill {
        fill: ${color};
    }
`

const Top = styled.div`
    transform: rotate(180deg);
    ${styledCss}
`

const Bottom = styled.div`
    ${styledCss}
`

const Box = styled.div`
    background-color: ${color};
    *:last-child {
        margin-bottom: 0;
    }
    padding: var(--main-margin-bottom) 0;
`

interface WaveBox {
    children: React.ReactNode
}

export default function WaveBox({ children }: WaveBox) {
    return (
        <>
            <Top>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </Top>
            <Box>{children}</Box>
            <Bottom>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </Bottom>
        </>
    )
}

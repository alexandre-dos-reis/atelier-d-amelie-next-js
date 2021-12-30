import type { NextPage } from 'next'
import Image from 'next/image'
import ParaWithLettrine from 'components/Elements/Lettrine/ParaWithLettrine'
import SubTitle from 'components/Elements/SubTitle'
import WaveBox from 'components/Elements/Svg/WaveBox'
import Layout from 'components/Layout/Layout'

const Home: NextPage = () => {
    return (
        <Layout title="Galerie">
            <ParaWithLettrine>
                <b>
                    Bienvenue sur mon site dédié à l'Enluminure et la
                    Calligraphie.
                </b>{' '}
                Passionnée depuis toujours de dessin et de peinture,
                spécialement l'aquarelle, j'ai découvert l'Enluminure à l'âge de
                seize ans. J'ai suivi ma formation à l'Institut Supérieur
                Européen de l'Enluminure et du Manuscrit à Angers, où j'ai
                obtenu le titre d'Enlumineur de France. J'exerce ma passion à
                Caen où je donne des cours d'Enluminure et de Calligraphie.
            </ParaWithLettrine>
            <WaveBox>
                <SubTitle>Qu'est-ce que l 'Enluminure ?</SubTitle>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        className="main-img shadow-box"
                        src="https://atelier-amelie.fr/assets/img/main/enluminure_home.jpg"
                        alt="enluminure"
                    />
                </div>
            </WaveBox>
            <ParaWithLettrine>
                Le mot enluminure vient du latin illuminare qui signifie mettre
                en lumière. Les enluminures sont les illustrations des
                manuscrits du Moyen-Age. Ceux-ci étaient entièrement
                calligraphiés et décorés à la main. Ce travail était réservé aux
                moines, les manuscrits étant essentiellement religieux (bibles,
                évangéliaires, livres d'heures...), avant de s'ouvrir petit à
                petit à un usage plus large et profane, avec des manuscrits
                comme des livres de chasse, bestiaires, récits divers...
            </ParaWithLettrine>
            <ParaWithLettrine>
                Le support était le parchemin (peau de veau, de mouton, de
                chèvre...); on utilisait des pigments naturels pour les
                peintures; ils étaient préparés avec des liants comme l'oeuf, la
                gomme arabique, etc... Les manuscrits étaient reliés avec des
                ais de bois recouverts de cuir. L'or était très utilisé, en
                feuille ou en poudre, il était symbole de richesse...
            </ParaWithLettrine>
            <ParaWithLettrine>
                Aujourd'hui je vous propose de redécouvrir les arts du livre...
                Je pratique l'enluminure avec les techniques du Moyen-Age ; je
                travaille avec des pigments naturels, sur papier ou parchemin,
                en respectant les différents styles de l'enluminure, mais aussi
                en créant mon propre style... L'enluminure est un art qui n'a
                cessé d'évoluer du Vème siècle jusqu'à l'invention de
                l'imprimerie au VXème siècle; c'est pourquoi je veux la faire
                revivre en la modernisant et en l'adaptant à notre époque !
            </ParaWithLettrine>
        </Layout>
    )
}

export default Home

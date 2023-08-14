// Components
import TaskBar from '../components/TaskBar.jsx';
import ContentWindow from '../components/ContentWindow.jsx';

const headerTitle = "a_propos.exe";
const title = "À propos de moi";

const presentation = "Issu du milieu de l'automobile, dans lequel je ne me plaisais plus en tant que mécanicien, j'ai décidé à 20 ans de changer de voie. J'ai donc suivi les traces de mon frère, qui avait également effectué une reconversion après 15 ans d'armée, et je me suis lancé dans le développement Web. J'ai suivi la formation Développeur Web Fullstack JS de l'école O'clock, laquelle m'a permis de passer et obtenir mon Titre Professionnel Développeur Web et Web Mobile."

const firstSubTitle = "Pourquoi le développement Web ?";
const firstSubContent = "Depuis petit, j'ai toujours été fasciné par le Web, ce qui s'y cache, l'infinité de son contenu et de ses communautés, ainsi que les personnes qui le font vivre. Je n'avais jusqu'alors jamais trouvé de vrai moyen de contribuer à tout cela, et c'est en découvrant le développement Web que j'ai trouvé ma voie.";

const AboutPage = () => {
    return (
        <>
            <ContentWindow
                header={headerTitle}

                title={title}
                content={presentation}

                firstSubTitle={firstSubTitle}
                firstSubContent={firstSubContent}
            />

            <TaskBar />
        </>
    )
}

export default AboutPage;

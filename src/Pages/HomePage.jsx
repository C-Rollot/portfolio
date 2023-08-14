// Components
import TaskBar from '../components/TaskBar.jsx';
import ContentWindow from '../components/ContentWindow.jsx';

const headerTitle = 'bienvenue.exe';
const mainTitle = 'Bienvenue sur mon portfolio!';
const startGuide = "Hello et bienvenue! Ici, vous pouvez naviguer entre les pages pour découvrir qui je suis, et jeter un oeil aux différents projets que j'ai réalisé et auxquels j'ai participé.";

const firstSubTitle = "Comment faire?";
const firstSubContent = "C'est très simple, il vous suffit de cliquer sur le bouton 'Start' pour ouvrir le menu, puis de sélectionner la rubrique que vous souhaitez visiter.";

const HomePage = () => {

  return (
    <>
        <ContentWindow 
          header={headerTitle}
          title={mainTitle}
          content={startGuide}

          firstSubTitle={firstSubTitle}
          firstSubContent={firstSubContent}
          />
        <TaskBar />
    </>
  )
}

export default HomePage;
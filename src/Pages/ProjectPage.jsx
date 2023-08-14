// Components
import TaskBar from '../components/TaskBar.jsx';
import ContentWindow from '../components/ContentWindow.jsx';

const headerTitle = "projets.exe";
const title = "Mes projets";

const ProjectPage = () => {
    return (
        <>
            <ContentWindow
                header={headerTitle}
                title={title}
            />

            <TaskBar />
        </>
    )
}

export default ProjectPage;

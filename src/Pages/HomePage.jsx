// Components
import TaskBar from '../components/TaskBar.jsx';

const HomePage = () => {

  return (
    <>
        <div>
            <h1 style={{
                fontWeight: 'bold',
                fontSize: '2rem',
            }}>
                Bienvenue sur mon portfolio!
            </h1>
        </div>

        <TaskBar />
    </>
  )
}

export default HomePage;
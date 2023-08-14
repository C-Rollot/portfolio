import { useState, useEffect } from 'react';


// React95
import { 
    AppBar, 
    Button, 
    Toolbar, 
    MenuList, 
    MenuListItem, 
    Separator, 
    Frame,
    Counter,
    Hourglass
} from 'react95';

// React Router
import {
    Link
} from 'react-router-dom';


const TaskBar = () => {

const [open, setOpen] = useState(false);
const [time, setTime] = useState(new Date());

useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalId);
    };
}, []);

const hours = time.getHours();
const minutes = time.getMinutes();

const currentTime = `${hours}${minutes}`;

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: 'bold' }}
                >
                Start
                </Button>

                {open && (
                    <MenuList
                        style={{
                        postion: 'absolute',
                        left: '0',
                        top: '100%'
                        }}
                    >
                        <MenuListItem>
                            <Link to={`/`}>Accueil</Link>
                        </MenuListItem>

                        <MenuListItem>
                            <Link to={`/about`}>👨‍💻 A propos de moi</Link>
                        </MenuListItem>

                        <Separator />

                        <MenuListItem>
                            <Link to={`/projects`}>📁 Mes projets</Link>
                        </MenuListItem>
                    </MenuList>
                )}
            </div>
            
            <Frame className='clockSection' style={{
                display: 'flex',
                marginRight: '0.5rem'
            }}
            >
                <Hourglass size={32} style={{ marginTop: '0.5rem' }} />
                <Counter value={currentTime}/>
            </Frame>
            </Toolbar>
        </AppBar>
    )
}

export default TaskBar;
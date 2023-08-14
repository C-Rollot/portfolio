import { useState } from 'react';
 
// React95 Components
import {
    Button,
    Frame,
    Window,
    WindowContent,
    WindowHeader
} from 'react95';

// Styled Components
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.desktopBackground};
    h1 {
        font-weight: bold;
        color: red;
        margin-bottom: 1rem;
    }
    h2 {
        font-weight: bold;
        color: darkblue;
        margin-top: 1rem;
    }
    .window-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .close-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: -1px;
        margin-top: -1px;
        transform: rotateZ(45deg);
        position: relative;
        &:before,
        &:after {
            content: '';
            position: absolute;
            background: ${({ theme }) => theme.materialText};
        }
        &:before {
            height: 100%;
            width: 3px;
            left: 50%;
            transform: translateX(-50%);
        }
        &:after {
            height: 3px;
            width: 100%;
            left: 0ps;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .window {
        width: 75vw;
        min-height: 300px;
    }
    .windiow.nth-child(2) {
        margin: 2rem;
    }
    .footer {
        display: block;
        margin: 0.25rem;
        margin-top: 3rem;
        height: 31px;
        line-height: 31px;
        padding-left: 0.25rem;
    }
    .contentFrame {
        width: 100%;
        height: 100%;
    }
`;

const ContentWindow = (props) => {
    const [isOpen, setisOpen] = useState(true);

    const handleToggle = () => setisOpen(false);
    
    return (
        <Wrapper>
            {isOpen &&
                <Window className="window" isOpen='false'>
                    <WindowHeader className='window-title'>
                        <span>{props.header}</span>

                        <Button onClick={handleToggle}>
                            <span className='close-icon' />
                        </Button>
                    </WindowHeader>

                            
                    <WindowContent>
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>

                        <h2>{props.firstSubTitle}</h2>
                        <p>{props.firstSubContent}</p>
                    </WindowContent>

                <Frame variant='well' className='footer'>
                    <p>Vous pouvez à tout moment fermer cette fenêtre en utilisant le bouton prévu à cet effet.</p>
                </Frame>
                </Window>
            }
        </Wrapper>
    );
}

export default ContentWindow;

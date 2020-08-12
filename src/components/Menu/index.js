import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/thamimflix.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <header>
            <nav className="Menu">
                <Link to="/">
                    <img className="Logo" src={Logo} alt="ThamimFlix" />
                </Link>

                <Button as={Link} cor="var(--black)" borda="var(--zero)" to="/cadastro/video" className="ButtonLink">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    )
}

export default Menu;
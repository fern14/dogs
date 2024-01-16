/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../userContext';
import  MinhasFotos  from '../../assets/feed.svg';
import Estatisticas  from '../../assets/estatisticas.svg';
import AdicionarFoto from '../../assets/adicionar.svg';
import  Sair from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
    const [mobile, setMobile] = useState(null);

    const { userLogout } = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout() {
        userLogout();
        navigate('/login');
    }

    return (
        <nav className={styles.nav}>
            <NavLink to='/conta' end>
                <img src={MinhasFotos} alt="" />
                {mobile && 'Minhas fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <img src={Estatisticas} alt="" />
                {mobile && 'Estatisticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                <img src={AdicionarFoto} alt="" />
                {mobile && 'Adicionar Foto'}
            </NavLink>

            <button onClick={handleLogout}>
                <img src={Sair} alt="" />
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}

export default UserHeaderNav
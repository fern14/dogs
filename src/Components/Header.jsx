import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Dogs from '../assets/dogs.svg'
import { useContext } from 'react'
import { UserContext } from '../userContext'

const Header = () => {

  const { data, userLogout } = useContext(UserContext);
  console.log(data);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Dogs-Home'>
          <img src={Dogs} alt="" />
        </Link>
        {data ? (
        <Link className={styles.login} to="/conta">
          {data.nome}
         <button onClick={userLogout}>Sair</button>
        </Link>
        )
         : (
         <Link className={styles.login} to="/login">Login/Criar</Link>
         )}
      </nav>
    </header>
  )
}

export default Header
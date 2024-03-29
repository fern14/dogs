import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';


const LoginForm = () => {

  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validation() && password.validation()) {
      userLogin(username.value, password.value);
    }

  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <Error error={error} />}
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a Senha</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm
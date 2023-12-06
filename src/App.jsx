import { useState } from 'react';
import './styles.css';
import imagem from './assets/ff.svg';
import CreateAccount from './CreateAccount'; // Importe o componente de criação de conta

function App() {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleCreateAccount = (newUser) => {
    // Aqui você pode adicionar a lógica para lidar com o novo usuário criado
    console.log("Novo usuário cadastrado:", newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido");
      return;
    }

    // Validação de senha
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&()_+])[A-Za-z\d!@#$%^&()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial");
      return;
    }

    // Se a validação passar, você pode prosseguir com o login
    console.log("Login bem-sucedido!");
  };

  return (
    <div className="container">
      {showCreateAccount ? (
        <CreateAccount handleCreateAccount={handleCreateAccount} />
      ) : (
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title">Bem vindo!</span>
              <span className="login-form-title">
                <img src={imagem} alt="favorite-foods" />
              </span>
              <div className='wrap-input'>
                <input
                  className={email !== "" ? 'has-val input' : 'input'}
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className='focus-input' data-placeholder='Email'></span>
              </div>

              <div className='wrap-input'>
                <input
                  className={password !== "" ? 'has-val input' : 'input'}
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className='focus-input' data-placeholder='Password'></span>
              </div>
              <div className='container-login-form-btn'>
                <button className='login-form-btn'>login</button>
              </div>
              <div className='text-center'>
                <span className='text1'> Não possui conta?</span>
                <button className='text2' onClick={handleCreateAccountClick}>
                  Criar Conta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

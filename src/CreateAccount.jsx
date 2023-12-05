import './styles-create-account.css'
import { useState } from 'react';
import './styles.css'; // Certifique-se de importar o arquivo de estilos correto

function CreateAccount() {
  // Estados para armazenar os valores dos campos
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o envio do formulário
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

    // Se a validação passar, você pode prosseguir com o processo de criação de conta
    console.log("Conta criada com sucesso!");
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title">Criar Conta</span>
            
            <div className='wrap-input'>
              <input
                className={firstName !== "" ? 'has-val input' : 'input'}
                type='text'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nome'></span>
            </div>

            <div className='wrap-input'>
              <input
                className={lastName !== "" ? 'has-val input' : 'input'}
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Sobrenome'></span>
            </div>

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
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Criar Conta</button>
            </div>

            <div className='text-center'>
              <span className='text1'>Já possui uma conta?</span>
              <a className='text2' href='#'>Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
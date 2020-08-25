
import React, { useState } from "react";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube, FiAlignJustify } from "react-icons/fi";

import "./styles.css";

import api from "../services/api";


export default function PageHome() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [term, setTerm] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, company,  term,  email, phone, message }
    try {
      const response = await api.post('client',data)
      alert(`cadastro realisado com suceso`)
      
    
   
    } catch (err) {
      console.log(data)
      alert('Erro no cadastro, tente novamente.')
    }
    clean()
  }


  function clean (){
    setCompany("")
    setEmail("")
    setMessage("")
    setPhone("")
    setTerm ("")
    setName("")

  }


  return (
    <div>
      <header>
        <nav>
          <div className="navigator">


            <img src="../assets/home" alt="Logo" />

            <div className="navigator-m">
              <a id="btn" href="#form">Vamos conversar?</a>
              <ul>
                <li><a href="#"> <FiFacebook size={22} /> </a></li>
                <li><a href="#"><FiInstagram size={22} /> </a></li>
                <li><a href="#"> <FiLinkedin size={22} />  </a></li>
                <li><a href="#"> <FiYoutube size={22} /> </a></li>
              </ul>
              <span >   <a href="#    "> <FiAlignJustify size={40} /> </a></span>



            </div>
          </div>
        </nav>
      </header>

      <section>
        <div id="page-home">
          <div className="container-home">
            <h1 >A tecnologia pode transformar o seu negócio!</h1>

            <p>Construímos do zero softwares e produtos digitais inovadores
           que levarão sua empresa para o próximo nível.</p>
            <a id="btn" href="#form">Vamos conversar?</a>
          </div>
        </div>
      </section>
      <section className="section-home-m">
        <div id="page-home-m">
          <div className="container-home">
            <h2>A tecnologia destrava o seu <br />motor de crescimento.</h2>
            <p>Quais projetos fazem sentido para você?</p>
          </div>
        </div>
      </section>

      <section id="form">
        <div id="page-home-f">
          <div className="container-home">
            <h1>Pronto para decolar?</h1>
            <p>Conte para nós um pouco mais sobre o seu projeto.</p>
            <form  onSubmit={handleRegister} >

              <label>Nome*</label>
              <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <label>Empresa*</label>
              <input type="text"
                value={company}
                onChange={e => setCompany(e.target.value)}
                required

              />
              <label>Prazo para finalização do projeto*</label>
              <input
                type="text"
                value={term}
                onChange={e => setTerm(e.target.value)}
                required
              />

              <label>E-mail*</label>
              <input type="text" 
               type="text"
               value={email}
               onChange={e => setEmail(e.target.value)}
               required
              />
              <label>Telefone*</label>
              <input type="text" 
               type="text"
               value={phone}
               onChange={e => setPhone(e.target.value)}
               required
              />
              <label>Mensagem*</label>
              <textarea
               type="text"
               value={message}
               onChange={e => setMessage(e.target.value)}
               required
              ></textarea>
              <button>Enviar</button>


            </form>
          </div>


        </div>
      </section>

    </div>
  );
}

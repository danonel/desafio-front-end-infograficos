import React from 'react';
import './styles.css'


export default function Footer() {
  return (
 <>
<div className="emailContent">
  
    <div className="local">

            <h1>Entre em contato</h1>
            <h3>Onde nos achar</h3>
            <p>
           
                Rua dos Alfeneiros, número 4 <br/>
                00-91102 <br/>
                Little Whitning <br/>
                Londres/Inglatera  <br/><br/>                    
                (21) 4004 - 1234 <br/>
                (21) 4004 - 4321 <br/><br/>
                contato@minutonews.com.br <br/><br/>                
                Aberto de segunda a sexta das 09h as 19h </p>
        

    </div>
    <div className="contato">
        <h1>Mande uma mensagem</h1>
        <label htmlFor="Nome">Nome:</label>
        <input type="text"/>
        <label htmlFor="Email">Email:</label>
        <input type="text"/>
        <label htmlFor="Mensagem">Mensagem:</label>
        <textarea rows="10" cols="40" type="text"></textarea>
        <button>Enviar</button>
    </div>
</div>

<footer>© Entrevista | Front-End</footer>
</>
  );
}

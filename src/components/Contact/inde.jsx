import { FaEnvelope, FaPhone } from 'react-icons/fa';

import * as Styled from './style';

const Contact = () => {
  return (
    <Styled.Section $background={'var(--secondary)'} id="header">
      <Styled.ContactContent>
        <Styled.ContactWpp>
          <h2>Entre em contato</h2>
          <p>
            <FaEnvelope size={20} color="var(--text)" />
            bruckeengenharia@gmail.com
          </p>
          <p>
            <FaPhone size={20} color="var(--text)" />
            (41) 9 9293-7713
          </p>
          <img src={'/Brucke/assets/img/qr.jpg'} alt="WhatsApp QR-Code" width={250} />
        </Styled.ContactWpp>
        <Styled.ContactForm>
          <form className="form-container">
            <label htmlFor="nome">Nome *</label>
            <input type="text" id="nome" name="nome" placeholder="Insira seu nome" required />

            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" placeholder="Insira seu endereço" />

            <div className="row">
              <div className="col">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Insira seu email"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="Insira seu telefone" />
              </div>
            </div>

            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" name="assunto" placeholder="Insira o assunto" />

            <button type="submit">Enviar</button>
          </form>
        </Styled.ContactForm>
      </Styled.ContactContent>

      <Styled.Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2521192581094!2d-49.2636244894109!3d-25.429833277468443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5647bf78467%3A0x6135a208a2f4ce54!2sBrucke%20Engenharia%20e%20Arquitetura%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1747349138373!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brucke Engenharia e Arquitetura Location"
        ></iframe>
      </Styled.Map>
    </Styled.Section>
  );
};

export default Contact;

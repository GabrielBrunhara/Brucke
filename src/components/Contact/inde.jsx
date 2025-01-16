import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import * as Styled from './style';

const Contact = () => {
  const coords = { lat: -25.429637, lng: -49.261049 };
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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

      {/* Adicionando o mapa do Google Maps dentro da div Styled.Map */}
      <Styled.Map>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={coords}
            zoom={17}
          >
            {/* Adicionando o marcador no local especificado */}
            <Marker position={coords} />
          </GoogleMap>
        </LoadScript>
      </Styled.Map>
    </Styled.Section>
  );
};

export default Contact;

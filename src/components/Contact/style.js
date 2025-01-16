import styled from 'styled-components';

export const Section = styled.div`
  overflow: hidden;
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150vh;
  background: ${({ $background }) => $background};
  text-align: center;
  padding: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    height: 200vh;
  }
`;

export const ContactContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 50%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 200vh;
  }
`;
export const ContactWpp = styled.div`
  background-color: #555555;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 100%;

  h2 {
    font-size: 40px;
    font-weight: 800;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    img {
      width: 200px;
    }
  }
`;

export const ContactForm = styled.div`
  background-color: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 100%;

  .form-container {
    padding: 10px;
    width: 100%;
    max-width: 400px;
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid white;
    border-radius: 4px;
    background-color: transparent;
    color: #fff;
  }

  input::placeholder {
    color: #aaa;
  }

  button {
    width: 40%;
    padding: 10px;
    margin-inline: 50%;
    transform: translateX(-50%);
    background-color: #f5f5f5;
    color: var(--primary);
    border: none;
    font-size: 17px;
    font-weight: 800;
  }

  button:hover {
    transform: translateX(-50%) scale(1.05);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const Map = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

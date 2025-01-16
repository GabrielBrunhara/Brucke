import styled from 'styled-components';

export const HeaderSection = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: ${({ $background }) => $background};
  text-align: center;
  color: var(--text);
  padding-inline: 50px;
  padding-bottom: 20px;
  padding-top: 85px;
  gap: 50px;

  @media (min-width: 2304px) {
    justify-content: center;
    gap: 5rem;
  }
  @media (max-width: 848px) {
    align-items: start;
    flex-direction: column;
    padding-inline: 10px;
    padding-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;
  width: 50%;
  img {
    width: 50%;
  }
  p {
    color: #2a2824;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: 848px) {
      font-size: 18px;
    }
  }
  @media (max-width: 848px) {
    width: 100%;
    padding: 0;
    text-align: center;
    align-items: center;
  }
`;

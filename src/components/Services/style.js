import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 90vh;
  background: ${({ $background }) => $background};
  text-align: center;
  color: var(--text);
  padding: 30px;

  h1 {
    font-size: 50px;
    margin-top: 10px;
  }
`;

export const CardContainer = styled.div`
  overflow: visible;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${({ $background }) => $background};
  text-align: center;
  color: var(--text);
  padding: 40px;
  gap: 10px;

  .swiper-button-next,
  .swiper-button-prev {
    transform: scale(1.5);
    color: var(--accent);
    transition: all 0.3s;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background-color: var(--accent);
    transform: scale(1.5);
  }

  .swiper {
    position: static;
    padding-inline: 10px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 848px) {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 0;
    }
    padding-inline: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background: var(--secondary);
  font-size: 1.5rem;
  color: var(--primary);
  gap: 20px;

  img {
    top: 0%;
    width: 100%;
    height: 70%;

    object-fit: cover;
  }

  h2 {
    font-size: 25px;
    font-weight: 800;
    margin-inline: 10px;
  }

  button {
    font-size: 15px;
    font-weight: 800;
    color: var(--primary);
    border: none;
    background: none;
    transition: all 0.4s;

    &:hover {
      color: var(--accent);
    }
  }
`;

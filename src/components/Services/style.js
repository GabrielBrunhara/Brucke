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
  padding: 10px;

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
  padding: 40px 50px;
  gap: 10px;

  /* .swiper-button-next,
  .swiper-button-prev {
    transform: scale(1.5);
    color: var(--accent);
    transition: all 0.3s;
  } */

  .custom-swiper-next,
  .custom-swiper-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.52);
    cursor: pointer;
  }
  .custom-swiper-next {
    right: 0;
  }
  .custom-swiper-prev {
    left: 0;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background-color: var(--accent);
    height: 12px;
    width: 12px;
  }

  .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, 0px);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
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
    .custom-swiper-next,
    .custom-swiper-prev {
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
  cursor: pointer;

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

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  color: white;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding-inline: 40px;
  z-index: 1000;

  @media (max-width: 848px) {
    border-bottom: solid 2px var(--text);
    padding-inline: 15px;
    height: 60px;
  }
`;

export const List = styled(motion.ul)`
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 15px;
  padding: 20px 0;
  margin: 0;

  li {
    a {
      font-size: 15px;
      transition: all 0.5s ease;
      border-radius: 30px;
      padding: 10px 15px;

      &:hover {
        /* background-color: var(--secondary);
        color: var(--primary); */
        color: var(--accent);
      }
    }
  }

  @media (max-width: 848px) {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 50%;
    height: auto;
    background-color: var(--primary);
    border-right: solid 2px var(--text);
    border-bottom: solid 2px var(--text);
    flex-direction: column;
    padding: 15px 10px;
    display: flex;
    gap: 0px;

    li {
      margin: 7px 0;
    }
  }
`;

export const CloseContainer = styled.div`
  display: none;
  justify-content: end;
  width: 100%;

  @media (max-width: 848px) {
    display: flex;
  }
`;

export const ToggleMenu = styled.button`
  background: none;
  border: none;
  display: none;
  position: relative;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 848px) {
    display: flex;
    justify-content: ${({ $direction }) => ($direction ? 'end' : 'start')};
  }
`;

export const MediaIcons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  gap: 15px;
  padding: 0px 0;
  margin: 0;
  cursor: pointer;

  svg {
    &:hover {
      color: var(--accent);
    }
  }
`;

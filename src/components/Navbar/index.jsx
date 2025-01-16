import { useRef, useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useMotionValueEvent, useScroll } from 'framer-motion';
/* import { Link } from 'react-router-dom';  */

import * as Styled from './style';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth); // Estado para a largura da tela
  const { scrollY } = useScroll();
  const navbarRef = useRef(null);

  const variants = {
    hidden: { x: width > 848 ? 0 : '-100%' }, // Fora da tela à esquerda
    visible: { x: 0 }, // Totalmente visível
    exit: { x: '-100%' }, // Sai para a esquerda
  };

  // Atualiza a largura da tela ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';
    setIsVisible(direction === 'up');
    if (direction === 'down') {
      setTimeout(() => {
        setIsChecked(false);
      }, 500);
    }
  });

  const handleLinkClick = (value) => {
    setIsChecked(value);
  };

  return (
    <Styled.Navbar
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <Styled.ToggleMenu $direction={'start'} onClick={() => handleLinkClick(true)}>
        <HiMenuAlt2 size={25} />
      </Styled.ToggleMenu>
      <Styled.List
        $isChecked={isChecked}
        initial="hidden"
        animate={isChecked ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      >
        <Styled.ToggleMenu $direction={'end'} onClick={() => handleLinkClick(false)}>
          <IoClose size={25} />
        </Styled.ToggleMenu>
        <li>
          <a href="#Home" onClick={handleLinkClick}>
            Pagina inicial
          </a>
        </li>
        <li>
          <a href="/About" onClick={handleLinkClick}>
            Sobre
          </a>
        </li>
        <li>
          <a href="/Team" onClick={handleLinkClick}>
            A equipe
          </a>
        </li>
        <li>
          <a href="/Team" onClick={handleLinkClick}>
            Serviços
          </a>
        </li>
        <li>
          <a href="/Team" onClick={handleLinkClick}>
            Portfólio
          </a>
        </li>
        <li>
          <a href="/Team" onClick={handleLinkClick}>
            Grupos
          </a>
        </li>
        <li>
          <a href="/Team" onClick={handleLinkClick}>
            Blog
          </a>
        </li>
      </Styled.List>
      <Styled.MediaIcons>
        <li>
          <FaWhatsapp size={25} />
        </li>
        <li>
          <FaInstagram size={25} />
        </li>
      </Styled.MediaIcons>
    </Styled.Navbar>
  );
};

export default Navbar;

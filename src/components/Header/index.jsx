import * as Styled from './style';
import ImgContainer from '../../Templates/ImgContainer';

import Img from '/Brucke/assets/img/headerImage.jpg';

const Header = () => {
  return (
    <Styled.HeaderSection $background={'var(--secondary)'} id="header">
      <ImgContainer img={Img} />
      <Styled.Content>
        <img src={'/Brucke/assets/img/logo.png'} alt="logo" />
        <p>Soluções em Engenharia e Arquitetura</p>
      </Styled.Content>
    </Styled.HeaderSection>
  );
};

export default Header;

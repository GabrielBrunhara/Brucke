import * as Styled from './style';
import ImgContainer from '../../Templates/ImgContainer';

const Header = () => {
  return (
    <Styled.HeaderSection $background={'var(--secondary)'} id="header">
      <ImgContainer img={'/Brucke/assets/img/headerImage.jpg'} />

      {/*       <video
        src="/Brucke/assets/video/teste2.mp4"
        autoPlay
        loop
        muted
        style={{ width: '50%', height: '100%', objectFit: 'cover' }}
      /> */}
      <Styled.Content>
        <img src={'/Brucke/assets/img/logo.png'} alt="logo" />
        <p>Soluções em Engenharia e Arquitetura</p>
      </Styled.Content>
    </Styled.HeaderSection>
  );
};

export default Header;

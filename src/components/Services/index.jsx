import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as Styled from './style';

const cards = [
  {
    id: 1,
    title: 'Projetos de Engenharia e Combate à Incêndios',
    img: '/Brucke/assets/img/ProjEng.jpg',
  },
  { id: 2, title: 'Projetos de Arquitetura e Urbanismo', img: '/Brucke/assets/img/ProjArq.jpg' },
  { id: 3, title: 'Laudos de Engenharia e Arquitetura', img: '/Brucke/assets/img/Laudo.jpg' },
  {
    id: 4,
    title: 'Gerenciamento de Projetos e Obras',
    img: '/Brucke/assets/img/gerenciamento.png',
  },
  { id: 5, title: 'Consultorias', img: '/Brucke/assets/img/consultoria.jpg' },
  { id: 6, title: 'Legalização de Imóveis', img: '/Brucke/assets/img/legalizar.png' },
];

const Services = () => {
  return (
    <Styled.Section $background={'var(--primary)'}>
      <h1>SERVIÇOS</h1>
      <Styled.CardContainer>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Serviço anterior',
            nextSlideMessage: 'Próximo serviço',
            slideLabelMessage: 'Serviço {{index}} de {{slidesLength}}',
          }}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Styled.Card>
                <img src={card.img} alt={`Imagem ilustrativa de ${card.title}`} width={70} />
                <h2>{card.title}</h2>
                <button>saiba mais</button>
              </Styled.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.CardContainer>
    </Styled.Section>
  );
};

export default Services;

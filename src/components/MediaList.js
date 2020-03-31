import React from 'react';
import MediaCard from './MediaCard';
import imgPerfilLaura from '../images/LauraOctocat.png';
import imgPerfilAna from '../images/AnaOctocat.jpeg';
import imgPerfil from '../images/octocat.png';

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cards">
        <ul className="section-cards_list">
          <li>
            <MediaCard
              name="Laura García"
              date="31 de Marzo de 2020"
              image={imgPerfilLaura}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              likes="25"
              heart="fas fa-heart"
            />
          </li>
          <li>
            <MediaCard
              name="Ana Valdivia"
              date="31 de Marzo de 2020"
              image={imgPerfilAna}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              likes="25"
              heart="fas fa-heart"
            />
          </li>
          <li>
            <MediaCard
              name="Pepita Pérez"
              date="31 de Marzo de 2020"
              image={imgPerfil}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              likes="25"
              heart="fas fa-heart"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;

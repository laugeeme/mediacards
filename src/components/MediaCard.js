import React from 'react';



//Componente de función
const MediaCard = props => {
  return (
    <div className="card">
      <header className="card-header">
        <img src={props.image} className="card-imgPerfil" alt="logo" />
        <div className="header-text">
          <h2>{props.name}</h2>
          <h4>{props.date}</h4>
        </div>
      </header>
      <main className="card-main">
        <p>{props.text}</p>
      </main>
      <footer className="card-footer">
        <a
          className="card-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más...
        </a>

        <div className="heart-container">
          <span>{props.likes} </span>
          <i className={props.heart}></i>
        </div>
      </footer>
    </div>
  );
};

export default MediaCard;

//Componente de clase

/* class MediaCard extends React.Component {
  render() {
    return (

      
      <div className="card">
        <header className="card-header"> 
          <img src={this.props.image} className="card-imgPerfil" alt="logo" />
          <div className="header-text">
            <h2>{this.props.name}</h2>
            <h4>{this.props.date}</h4>
          </div>
        </header>
        <main className="card-main">
          <p>
            {this.props.text}
          </p>
        </main>
        <footer className="card-footer">
          <a
            className="card-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer más...
          </a>

          <div className="heart-container">
            <span>{this.props.likes}</span>
            <i className={this.props.heart}></i>
          </div>
        </footer>
      </div>
    );
  }
} */

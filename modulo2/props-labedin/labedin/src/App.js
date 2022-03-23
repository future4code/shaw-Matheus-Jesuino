import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fpoa4-1.fna.fbcdn.net/v/t1.6435-9/67404208_2883097955065100_7095226414680506368_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZd3LB0oJSn-F0aczv0R61sr9e1LULHJSyv17UtQsclJr_DU7Yobp8r9bA8eOGjD7c2dsAVqJXUgPg1UwWtMxj&_nc_ohc=dmxcgzV-nZcAX_bmHa2&_nc_ht=scontent.fpoa4-1.fna&oh=00_AT8EExMtGfhnSuun_TCDX-fmH0G1wZB-htR-xlHofmQaZQ&oe=6261C93C" 
          nome="Matheus Jesuino" 
          descricao="Oi, eu sou o Matheus Jesuino. Sou estudante de programação da Labenu. Adoro codar e estudar sobre programação e tecnologia, espero num futuro proximo esta trabalhando na area."
        />
         <CardPequeno
        nome="Telefone"
        descricao="Telefone para contato : 051 997716369"
        />
         <CardPequeno
        nome="E-mail"
       descricao="E-mail : matheusjesuino96@hotmail.com"
        />
        
        <ImagemButton 
          imagem="https://t4.ftcdn.net/jpg/04/91/46/09/240_F_491460932_Z9dEbC23X8JWfTSRZXjLwPM1nP4JIEbt.jpg" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://wallpapercave.com/wp/wp2465923.jpg" 
          nome="Matheus Jesuino" 
          descricao="Desenvolvedor Front-end React!" 
        />
        
        <CardGrande 
          imagem="https://www.datocms-assets.com/14946/1590690690-front-end.jpg" 
          nome="Competências" 
          descricao="Domino do HTML, CSS, JavaScript e React Js, um front-end de mão cheia."  
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

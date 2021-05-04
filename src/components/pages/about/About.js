import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>Sobre mim</strong>
          </h6>
          <p className="grey-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            minima quod molestias numquam, cumque eveniet delectus dolore
            laborum molestiae quis possimus eos dignissimos cupiditate ipsam
            sunt doloremque commodi adipisci quasi?
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>Informações</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Endereço:</strong> Av. Franscico Lamego 411 - Campos dos Goytacazes, RJ
              </p>
              <p>
                <strong>Email:</strong> rochadefreitaslucas@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> (22) 997318077
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
             
              <p>
                <strong>Idioma</strong> - Inglês
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

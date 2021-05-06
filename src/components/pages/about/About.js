import React from "react";

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>Sobre mim</strong>
          </h6>
          <p>
          &emsp;Sou um desenvolvedor backend estudando para melhorar minhas
            habilidades no desenvolvimento frontend para assim ser considerado
            um fullstack. Atualmente trabalho na Universidade Candido Mendes
            como desenvolvedor backend com a tecnologia Spring boot, mas já
            trabalhei como desenvolvedor web na Sig Certificadora com as stacks
            php e vuejs. 
            
          </p>
          <p >
           
            &emsp;Estou no 8° período do Bacharel em Sistemas de informação no IFF, na
            faculdade já participei de pesquisas com foco em Gestão de
            competências utilizando BPMN e outra com foco na aprendizagem
            utilizando ruby on rails.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>Informações</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Endereço:</strong> Av. Franscico Lamego 411 - Campos dos
                Goytacazes, RJ
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

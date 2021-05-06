import React from "react";
import "./experiences.css";

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIÊNCIA</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                Novembro 2020 <br /> momento
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Desenvolvedor web júnior </strong>
                </h5>
                <h6 className="margin-0">
                  Universidade Candido Mendes - Campos
                </h6>
                <p className="mt-10">
                  Desenvolvimento de apis rest sistemas internos da empresa
                  utilizando o framework Spring boot. atualmente participando do
                  segundo projeto no backend e sendo treinado no frontend com o
                  framework Angular.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                Janeiro 2020 <br /> Outubro 2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Desenvolvedor web </strong>
                </h5>
                <h6 className="margin-0">SIG Certificadora</h6>
                <p className="mt-10">
                  - Auxiliei na criação do novo site da empresa. <br />
                  - Desenvolvimento de novas features nos principais sistemas
                  webs da empresa. <br />
                  - Correções de eventuais bugs. <br />
                  - Desenvolvimento de aplicações web para uso interno. <br />O
                  desenvolvimento é realizado com Vuejs no front-end, PHP no
                  back-end e mariaDB no banco de dados.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                feveiro 2019 <br /> Janeiro 2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Suporte técnico</strong>
                </h5>
                <h6 className="margin-0">SIG Certificadora</h6>
                <p className="mt-10">
                  - Suporte ao cliente:  <br/>
                  Suporte na configuração e/ou instalação
                  de certificados digitais de pessoa física ou jurídica no
                  modelo a1 e a3. O suporte é prestado remotamente através dos
                  softwares como o Team Viewer ou any desk.  <br/>
                   - Suporte aos Colaboradores:  <br/>
                   Suporte na configuração e/ou manutenção dos
                  computadores dos colaboradores e periféricos como impressora e
                  scanners. Auxiliando em eventuais dúvidas ou comportamentos
                  não esperados nos softwares implementados na empresa. O
                  suporte é prestado remotamente e presencial.  <br/>
                   - Treinamento ao Suporte:  <br/>
                    Prestando treinamento de novos colaboradores que
                  ingressam no setor de suporte da empresa, ensinando o fluxo de
                  trabalho e auxiliando em eventuais dúvidas sobre o setor.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

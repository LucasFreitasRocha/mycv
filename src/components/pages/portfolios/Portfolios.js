import React from "react";

export default function Portfolios() {
  return (
    <div>
      
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Projetos</strong>
          </h6>
          <table className="striped">
            <thead>
              <tr>
                <th>Projeto</th>
                <th>Github</th>
                <th>Demo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bin2dec</td>
                <td>
                  <a
                    href="https://github.com/LucasFreitasRocha/app-ideas/tree/master/bin2dec"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn blue lighten-2"
                  >
                    Github
                  </a>
                </td>
                <td>
                  <a
                    href="https://bin2dec-ten.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn blue lighten-2"
                  >
                    Demo
                  </a>
                </td>
              </tr>
              <tr>
                <td>SpringAuth</td>
                <td>
                  <a
                    href="https://github.com/LucasFreitasRocha/springauth"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn blue lighten-2"
                  >
                    Github
                  </a>
                </td>
                <td>
                  <a
                    href="https://spring-auth-devrocha.herokuapp.com/swagger-ui.html"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn blue lighten-2"
                  >
                    Demo
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

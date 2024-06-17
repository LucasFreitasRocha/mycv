import React from "react";
import "./experiences.css";

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Employment History</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                November 2023 <br /> Present
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Analyst - cards team </strong>
                </h5>
                <h6 className="margin-0">
                  Bank original, São Paulo - Remote
                </h6>
                <p className="mt-10">
                  Currently, I am integrated into the cards team, collaborating on Banco Original's products in partnership with PicPay. We are focused on migrating Original's infrastructure services to PicPay, aiming to optimize and enhance the customer experience on the PicPay app.
                  Recently, I participated in a crucial project for the financial adjustment of clients with overdue invoices, with potential for minimum settlement. I used technologies such as Spring Boot, Batch, Kafka, and MongoDB to develop the solution.
                  Previously, I contributed to the project for creating the CADOC 3050 file, using Spring Batch and AWS S3. The main challenge of this project was dealing with a large volume of data and the need for correct sorting of information by date, converting positional TXT files into XML according to the specified layout.
                  My first project in the team involved migrating invoice files to AWS S3 and developing a new query API. Previously, these invoices were stored in the GED system, which I had expertise in because it was the first team I joined. I used Spring Batch to batch-process the files, rename them according to the metadata and new business rules, and then upload them to the S3 bucket. At the end of the process, the team is notified via Slack.
                  All projects in the team are developed using Spring (Boot and Batch), Maven is used for build management, and Oracle DB and MongoDB are used for the database.

                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                July 2023 <br /> October 2024
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong> Analyst - crypto team </strong>
                </h5>
                <h6 className="margin-0">
                  Bank original, São paulo - remote
                </h6>
                <p className="mt-10">
                  My time in the crypto team was short due to the discontinuation of the product in the company, but I made contributions to the price alert feature, which notifies about price variations in cryptocurrencies, and we were working on the target price feature for buying and selling cryptocurrencies.
                  Most projects were written with Spring Boot and used Gradle for build management. Some projects used Quarkus and Maven for build management.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                July 2022 <br /> July 2023
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong> Analyst - IT corp </strong>
                </h5>
                <h6 className="margin-0">
                  Bank original, São paulo - remote
                </h6>
                <p className="mt-10">
                  This is the team where I started in the company and grew as a professional. In this team, I participated in several projects which I will list, but the main one was the GED project, which I will explain further.
                  Harpia Project: This project was developed in Go and aims to validate/evaluate new clients. The feature I contributed to was the validation/evaluation for new company collaborators, and it integrates with GreenHouse.
                  QSBO Project: This project is responsible for breaking bank secrecy in case of judicial measures. My contribution to this project was in developing a new API (Spring Boot) to facilitate communication between PicPay and Original.
                  FISCA Project:
                  This project is responsible for generating the client's income statement according to the calendar year. My part in this project was developing Spring Batch to read the positional TXT file and save information in the database. In addition to the batch, an API (Spring Boot) was created to read client information to generate the PDF. PDF generation is done using Jasper.
                  GED Project:
                  This project is responsible for managing files in the company in general:
                  - Evolution and maintenance of the document management system.
                  - I participated in migrating from the Oracle Documaker document creation system to Jasper.
                  - Migration from Oracle BPEL to Spring Batch for managing large volumes of data and integration with legacy systems in SOAP and Oracle WebLogic
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                July 2021 <br /> June 2022
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Junior Analyst </strong>
                </h5>
                <h6 className="margin-0">
                  Bank original, São paulo - remote
                </h6>
                <p className="mt-10">
                  As a Junior Analyst, I joined the company and made significant contributions to improving internal processes. I used IBM's BPM tool to optimize workflows and created new document templates using Oracle Documaker for the Electronic Document Management System (EDS).
                  In the EDS, I was responsible for enhancing document search methods, using metadata for more efficient searches and facilitating the inclusion of new files.
                  Additionally, I actively participated in a project called ANTIV, whose objective was to evaluate documents received from new clients for viruses and malware, ensuring the security of company data.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                November 2020 <br />  June 2021
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Junior Developer </strong>
                </h5>
                <h6 className="margin-0">
                  Candido Mendes University - Campos dos Goytacazes
                </h6>
                <p className="mt-10">
                  - Development of RESTful APIs for internal systems, migrating from JSF to Spring Boot
                  - Bug fixing and implementation of new features
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                January 2020 <br /> October 2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>Full stack developer </strong>
                </h5>
                <h6 className="margin-0">SIG Certificadora - Campos dos Goytacazes</h6>
                <p className="mt-10">
                  - contributed to the creation of the company's new website.
                  - developed new features in the company's main web systems.
                  - made bug fixes when necessary.
                  - developed web applications for internal use within the company.
                  All development was done using Vue.js on the front-end, PHP on the back-end, and MariaDB as the database.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text pd-10">
                February 2019 <br /> January 2020
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h5 className="no-pad mt-bottom margin-0">
                  <strong>IT suport</strong>
                </h5>
                <h6 className="margin-0">SIG Certificadora - Campos dos Goytacazes</h6>
                <p className="mt-10">
                  Customer Support:
                  I provided support in the configuration and/or installation of digital certificates, for both individuals and legal entities, in A1 and A3 models. This support was provided remotely, using software such as TeamViewer or AnyDesk. Employee Support:
                  I provided support in configuring and/or maintaining computers and peripherals for employees, such as printers and scanners. Additionally, I assisted with any doubts or unexpected behaviors in the software implemented in the company. This support was provided both remotely and in person, as needed.
                  Training for Support Team:
                  I conducted training for new employees who joined the support department of the company, guiding them through the workflow and helping clarify any doubts related to the sector.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

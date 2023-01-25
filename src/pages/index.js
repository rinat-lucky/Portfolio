import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const renderTechs = () => {
  return (
    <section className="mt-3">
      <h2>Технологии</h2>
      <div>
        <div>В своей работе я использую технологии:</div>
        <div>
          <b>HTML, CSS, Bootstrap, Git, JavaScript, React, Redux, Redux Toolkit, ESlint, Webpack, WSL (Ubuntu)</b>
        </div>
        <div>Конечно, продолжаю изучать и практиковать новые инструменты :)</div>
      </div>
    </section>
  );
};

const renderPortfolio = () => {
  return (  
    <section className="mt-3">
      <h2>Портфолио</h2>
      <p>Ссылки на мои работы</p>
    </section>
  );
};

const renderContacts = () => {
  return (
    <section className="mt-3">
      <h2>Контакты</h2>
      <div className="d-flex">
        <a href="https://github.com/rinat-lucky">
          <i className="fa fa-github text-black mx-2"></i>
        </a>
        <a href="https://t.me/rinat1kam">
          <i className="fa fa-telegram text-black mx-2"></i>
        </a>
        <a href="https://www.linkedin.com/in/rinat-kamalitdinov">
          <i className="fa fa-linkedin text-black mx-2"></i>
        </a>
        <a href="mailto:rinat1kam@mail.ru">
          <i className="fa fa-envelope-o text-black mx-2"></i>
        </a>
      </div>
      <a href="https://www.codewars.com/users/rinat-lucky">
        <img src="https://www.codewars.com/users/rinat-lucky/badges/small" alt="codewars" />
      </a>
    </section>
  );
};

const IndexPage = () => {
  return (
    <main>  
      <div className="container my-4">
        <div className="row">
          <div className="col-9 mx-auto">
            <h1 className="mb-3">Ринат Камалитдинов</h1>
            <p>Привет! Я фронтенд-разработчик из Екатеринбурга (Россия). Прошел обучение по этой профессии в онлайн-школе Хекслет. Сейчас активно продолжаю изучать фронтенд-технологии, занимаюсь open-source и pet проектами. <br /> Параллельно ищу работу по этой же специальности. Приоритет - офисная работа в Екатеринбурге на полный день.</p>
            {renderTechs()}
            {renderPortfolio()}
            {renderContacts()}
          </div>
        </div>
      </div>
    </main>
  )
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Ринат Камалитдинов</title>
    <meta property="og:title" content="Ринат Камалитдинов"></meta>
    <meta name="description" content="Личный сайт фронтенд-разработчика Рината Камалитдинова"></meta>
    <script src="https://use.fontawesome.com/1c39e4ec55.js"></script>
  </>
);

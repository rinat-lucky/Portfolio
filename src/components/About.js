import React from "react";
import avatar from "../images/avatar.jpg";

const About = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between mt-5">
      <p className="col-12 col-lg-8">
        Привет! Я фронтенд-разработчик из Екатеринбурга (Россия).
        <br />
        <br />
        Прошел обучение по этой профессии в онлайн-школе <a href="https://ru.hexlet.io/u/rinat_k">Хекслет</a>.
        <br />
        Сейчас активно продолжаю изучать фронтенд-технологии, занимаюсь open-source и pet проектами.
        <br />
        <br />
        Параллельно ищу работу по этой же специальности.
        <br />
        Приоритет - офисная работа в Екатеринбурге на полный день.
      </p>
      <img src={avatar} alt="Rinat" className="rounded d-block img-fluid col-7 col-md-5 col-lg-3" />
    </div>
  );
};

export default About;

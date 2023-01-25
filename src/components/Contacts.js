import React from "react";

const Contacts = () => {
  return (
    <section className="mt-4">
      <h2>Контакты</h2>
      <div className="col-7 col-md-4 d-flex flex-row justify-content-between">
        <a href="https://github.com/rinat-lucky" className="fa-2x">
          <i className="fa fa-github text-black"></i>
        </a>
        <a href="https://t.me/rinat1kam" className="fa-2x">
          <i className="fa fa-telegram text-black"></i>
        </a>
        <a href="https://www.linkedin.com/in/rinat-kamalitdinov" className="fa-2x">
          <i className="fa fa-linkedin text-black"></i>
        </a>
        <a href="mailto:rinat1kam@mail.ru" className="fa-2x">
          <i className="fa fa-envelope-o text-black"></i>
        </a>
      </div>
      <a href="https://www.codewars.com/users/rinat-lucky" className="d-block mt-3">
        <img src="https://www.codewars.com/users/rinat-lucky/badges/small" alt="codewars" className="d-block" />
      </a>
      <div className="mt-3">
        <span>Резюме на HeadHunter: </span>
        <a href="https://ekaterinburg.hh.ru/applicant/resumes/view?resume=9ac30d00ff08c120c80039ed1f31657864696e">
          перейти на HH.ru
        </a>
      </div>
    </section>
  );
};

export default Contacts;

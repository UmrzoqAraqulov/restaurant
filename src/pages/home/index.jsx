import { Fragment, useState } from "react";
import Marquee from "react-fast-marquee";
import "./home.scss";
import {
  title,
  countStudents,
  endDate,
  btnAvtor,
  btnRegister,
  expeirensec,
  digitstext,
  resultText,
} from "../../const/index";
import img from "../../assets/images/avtor.png";
import DigitCard from "../../components/digitCard";
import ResultCard from "../../components/resultCard";
import ModuleCard from "../../components/moduleCard";
import Register from "../../components/register";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [lang, setLang] = useState(
    localStorage.getItem("lang") === "0" ? false : true || true
  );
  const controlLang = () => {
    console.log(lang);
    localStorage.setItem("lang", +!lang);
    setLang(!lang);
  };
  const expeinse = expeirensec[lang ? 0 : 1].split(" ");
  const expeinse1 = expeirensec[lang ? 2 : 3].split(" ");

  return (
    <Fragment>
      <header id="home" className="relative">
        <nav className="flex justify-between containerr">
          <div className="flex text-center items-center">
            <div className="muddat">
              <h2 data-aos="fade-down">{lang ? endDate[0] : endDate[1]}</h2>
              <p>{lang ? endDate[2] : endDate[3]}</p>
            </div>
            <div className="countStudent">
              <h2 data-aos="fade-down">
                {lang ? countStudents[0] : countStudents[1]}
              </h2>
              <p>{lang ? countStudents[2] : countStudents[3]}</p>
            </div>
          </div>
          <button
            className="text-[20px] absolute top-[25px] z-10 right-[30px] font-semibold max-[600px]:top-[15px] max-[600px]:right-[0px] max-[600px]:text-[16px]"
            onClick={controlLang}
          >
            <i className="fa-solid fa-globe bg-transparent text-white rounded-full pr-2 max-[600px]:text-[20px]"></i>
            {lang ? "RU" : "UZ"}
          </button>
        </nav>
        <div className="containerr flex">
          <div className="left">
            <h1 data-aos="fade-right">{title[lang ? 0 : 1].toUpperCase()}</h1>
            <div>
              <p data-aos="fade-right" className="text">
                {title[lang ? 2 : 3]}
              </p>
            </div>
          </div>
          <p className="avtor">
            <p className="text-[12px]">
              {lang ? "Kurs muallifi" : "Автор курса"}
            </p>
            <p className="pb-1.5 font-bold">{btnAvtor[lang ? 0 : 1]}</p>
          </p>
        </div>
        <div className="img-container w-[50%] absolute right-0 top-0 max-[600px]:relative">
          <img data-aos="fade-down" src={img} alt="" />
        </div>
        <div className="containerr relative">
          <button onClick={() => setShowRegister(true)} className="btn">
            {btnRegister[lang ? 0 : 1]}
          </button>
        </div>

        <div className="expeinsec">
          <div>
            <p className="year">20+</p>
            <p>
              {expeinse[0]}
              <span>{expeinse.splice(1)}</span>
            </p>
          </div>
          <div>
            <p className="year">10+</p>
            <p>
              {expeinse[0]}
              <span>{expeinse1.splice(1).join(" ")}</span>
            </p>
          </div>
        </div>
      </header>
      <main className="containerr">
        <h2
          style={{ lineHeight: "60px", textTransform: "uppercase" }}
          className="text-[60px] w-2/3 mx-auto text-center pt-[50px] pb-[30px] max-[900px]:text-[46px] max-[500px]:text-[30px] max-[800px]:w-full"
        >
          {lang
            ? "Ushbu kursda kimlar foyda oladi:"
            : "Для кого будет полезен этот курс:"}
        </h2>
        <section className="digit flex flex-col gap-[60px]">
          <div className="flex justify-center gap-[40px] w-full flex-wrap">
            {digitstext.slice(0, 2).map((el, i) => (
              <DigitCard key={i} text={el[lang ? 0 : 1]} count={`0${i + 1}`} />
            ))}
          </div>
          <div className="flex justify-center gap-[50px] flex-wrap">
            {digitstext.slice(2).map((el, i) => (
              <DigitCard
                key={2 + i}
                text={el[lang ? 0 : 1]}
                count={`0${i + 3}`}
              />
            ))}
          </div>
        </section>
        <h2 className="result-title pt-[100px] text-center text-[50px] mx-auto w-[650px] max-[800px]:text-[36px] max-[500px]:text-[28px] max-[700px]:w-full">
          {lang
            ? "Kurs oxirida nima olasiz:"
            : "Что вы получите по итогам курса:"}
        </h2>
        <section className="flex pt-[60px] text-center gap-y-[100px] flex-wrap justify-center gap-x-[6%] pb-[100px]">
          {resultText.map((el, i) => (
            <ResultCard key={i} text={el[lang ? 1 : 2]} img={el[0]} />
          ))}
        </section>
        <h2 className="result-title pt-[10px] text-center text-[50px] mx-auto max-[800px]:text-[36px] max-[500px]:text-[28px] w-full">
          {lang ? "Kursning moduli" : "МОДУЛЬ:"}
        </h2>
        <section className="py-[10px] sm:py-[40px] w-full sm:w-[70%] mx-auto">
          <ModuleCard lang={lang} />
        </section>
      </main>
      <section className="bg-white py-3 px-2 ">
        <div className="containerr">
          <h2 className="title-register md:w-[60%] result-title pt-[10px] text-center text-[40px] mx-auto max-[800px]:text-[36px] max-[500px]:text-[28px] pb-[20px] text-black">
            {lang
              ? "Ma'lumotlarngizni qoldiring va biz siz bilan albatta bog'lanamiz"
              : "Оставьте свои данные и мы обязательно с вами свяжемся"}
          </h2>
          <div className="w-[80%]  md:w-[40%] mx-auto">
            <Register lang={lang} />
          </div>
        </div>
        <Marquee className="marque">
          {lang
            ? "HAYOTNI BIRGALIKDA MAZALIROQ QILAMIZ! ▪️ HAYOTNI BIRGALIKDA MAZALIROQ QILAMIZ! ▪️ HAYOTNI BIRGALIKDA MAZALIROQ QILAMIZ! ▪️ HAYOTNI BIRGALIKDA MAZALIROQ QILAMIZ! ▪️"
            : ""}
        </Marquee>
      </section>
      <section className="containerr max-[600px]:text-center px-[30px] w-full text-sm font-semibold flex justify-between py-[20px] max-sm:flex-col items-center gap-[10px]">
        <h4>DEVELOPMENT BY UMRZOK ARAKULOV</h4>
        <div className="flex gap-3">
          <Link to="https://t.me/dusmuratoff_portfolio">
            <i className="fa-brands fa-telegram"></i>
          </Link>
          <Link to="https://www.instagram.com/_dusmuratoff/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
        <Link to="#home">
          {lang ? "RESTORATORLIK AKADEMIYASI" : "РЕСТОРАННАЯ АКАДЕМИЯ"}
          <i className="fa-solid fa-arrow-up-long"></i>
        </Link>
      </section>

      <div
        style={
          showRegister
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
        onClick={() => setShowRegister(false)}
        className="close-modal"
      ></div>

      <div
        style={
          showRegister
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
        className="modal"
      >
        <p className="close" onClick={() => setShowRegister(false)}>
          <i className="fa-brands fa-x-twitter"></i>
        </p>
        <h2 className="title-register result-title">
          {lang
            ? "Ma'lumotlarngizni qoldiring va biz siz bilan albatta bog'lanamiz"
            : "Оставьте свои данные и мы обязательно с вами свяжемся"}
        </h2>
        <Register lang={lang} setShowRegister={setShowRegister} />
      </div>
    </Fragment>
  );
};

export default HomePage;

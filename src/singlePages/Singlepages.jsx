import SinglePageSlider from "./SinglePageSlider/SinglePageSlider";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hero } from "../dummyData";
import "./SinglePageSlider/singlepageslider.css";
import "./singlepage.css";
import Side from "../components/home/sideContent/side/Side";

const Singlepages = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <main>
          <SinglePageSlider />
          <div className="container">
            <section className="mainContent details">
              <h1 className="title">{item.title}</h1>

              <div className="author">
                <span>by </span>
                {/* <img src={item.authorImg} alt="" /> */}
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className="social">
                <div className="socBox">
                  <i className="fab fa-facebook-f"></i>
                  <span>SHARE</span>
                </div>
                <div className="socBox">
                  <i className="fab fa-twitter"></i>
                  <span>TWITTER</span>
                </div>
                <div className="socBox">
                  <i className="fab fa-pinterest"></i>
                </div>
                <div className="socBox">
                  <i className="fa fa-envelope"></i>
                </div>
              </div>

              <div className="desctop">
                {item.desc.map((val) => {
                  // val {val.para1} {val.para2}
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p></p>
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Maryam Aliyu running for the State House of Assembly under
                Action Alliance (AA) in Jigawa
              </p>
              <br />
              <hr />
              {item.desc.map((item) => (
                <p></p>
              ))}

              <div className="descbot">
                {item.desc.map((val) => {
                  // data {data.title} {data.para1}
                  return (
                    <>
                      <br />
                      <p>{val.para2}</p>
                      <p></p>
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover1} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hindatu Ibrahim, People Democratic Party (PDP) Councillorship
                Aspirant, Dutse Ward, Jigawa
              </p>
              <br />
              <hr />

              <div className="quote">
                {/* <i className="fa fa-quote-left"></i> */}
                {item.desc.map((val) => (
                  // data {data.quote}
                  <p>{val.para3}</p>
                ))}
              </div>

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para1}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover2} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon Gloria Mawo Ajila, NNPP candidate for Ogori Magongo
                Constituency, Kogi State House of Assembl
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover3} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Fehintola Janet Odetunde, APM House of Assembly Contestant
                in Kwara State.
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.quote}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover4} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Yetunde Ibrahim Labour Party (LP) <br />
                <span style={{ fontWeight: "400" }}>
                  “I will make sure our out-of-school children go back to the
                  classrooms and support artisans, and farmers since a majority
                  of my people are farmers.”
                </span>
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para3}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover5} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Adamilo Yakubu, ADP House of Assembly contestant for Chikun
                constituency, Kaduna State
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para4}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover6} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Evelyn Asase, ADC, Makurdi South Constituency House of
                Assembly Candidate
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para5}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover7} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Funmilayo Comfort Osundeyi, AA State House of Assembly
                Candidate, Oke-Ogun Constituency of Oyun Local Government, Kwara
                State.
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.par}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover8} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Janet Ayuba, State House of Assembly Candidate in Southern
                Kaduna
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para6}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover9} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Cynthia Nkasi, Member Representing Yala 2 state Cross River
                State House of Assembly
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para7}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover10} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Mrs. Aga Catherine Keghnenge, PRP, House of Assembly
                Candidate, Makurdi South Constituency, Benue State
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para8}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover11} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Mrs. Uzoamaka Veronica Ikele, APC, Onicha East Constituency,
                Ebonyi State House of Assembly Contestant
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para9}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover13} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Lami Babageidam, ZLP House of Assembly candidate for
                Ganjuwa/Darazo constituency, Bauch State
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para10}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover12} alt="" />
              <p style={{ fontWeight: "bolder" }}></p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para11}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover14} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Mrs Udoka Sunday Etimbuk, NRM Candidate for Ukanafun
                Constituency in the Akwa State House of Assembly
              </p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para12}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover15} alt="" />
              <p style={{ fontWeight: "bolder" }}></p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para13}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover16} alt="" />
              <p style={{ fontWeight: "bolder" }}></p>
              <br />
              <hr />

              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para14}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover17} alt="" />
              <p style={{ fontWeight: "bolder" }}></p>
              <br />
              <hr />
              <div className="desctop">
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para15}</p>
                      {/* <p>{data.para3}</p> */}
                    </>
                  );
                })}
              </div>
              <img className="allimg" src={item.cover18} alt="" />
              <p style={{ fontWeight: "bolder" }}>
                Hon. Comrade Shafaatu Salihu Labbo
              </p>
              <br />
              <hr />
            </section>
            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  );
};

export default Singlepages;

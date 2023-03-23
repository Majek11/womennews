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
                <img src={item.authorImg} alt="" />
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
                  // val {val.para1} 
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                      <p>{val.para3}</p>
                    </>
                  );
                })}
              </div>
              {item.desc.map((item) => (
                <p></p>
              ))}

              <div className="descbot">
                {item.desc.map((data) => {
                  // data {data.title} {data.para1}
                  return (
                    <>
                      <p>{data.title}</p>
                      {/* <p>{data.para1}</p> */}
                    </>
                  );
                })}
              </div>
              
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

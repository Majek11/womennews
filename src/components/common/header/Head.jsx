import React from "react";
import Logo from './Logo-removebg-preview 1 (1).png'

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
            <div className="logo">
                <img src={Logo} alt=""  />
            </div>
            {/* <div className="ad">
                <img src={Logo} alt="" width={200} />
            </div> */}
        </div>
      </section>
    </>
  );
};

export default Head;

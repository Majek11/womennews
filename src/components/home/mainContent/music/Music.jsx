import React from 'react'
import Slider from 'react-slick'
import { popular } from '../../../../dummyData'
import Heading from '../../../common/Heading/Heading'
import './music.css'

const Music = () => {
    const settings = {
        className:"center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        dots: false,
    }
  return (
    <>
          <section className="music">
        <Heading title="Music News" />
        <div className="content">
        <Slider { ...settings}>
        {popular.map((val) => {
            return (
          <div className="items">
            <div className="box shadow">
              <div className="images row">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="category category1">
                    <span>{val.category}</span>
                </div>
                </div>
                <div className="text row">
                    <h1 className="title">{val.title.slice(0,40)}.....</h1>
                    <div className="date">
                        <i className="fas fa-calendar-days"></i>
                        <label htmlFor="">{val.date}</label>
                    </div>
                    <div className="comment">
                        <i className="fas fa-comment"></i>
                        <label htmlFor="">{val.date}</label>
                    </div>
                </div>
            </div>
          </div>);
        })}
        </Slider>
        </div>
      </section>
    </>
  )
}

export default Music
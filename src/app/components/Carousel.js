'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cardList1 from '../../data1'
import SecondaryCard from "./SecondaryCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows:true,
      infinite:false,
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive:[
        {
          breakpoint:1280,
          settings:{
            slidesToShow:3,
          }
        },
        {
          breakpoint:1000,
          settings:{
            slidesToShow:2,
          }
        },
        {
          breakpoint:650,
          settings:{
            slidesToShow:1,
          }
        }
      ]
    };
    return (
      <div className="relative">
        <Slider {...settings}>
        {cardList1.map((card) => (
            <SecondaryCard img={card.img} title={card.title} text={card.text} key={card.index} link={card.link}/>
          ))}
        </Slider>
      </div>
    );
  }
}
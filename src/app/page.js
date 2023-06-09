'use client'
import React, { useState } from "react";
import MainCard from "./components/MainCard";
import cardList from "../data";
import Head from "next/head";
import Carousel from "./components/Carousel";
import { Modal } from "./components/Modal";
import Header from "./components/Header";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <main className="container mx-auto pb-36 px-8">
        <h1 className="font-bold text-[32px] mt-[50px] mb-[50px]">For you</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {cardList.map((card, index) => (
            <div key={index}>
              <button onClick={() => handleCardClick(card)}>
                <MainCard img={card.img} title={card.title} text={card.description} />
              </button>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-[32px] mt-[50px] mb-[50px]">Week of Modern Classics</h1>
        <Carousel />
        <Modal isVisible={showModal} onClose={handleCloseModal} img={selectedCard?.img} title={selectedCard?.title} text={selectedCard?.description} desc={selectedCard?.summary}  />
      </main>
    </div>
  );
}

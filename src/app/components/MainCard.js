"use client";
import React from "react";
import { Card } from "flowbite-react";

export default function MainCard(props) {
  return (
    <div className="shadow-lg rounded-lg h-96 w-96">
      <img
        src={props.img}
        alt=""
        className="object-contain h-full w-full rounded-t-lg"
      />
      <div className="p-5">
        <h3 className="text-3xl font-bold text-slate-700 mb-3">{props.title}</h3>
        <p className="text-lg font-normal text-gray-600">{props.text}</p>
      </div>
    </div>
  );
}

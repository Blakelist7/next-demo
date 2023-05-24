import React, { useEffect } from "react";

export const Modal = ({ isVisible, onClose, img, title, text, desc }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling on the body when modal is open
    } else {
      document.body.style.overflow = ""; // Enable scrolling on the body when modal is closed
    }

    return () => {
      document.body.style.overflow = ""; // Enable scrolling on the body when the component is unmounted
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start overflow-y-auto"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-full max-w-[600px] mt-10 mb-10 mx-4 sm:mx-auto">
        <button className="text-white text-xl place-self-end" onClick={onClose}>
          X
        </button>
        <div className="shadow-lg rounded-lg bg-white">
          <img src={img} alt="" className="object-contain rounded-t-lg h-64 w-full" />
          <div className="p-5">
            <h3 className="text-3xl font-bold text-slate-700 mb-3">{title}</h3>
            <p className="text-lg font-normal text-slate-600">{text}</p>
            <h2 className="text-xl font-bold text-slate-700 mt-2">Summary</h2>
            <p className="text-lg font-normal text-slate-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

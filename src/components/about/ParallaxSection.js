import React from "react";
import ParallaxModal from "./ParallaxModal";

const ParallaxSection = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url('https://i.postimg.cc/T29W3JZX/video-1.png'`, backgroundAttachment: 'fixed'
        }}
      >
        <div className="bg-opacity-60"></div>
        <div style={{ width: '1245px', justifyContent: 'space-between' }} className="flex items-center flex-col lg:flex-row py-32">
          <div className="text-left lg:text-left">
            <h1 className=" mb-4 text-4xl header2 text-[#FDC913]">
              Why choose us
            </h1>
            <h1 className="text-5xl font-bold text-white">
              Visit our kitchens to see <br /> how we prepare your <br />{" "}
              favorite dish
            </h1>
          </div>
          <label htmlFor="my-modal-3" className="modal-button">
            <img
              width={120}
              src="https://i.postimg.cc/MZ5bFQbd/play-button.png"
              alt=""
            />
          </label>
        </div>
      </div>
      <ParallaxModal />
    </>
  );
};

export default ParallaxSection;

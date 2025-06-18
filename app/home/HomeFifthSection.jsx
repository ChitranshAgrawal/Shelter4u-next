"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const HomeFifthSection = ({ partners = [] }) => {
  return (
    <div className="py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <p className="text-3xl font-bold text-gray-800 sm:text-4xl mb-2 text-center">
            Our Authorized Partners
          </p>
        </div>

        <Marquee speed={130}>
          {partners.map((partner, index) => (
            <div
              key={`${index}`}
              className="inline-flex items-center justify-center mx-2"
            >
              <img
                src={partner.img}
                alt={`${partner.title}`}
                className="h-32 w-auto object-contain transition-transform duration-300"
                style={{
                  backgroundSize: "contain",
                  minWidth: "224px",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeFifthSection;

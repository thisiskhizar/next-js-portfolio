"use client";
import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const Questions = ({ faqs }: { faqs: FAQItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-10 md:py-20">
      <h1 className="heading pb-5 text-center">
        Frequently Asked <span className="text-purple">Questions</span>
      </h1>

      <div className="max-w-3xl mx-auto space-y-4 mt-12 px-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 ${
              activeIndex === index ? "bg-black-200" : "bg-black-100"
            }`}
          >
            <button
              className="w-full text-left flex items-center justify-between p-6 font-semibold text-white text-base md:text-lg"
              onClick={() => handleToggle(index)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Collapse content */}
            <div
              className={`px-6 pt-0 pb-6 text-white-200 text-sm md:text-base leading-relaxed transition-all duration-300 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;

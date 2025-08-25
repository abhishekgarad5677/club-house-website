import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqItems = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the Sign Up button and follow the instructions to register your account.",
    },
    {
      question: "Can I earn rewards by playing?",
      answer:
        "Yes! You can earn real rewards by participating in tournaments and events.",
    },
    {
      question: "Is this game free to play?",
      answer:
        "Absolutely! The game is free to play, with optional in-app purchases.",
    },
    {
      question: "Can I earn rewards by playing?",
      answer:
        "Yes! You can earn real rewards by participating in tournaments and events.",
    },
    {
      question: "Is this game free to play?",
      answer:
        "Absolutely! The game is free to play, with optional in-app purchases.",
    },
  ];

  return (
    <div className="faq-container mt-30 pb-40 px-6 mx-auto">
      <h2 className="text-white text-center text-[42px] font-bold mb-6">
        FAQ's
      </h2>
      <h1 className="text-white text-center text-[62px] font-bold mb-18">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqItems.map((item, index) => {
          const isOpen = index === activeIndex;
          return (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left text-white text-lg font-medium py-4 cursor-pointer"
              >
                {item.question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="text-gray-400 text-base transition-all duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

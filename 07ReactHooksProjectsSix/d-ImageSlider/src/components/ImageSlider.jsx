
import { useState } from "react";

import img1 from "../assets/book1.png";
import img2 from "../assets/book2.png";
import img3 from "../assets/book3.png";
import img4 from "../assets/book4.png";
import img5 from "../assets/book5.png";
import img6 from "../assets/book6.png";
import img7 from "../assets/book7.png";
import img8 from "../assets/book8.png";
import img9 from "../assets/book9.png";

export default function bookSlider() {
  const books = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === books.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? books.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <img
        src={books[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-150 h-100 object-cover rounded-lg shadow-lg"
      />

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white px-5 py-2 rounded"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Next
        </button>
      </div>
      <div className="flex gap-2">
  {books.map((_, index) => (
    <span
      key={index}
      className={`h-3 w-3 rounded-full ${
        index === currentIndex
          ? "bg-blue-600"
          : "bg-gray-400"
      }`}
    />
  ))}
</div>

      <p className="text-lg font-semibold">
        {currentIndex + 1} / {books.length}
      </p>
    </div>
  );
}
import { useState } from "react";

export default function App() {

const [rating, setRating] = useState(0);
    
   return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <h3 className="text-3xl font-bold mb-4">
    Star Rating Component
  </h3>

  <p className="mb-4 text-lg">
    {rating > 0
      ? `You rated this ${rating}/5 stars`
      : "Click on a star to rate"}
  </p>

  <div>
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        onClick={() => setRating(star)}
        className={`cursor-pointer text-5xl ${
          star <= rating ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ))}
  </div>
</div> )
}

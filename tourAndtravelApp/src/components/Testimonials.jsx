import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials({ testimonials }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 border-l-4 border-black-600 pl-4">
        What Our Travelers Say
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center border">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-black-500"
        />

        <div className="flex justify-center mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
        </div>

        <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
          "{testimonial.text}"
        </p>

        <h3 className="font-bold text-xl">{testimonial.name}</h3>

        <p className="text-gray-500">{testimonial.location}</p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full border hover:bg-black-600 hover:text-black transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full border hover:bg-black-600 hover:text-black transition"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-black-200" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import SlideItem from "./SliderItem";

const HeroSlider = () => {
  const [artikels, setArtikels] = useState([]);
  const baseURL = "https://crysense-be-production.up.railway.app";

  useEffect(() => {
    fetch(`${baseURL}/artikel`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.fetchArtikel) {
          setArtikels(data.fetchArtikel.slice(0, 3));
        }
      })
      .catch((err) => console.error("Gagal fetch artikel:", err));
  }, []);

  return (
    <section className="bg-white max-w-screen-xl border border-gray-200 rounded-2xl mx-auto px-8">
      <div className="mx-auto">
        <Carousel
          slideInterval={5000}
          pauseOnHover
          indicators={false}
          leftControl={
            <FaChevronLeft className="text-lg md:text-4xl text-secondary-light hover:text-secondary" />
          }
          rightControl={
            <FaChevronRight className="text-lg md:text-4xl text-secondary-light hover:text-secondary" />
          }
        >
          {artikels.map((artikel, index) => (
            <SlideItem
              key={index}
              title={artikel.title}
              description={artikel.description}
              image={`${baseURL}${artikel.imageUrl}`}
              buttonText="Baca"
              buttonLink={`/detailartikel/${artikel._id}`}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSlider;
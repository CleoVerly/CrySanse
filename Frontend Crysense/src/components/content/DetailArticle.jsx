import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MotionWrapper from "../animations/MotionWrapper";

const DetailArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const BASE_URL = "https://crysense-be-production.up.railway.app";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/artikel/${id}`)
      .then((res) => {
        const data = res.data.postArtikel;
        setArticle(data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <MotionWrapper variant="fade-up">
        <img
          src={`${BASE_URL}${article.imageUrl.startsWith("/") ? article.imageUrl : `/uploads/${article.imageUrl}`}`}
          alt={article.title}
          className="w-full h-auto rounded-lg mb-6"
        />
        <h1 className="max-w-screen-sm text-xl md:text-4xl leading-relaxed font-bold mb-4 font-poppins text-primary-dark">
          {article.title}
        </h1>
      </MotionWrapper>
      {article.description.split('\n').map((paragraph, index) => {
        const isNumbered = /^\d+\.\s/.test(paragraph)
        
          return (
            <p
              key={index}
              className="mb-4 text-sm md:text-lg leading-relaxed font-open-sans text-primary-darkest"
            >
              {isNumbered ? <strong>{paragraph}</strong> : paragraph}
            </p>
          );
      })}
    </div>
  );

};

export default DetailArticle;
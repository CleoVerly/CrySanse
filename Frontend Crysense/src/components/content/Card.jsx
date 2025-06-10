import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import MotionWrapper from "../animations/MotionWrapper";

const ArticleCard = () => {
  const [articles, setArticles] = useState([]);
  const BASE_URL = "https://crysense-be-production.up.railway.app";

  useEffect(() => {
    fetch(`${BASE_URL}/artikel`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.fetchArtikel);
      });
  }, []);

  return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {articles.map((item, index) => (
          <MotionWrapper key={item._id} variant="fade-up" delay={index * 0.2}>
            <Card
              imgSrc={`${BASE_URL}${item.imageUrl}`}
              className="!bg-white border !border-gray-200 rounded-lg shadow"
            >
              <h5 className="text-base md:text-xl font-bold text-primary-dark font-poppins">
                {item.title}
              </h5>
              <p className="text-sm text-primary-darkest font-open-sans leading-relaxed">
                {item.description.slice(0, 150)}...
              </p>
              <Link
                to={`/detailartikel/${item._id}`}
                className="mt-2 inline-flex items-center text-secondary-light font-semibold hover:text-secondary font-open-sans"
              >
                Baca <span className="ml-1">→</span>
              </Link>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
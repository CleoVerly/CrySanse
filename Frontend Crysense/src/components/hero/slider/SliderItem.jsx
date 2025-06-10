const SlideItem = ({ title, description, image, buttonText, buttonLink }) => {
  const truncatedDescription =
    description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 w-full h-full">
        <div className="scale-80 md:scale-90 w-full md:w-auto transition-transform duration-300">
          <div className="flex flex-col-reverse md:flex-row items-center gap-6">

            <div className="max-w-screen-sm">
              <h2 className="text-xl md:text-4xl font-bold text-secondary font-poppins mb-2 leading-relaxed">
                {title}
              </h2>
              <p className="text-base text-primary-darkest font-open-sans mb-4 text-lg leading-relaxed">
                {truncatedDescription}
              </p>
              <a
                href={buttonLink}
                className="inline-flex items-center px-4 py-2 rounded-md font-semibold text-white bg-secondary-light hover:bg-secondary transition-colors text-lg"
              >
                {buttonText}
                <svg
                  className="ml-2 mt-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="w-full md:w-auto">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
const VisiMisiCard = ({ image, alt, title, description }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="relative w-full">
        <img
          src={image}
          alt={alt || title}
          className="rounded-2xl w-full h-auto object-cover"
        />

        <div className="relative -mt-12 mx-auto w-[85%] bg-white rounded-2xl border border-gray-300 p-6 text-center">
          <h3 className="text-md md:text-xl font-bold text-primary-dark font-poppins mb-2">
            {title}
          </h3>
          <p className="text-sm text-primary-darkest font-open-sans">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiCard;

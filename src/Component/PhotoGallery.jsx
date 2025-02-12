import LazyLoad from "react-lazyload";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";

export const PhotoGallery = () => {
  const SkeletonLoader = () => (
    <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
      <svg
        className="w-full h-full text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  );

  return (
    <div className="pt-10 md:pt-20">
      <div className="text-center">
        <p className="text-custom-btn font-semibold tracking-[0.15em] text-lg mb-6 uppercase">
          Gallery
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold title-text">
          Explore Our Collection
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
          {/* LazyLoad images with placeholders */}
          {[banner1, banner2, banner3, banner4, banner5, banner6].map(
            (banner, index) => (
              <div key={index} className="h-[400px] w-full overflow-hidden">
                <LazyLoad
                  height={400}
                  offset={100}
                  placeholder={<SkeletonLoader />}
                >
                  <img
                    className="h-[400px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    src={banner}
                    alt={`Banner ${index + 1}`}
                  />
                </LazyLoad>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

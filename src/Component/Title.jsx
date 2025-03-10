export const Title = ({ title, para }) => {
  return (
    <div
      className="relative min-h-[300px] w-full bg-title-bg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-4xl sm:text-4xl lg:text-5xl font-bold">
          {title}
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-medium leading-relaxed w-11/12 lg:w-9/12 mx-auto">
          {para}
        </p>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const { _id, artifactImage, artifactName, historicalContext, discoveredBy } =
    item;
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow duration-600">
      <img
        className="rounded-t-lg h-[300px] w-full"
        src={artifactImage}
        alt=""
      />

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {artifactName}
          </h5>
          <h4 className="font-semibold text-gray-400 mb-2 text-sm">
            <span className="text-gray-500">Discover By </span>: {discoveredBy}
          </h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {historicalContext.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
        </div>

        {/* Button container with smooth height transition */}
        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-32">
          <Link to={`/artifactsDetails/${_id}`}>
            <button className="bg-custom-btn text-white rounded-lg py-2 w-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline group overflow-hidden px-10 relative">
              <span className="relative z-10">View Details</span>
              <span className="absolute inset-0 w-0 bg-[#183153] transition-all rounded duration-500 ease-in-out group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useLoaderData } from "react-router-dom";
import { Title } from "../Component/Title";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdLocationOff } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    _id,
    artifactName,
    presentLocation,
    discoveredBy,
    discoveredAt,
    createdAt,
    historicalContext,
    artifactType,
    artifactImage,
    like,
  } = data;

  const [liked, setLiked] = useState(like || 0);
  const [likeToggle, setLikeToggle] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://artifact-arcade-server.vercel.app/likedArtifacts?email=${user.email}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          const alreadyLiked = res.data.likedArtifacts?.find(
            (item) => item.id === _id
          );
          if (alreadyLiked) {
            setLikeToggle(true);
          }
        })
        .catch((err) => {});
    }
  }, [user?.email, _id]);

  // Handle like action
  const handleLike = () => {
    if (!likeToggle) {
      const newLiked = liked + 1;
      const updatedLike = { like: newLiked };

      axios
        .patch(
          `https://artifact-arcade-server.vercel.app/updateLike/${_id}`,
          updatedLike
        )
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .put(
                `https://artifact-arcade-server.vercel.app/likedArtifacts/${user.email}`,
                { id: _id, image: artifactImage },
                { withCredentials: true }
              )
              .then((res) => {
                setLikeToggle(true);
                setLiked(newLiked);
              });
          }
        });
    }
  };

  // Handle dislike action
  const handleDislike = () => {
    if (!user?.email) {
      alert("You must be logged in to dislike an artifact!");
      return;
    }

    if (likeToggle) {
      const newLiked = liked - 1;
      const updatedLike = { like: newLiked };

      axios
        .patch(
          `https://artifact-arcade-server.vercel.app/updateLike/${_id}`,
          updatedLike
        )
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            axios
              .delete(
                `https://artifact-arcade-server.vercel.app/likedArtifacts/${user.email}/${_id}`,
                { withCredentials: true }
              )
              .then(() => {
                setLikeToggle(false);
                setLiked(newLiked);
              });
          }
        });
    }
  };

  return (
    <div className="pb-0 md:pb-10 mt-[112px]">
      <HelmetProvider>
        <Helmet>
          <title>{artifactName} - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <Title title={"Artifact Details"} />
      <div className="w-11/12 lg:w-9/12 mx-auto mt-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h2 className="text-3xl font-bold text-custom-btn">{artifactName}</h2>
          <div>
            <p className="text-gray-600 flex items-center gap-2 dark:text-gray-400">
              <span className="font-semibold text-lg">
                Total Likes: {liked}
              </span>
              <span className="ml-2 flex items-center">
                {likeToggle ? (
                  <button
                    className="bg-[#f2f2f2] hover:bg-[#d2d2d2] rounded-lg flex justify-center items-center cursor-pointer p-2"
                    onClick={handleDislike}
                  >
                    <AiOutlineDislike className="text-blue-500 mr-1 text-3xl" />
                  </button>
                ) : (
                  <button
                    className="bg-[#f2f2f2] hover:bg-[#d2d2d2] rounded-lg flex justify-center items-center cursor-pointer p-2"
                    onClick={handleLike}
                  >
                    <AiOutlineLike className="text-blue-500 mr-1 text-3xl" />
                  </button>
                )}
              </span>
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="mt-6">
          <img
            className="h-full md:h-[400px] w-full object-cover"
            src={artifactImage}
            alt="Artifact"
          />
        </div>
        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mt-8 dark:text-gray-300">
          {historicalContext}
        </p>
        {/* Additional Information */}
        <div className="flex flex-col space-y-1 mt-4">
          <h3 className="text-gray-800 font-semibold dark:text-gray-100">
            <span className="text-gray-500">Type of Artifact:</span>{" "}
            {artifactType}
          </h3>
          <h3 className="text-gray-800 font-semibold mt-4 dark:text-gray-100">
            <span className="text-gray-500">Discovered By:</span> {discoveredBy}
          </h3>
          <h3 className="text-gray-800 font-semibold mt-4 dark:text-gray-100">
            <span className="text-gray-500">Created At:</span> {createdAt}
          </h3>
        </div>
        {/* Location */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 mt-4">
          <h3 className="flex items-center text-gray-800 font-semibold">
            <MdLocationOff className="text-red-500 w-5 h-5" />
            <span className="ml-2 dark:text-white">
              <span className="text-gray-500 dark:text-gray-300">
                Present Location:
              </span>{" "}
              {presentLocation}
            </span>
          </h3>
          <h3 className="flex items-center text-gray-800 font-semibold">
            <FaSearchengin className="text-blue-500 w-5 h-5" />
            <span className="ml-2 dark:text-white">
              <span className="text-gray-500 dark:text-gray-300">
                Discovered At:
              </span>{" "}
              {discoveredAt}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

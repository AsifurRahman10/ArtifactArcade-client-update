import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingImg from "../../public/loading.json";
import { AuthContext } from "../Provider/AuthProvider";

export const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-screen w-full mt-[112px]">
        <Lottie
          className="w-1/3 mx-auto"
          animationData={loadingImg}
          loop={true}
        />
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={"/login"}></Navigate>
    );
  }

  return <div>{children}</div>;
};

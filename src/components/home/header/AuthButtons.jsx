import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/authSlice";
import authService from "@/appwrite/auth";
import { persistor } from "@/app/store";

const AuthButtons = () => {
  const isAuthenticate = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    authService.logout().then(() => {
      dispatch(logout());
      persistor.purge();
    });
  };

  return (
    <div className=" flex items-center px-5 gap-4 justify-start py-4 mt-4">
      {!isAuthenticate ? (
        <>
          <div className="bg-lime-300 hover:bg-lime-200 text-black flex gap-2 border border-violet-500  px-4 py-2 rounded-md font-semibold ">
            <Link to={"/login"} className="flex gap-6">
              <p className="text-xl">LogIn</p>
            </Link>
          </div>
          <div className="bg-lime-300 hover:bg-lime-200 text-black flex gap-2 border border-violet-500 px-4 py-2 rounded-md font-semibold ">
            <Link to={"/signup"} className="flex gap-4">
              <p className="text-xl">SignUp</p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={handleLogOut}
            className="bg-lime-300 hover:bg-lime-200 text-black flex gap-2 border border-violet-500 hover:bg-violet-300 px-4 py-2 rounded-md font-semibold"
          >
            <p className="text-xl">LogOut</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButtons;

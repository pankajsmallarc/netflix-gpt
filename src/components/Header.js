import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handlelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      { user  && (
        <div className="flex gap-3 p-2 text-white">
          <img
            className="w-10 h-10 rounded-full pt-1 mt-1"
            src={user?.photoURL}
            alt="profile"
          />
          <button className = "mt-0 pb-2 text-white" onClick={handlelSignOut}>(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;

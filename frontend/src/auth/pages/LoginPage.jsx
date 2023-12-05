import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SVG from "../../assets/devchallenges.svg";
import facebook from "../../assets/Facebook.svg";
import google from "../../assets/Google.svg";
import twitter from "../../assets/Twitter.svg";
import github from "../../assets/Github.svg";
export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Pool Ramos");

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="px-10 border-2 rounded-md text-xl w-[600px] h-[500px] flex flex-col justify-center gap-3">
        <div>
          <img src={SVG} alt="devchallenges" />
        </div>
        <h1 className="font-bold mb-3 text-4xl">Login</h1>
        <form>
          <div>
            <input
              className="p-2 border-2 rounded-md w-full mb-5"
              type="text"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              className="p-2 border-2 rounded-md w-full mb-5"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="bg-blue-500 text-white w-full p-2 rounded mb-2"
            onClick={onLogin}
          >
            Login
          </button>
        </form>
        <span className="align-middle text-center w-full text-gray-600">
          or continue with these social profile
        </span>
        <div className="flex items-center justify-center gap-x-8">
          <div className="cursor-pointer">
            <img src={google} alt="google_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={facebook} alt="facebook_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={twitter} alt="twitter_logo" />
          </div>
          <div className="cursor-pointer">
            <img src={github} alt="github_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Alert } from "../components";
import { CloseAlert } from "../store/Alert";
import { SignInHandler, SignUpHandler } from "../store/Auth";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleLoginHandler } from "../store/Auth";

const userRemember = JSON.parse(sessionStorage.getItem("remember")) || null;

const Auth = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.alert);
  const { loading, user } = useSelector((state) => state.auth);
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    confirm: "",
    nama: "",
  });
  const [remember, setRemember] = useState(userRemember ? true : false);
  const { pathname } = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();

    if (pathname === "/register") {
      return dispatch(SignUpHandler({ authForm, dispatch }));
    }

    return dispatch(SignInHandler({ authForm, dispatch, remember }));
  };

  const formHandler = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      return (window.location.href = "/");
    }

    if (userRemember && remember) {
      setAuthForm({
        email: userRemember?.email,
        password: userRemember?.password,
      });
    }
  }, [user, remember]);

  return (
    <section className="min-w-screen min-h-screen relative">
      <img src="assets/pattern.png" alt="pattern" />
      <div className="bg-white shadow-lg shadow-gray-500 rounded-md py-5 px-5 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
        {open && <Alert />}
        <h2 className="text-center text-3xl font-bold">
          {pathname === "/register" ? "Register" : "Login"}
        </h2>
        <p className="text-body text-center text-sm font-normal  mt-3 mb-6">
          {pathname === "/register"
            ? "Already have account?"
            : "Don't have account?"}
          {pathname === "/register" ? (
            <Link to="/login">
              <button className="text-button font-semibold text-sm ml-1">
                Login
              </button>
            </Link>
          ) : (
            <Link to="/register">
              <button className="text-button font-semibold text-sm ml-1">
                Register
              </button>
            </Link>
          )}
        </p>
        {pathname === "/register" ? (
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-y-2"
          >
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Name</label>
              <input
                type="text"
                required
                name="nama"
                onChange={formHandler}
                value={authForm.name}
                className="w-full py-2 px-3 outline-none bg-input"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Email</label>
              <input
                type="email"
                required
                name="email"
                onChange={formHandler}
                value={authForm.email}
                className="w-full py-2 px-3 outline-none bg-input"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Password</label>
              <input
                type="password"
                required
                name="password"
                onChange={formHandler}
                value={authForm.password}
                className="w-full py-2 px-3 outline-none bg-input"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Confirm</label>
              <input
                type="password"
                required
                name="confirm"
                onChange={formHandler}
                value={authForm.confirm}
                className="w-full py-2 px-3 outline-none bg-input"
              />
            </div>
            <button className="w-full bg-button text-white font-semibold text-sm py-2 rounded-sm mt-6">
              Register
            </button>
          </form>
        ) : (
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-y-2"
          >
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Email</label>
              <input
                type="email"
                required
                name="email"
                onChange={formHandler}
                value={authForm.email}
                className="w-full py-2 px-3  bg-input outline-none"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-y-1">
              <label className="text-body mb-2">Password</label>
              <input
                type="password"
                required
                name="password"
                onChange={formHandler}
                value={authForm.password}
                className="w-full py-2 px-3   bg-input outline-none"
              />
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => {
                  setRemember(e.target.checked);
                }}
              />
              <p className="text-body font-normal ml-2">Remember me?</p>
            </div>
            <button className="w-full bg-button text-white font-semibold text-sm py-2 rounded-sm mt-5">
              Login
            </button>
          </form>
        )}
        <div className="border-t border-gray-300 pt-3 mt-3 flex justify-center items-center">
          <GoogleLogin
            onSuccess={(response) => {
              dispatch(GoogleLoginHandler(response?.credential));
            }}
            onError={(err) => console.log(err)}
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;

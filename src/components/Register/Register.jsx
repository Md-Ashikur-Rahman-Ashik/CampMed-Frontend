import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    user,
    registerUser,
    setUser,
    updateUserProfile,
    setLoading,
    googleUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data.email, data.password);
      await updateUserProfile(data.name, data.photo);
      setUser({ ...user, photoURL: data.photo, displayName: data.name });
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axios.post("https://b9a12-server-side-md-ashikur-rahman-ashik.vercel.app/users", userInfo).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      });
      setLoading(false);

      // Navigate after registration
      navigate(location.state ? location.state : "/");
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "User registration failed",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
    }
    reset();
  };

  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration with Google account successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);

        // Navigate after login
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "User Login Failed",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      });
  };

  return (
    <div className="container p-6 mx-auto max-w-md rounded-md shadow sm:p-8 bg-green-50 text-green-900">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Create an account
      </h2>
      <p className="text-center text-black">
        Already have an account?
        <Link to={"/login"} className="focus:underline hover:underline">
          <span className="text-green-900 font-bold">{" Login"}</span>
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          onClick={handleGoogleUser}
          aria-label="Register with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Register with Google</p>
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate=""
        action=""
        className="space-y-8"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Photo URL
            </label>
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="humanity@palestine.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
        </div>
        <input
          type="submit"
          value={"Sign Up"}
          className="w-full px-8 py-3 font-semibold rounded-md bg-green-100 text-green-900 btn"
        />
      </form>
    </div>
  );
};

export default Register;

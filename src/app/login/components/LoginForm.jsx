"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const respose = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (respose.ok) {
      router.push("/");
      e.target.reset();
      toast.success("Log In successfull");
    } else {
      toast.error("something is wrong , try again");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

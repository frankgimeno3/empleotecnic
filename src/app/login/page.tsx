"use client";
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) setError(res.error as string);

    if (res?.ok) return router.push("/dashboard/profile");
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 object-cover w-screen h-screen"
        src="/video/perfiles.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg w-50vw  pt-10 pb-10 mt-20 ">
          <div className="flex flex-col items-center  p-24">
            <form
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
              )}
              <h1 className="text-4xl font-bold mb-7 text-white">Iniciar Sesión</h1>

              <label className="text-slate-300 mb-4">Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
                name="email"
              />

              <label className="text-slate-300 mb-4">Contraseña:</label>
              <input
                type="password"
                placeholder="Password"
                className="bg-zinc-800 px-4 py-2 block mb-2 w-full"
                name="password"
              />

              <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

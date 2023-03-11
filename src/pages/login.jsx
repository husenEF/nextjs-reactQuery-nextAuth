import { signIn } from "next-auth/react";
import { forwardRef, useRef, useState } from "react";

export default function LoginPage() {
  const userName = useRef("");
  const password = useRef("");
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/user",
    });
  };

  return (
    <div className="container mx-auto max-w-lg">
      <h1>Login page</h1>
      <div className="shadow bg-white rounded-md flex flex-col gap-2">
        <div className={" relative"}>
          <div className={" flex flex-col"}>
            <label
              className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base"
              htmlFor="email">
              email
            </label>
            <div className="flex items-stretch">
              <input
                id="email"
                autoComplete="off"
                className={`border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500
          ${error && "border-red-500 border  animate-shake rounded-md"} `}
                ref={userName}
                onChange={(e) => (userName.current = e.target.value)}
                type="email"
              />
            </div>
            {error && (
              <p className="text-red-600 text-right animate-shake">
                ada error gan
              </p>
            )}
          </div>
          <div className={" flex flex-col"}>
            <label
              className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base"
              htmlFor="password">
              Password
            </label>
            <div className="flex items-stretch">
              <input
                id="password"
                autoComplete="off"
                className={`border border-slate-400 disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500
          ${error && "border-red-500 border  animate-shake rounded-md"} `}
                ref={userName}
                onChange={(e) => (password.current = e.target.value)}
                type="password"
              />
            </div>
            {error && (
              <p className="text-red-600 text-right animate-shake">
                ada error gan
              </p>
            )}
          </div>

          <button
            onClick={onSubmit}
            type="submit"
            className="mt-4 w-full p-2 bg-violet-500 hover:bg-violet-700 text-white  transition duration-500 rounded-md active:scale-95">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

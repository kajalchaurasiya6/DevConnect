import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema, type SignupSchemaType } from "../types/auth.types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupUser } from "../services/authService";
import { showErrorToast, showSuccessToast } from "@/lib/toastify";

// src/pages/Signup.tsx


const SignupPage = () => {
  const navigate = useNavigate();
  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: SignupSchemaType) => {
    signupUser(data).then((data) => {
      console.log(data);
      showSuccessToast('User created !', 1000)
    }).then(() => {
      navigate('/login');
    }).catch((error) => {
      showErrorToast(error);
    })
  };
  return (
    <div className="flex flex-col  md:flex-row h-screen w-2/10">
      <div className="hidden md:flex w-full md:w-1/2 relative flex-col justify-center px-10 bg-gradient-to-tr from-indigo-200 via-zinc-300 to-pink-300">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-800 mb-4">
            Join DevConnect — a space where developers collaborate, share ideas, and grow together.
          </h1>

        </div>
        <div className="absolute bottom-6 left-10 text-sm text-gray-500 flex flex-col gap-2">
          <div className="flex gap-4">
            <Link to="#">Terms</Link>
            <Link to="#">Plans</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-zinc-200 to-indigo-200">
        <div className="bg-white text-slate-800 w-full max-w-md mx-4 md:mx-0 rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-5 text-center">Sign Up</h2>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col space-y-2 w-full">
                <Button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-tr from-indigo-500 via-indigo-200-300 to-pink-500 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Sign Up
                </Button>

                <div className="text-sm text-center text-gray-400 ">Or</div>

                <div className="flex flex-col">
                  <Button
                    type="button"
                    className=" border bg-white hover:bg-slate-50  rounded-md  text-sm flex items-center justify-center"
                  >
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
                    <p className="text-gray-800">Sign In with Google</p>
                  </Button>
                </div>
              </div>
            </form>
          </Form>

          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account?{" "}
            <Link to={'/login'} className="text-indigo-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

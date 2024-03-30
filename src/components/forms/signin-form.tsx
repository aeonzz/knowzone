"use client";

import { SignInValidation } from "@/lib/validations/user";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { Button } from "../ui/button";
import Link from "next/link";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../../public/KnowZone book.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignInValidation>) => {
    setIsLoading(true);

    try {
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (signInData?.error) {
        setIsLoading(false);
        toast.error("Uh oh! Something went wrong.", {
          description: signInData.error,
        });
      } else if (signInData?.ok) {
        router.push("/dashboard");
        router.refresh()
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Uh oh! Something went wrong.", {
        description:
          "An error occurred while making the request. Please try again later",
      });
    }
  };

  return (
    <div className="relative mb-16 w-[380px] p-10">
      <Link href="/" className="mb-7 flex flex-col items-center justify-center">
        <Image src={Logo} alt={Logo} width={100} height={100} />
        <h2 className="text-center text-2xl font-bold tracking-tight">
          KnowZone
        </h2>
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="mail@example.com"
                      {...field}
                      disabled={isLoading}
                    />
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
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href="/register">
              <p className="mt-3 text-right text-sm text-blue-700">
                Forgot password?
              </p>
            </Link>
          </div>
          <Button className="mt-3 w-full" type="submit" disabled={isLoading}>
            Login
          </Button>
        </form>

        {/* <p className='text-center text-sm text-gray-600 mt-2'>
          If you don&apos;t have an account, please&nbsp;
          <Link className='text-blue-500 hover:underline' href='/sign-up'>
            Sign up
          </Link>
        </p> */}
      </Form>
    </div>
  );
};

export default SigninForm;

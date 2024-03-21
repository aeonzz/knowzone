import SigninForm from "@/components/forms/signin-form";
import { redirect, useRouter } from "next/navigation";

const Login = async () => {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/home");
  // }

  return (
    <section className="flex h-screen w-full items-center">
      <div className="flex h-screen w-full flex-1 items-center justify-center">
        <SigninForm />
      </div>
    </section>
  );
};

export default Login;

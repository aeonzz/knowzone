import SideBar from "@/components/shared/side-bar";
import { authOptions } from "@/lib/auth";
import { fetchUserById } from "@/lib/server-actions/user.actions";
import { getServerSession } from "next-auth";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions)
  const currentUser = await fetchUserById(session!.user.id)

  return (
    <section className="mt-5 flex h-screen w-full gap-10 px-16 container">
      <SideBar currentUser={currentUser.data} />
      <div className="min-h-full w-full">{children}</div>
    </section>
  );
}

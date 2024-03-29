import SideBar from "@/components/shared/side-bar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mt-5 flex h-screen w-full px-16">
      <SideBar />
      {children}
    </section>
  );
}

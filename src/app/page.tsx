import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import HeroSection1 from "../../public/SEO-pana 2.svg";
import HeroSection2 from "../../public/Office management-cuate.svg";
import { profiles } from "../constants/index";

export default function Home() {
  return (
    <main className="relative flex h-auto flex-col items-center">
      <section className="relative flex h-[500px] w-[640px] flex-col items-center justify-center space-y-7">
        <div className="absolute -left-[60%] -top-[50%] -z-50 h-[800px] w-[800px] bg-radial-gradient" />
        <div className="absolute -bottom-[50%] -right-[50%] -z-50 h-[800px] w-[800px] bg-radial-gradient" />
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold !leading-tight tracking-tight lg:text-5xl">
          Your Buddy for Stress-free Research Resources!
          <br /> No Fuss, <span className="text-accent">Just Fun!</span>
        </h1>
        <div className="space-x-1">
          <Button variant="ghost">Request an account</Button>
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "default" }), "w-[133px]")}
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="container w-full px-32 pb-20">
        <div className="flex items-center justify-center space-x-28">
          <div className="space-y-5">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
              Seamless Search Simplified.
            </h2>
            <p className="font-semibold text-[#3E3D3D]">
              Dive into the heart of research without the overwhelm. RRL
              Finder's streamlined search interface lets you swiftly pinpoint
              the exact resources you need. Say goodbye to endless browsing and
              hello to more discoveries, more insights, and more fun in every
              search.
            </p>
          </div>
          <Image src={HeroSection1} alt="SEO" width={640} height={640} />
        </div>
      </section>
      <section className="container w-full px-32 pb-20">
        <div className="flex items-center justify-center space-x-28">
          <Image src={HeroSection2} alt="SEO" width={400} height={400} />
          <div className="space-y-5">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight">
              Streamline Resource Management. Dive Deeper, Not Wider.
            </h2>
            <p className="font-semibold text-[#3E3D3D]">
              No more endless spreadsheets or lost hours searching. The RRL
              Resource Management System simplifies allocation and tracking,
              letting you focus on what truly matters - delving into the heart
              of your research. Find the resources you need swiftly, and unlock
              a world of discoveries with every search.
            </p>
          </div>
        </div>
      </section>
      <section className="container w-full px-32 pb-20" id="about">
        <div className="flex flex-col items-center justify-center space-y-20">
          <div className="space-y-5">
            <h2 className="scroll-m-20 pb-2 text-center text-3xl font-bold tracking-tight">
              About us.
            </h2>
            <p className="px-40 text-center font-semibold text-[#3E3D3D]">
              Welcome to <span className="text-accent">KnowZone</span>, your
              premier partner in navigating the vast world of research
              resources. Our platform was born out of a desire to simplify the
              research process for students, academics, and professionals alike.
              Situated in Jasaan, Misamis Oriental, we've dedicated ourselves to
              creating an intuitive, accessible resource that bridges the gap
              between complex research materials and those who need them the
              most.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="scroll-m-20 pb-2 text-center text-3xl font-bold tracking-tight">
              The team.
            </h2>
            <div className="flex w-[400px] flex-wrap gap-5 mr-7">
              {profiles.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    index === 0 && "ml-[85px]",
                    "flex flex-col items-center gap-3",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <p className="text-sm font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="h-40 w-full bg-secondary"></footer>
    </main>
  );
}

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden  mx-auto sm:px-10">
      <div className="text-white text-3xl max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}

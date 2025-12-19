"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

function AuthLinks() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const router = useRouter();

  function handleNavLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    router.push(e.currentTarget.href);
    setOpenBurgerMenu(false);
  }

  // PREVENT SCROLLING WHEN BURGER MENU IS OPEN
  useEffect(() => {
    if (openBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openBurgerMenu]);

  return (
    <div className="flex gap-4 dark:text-baseline-200 ">
      {/* MOBILE BURGER MENU */}
      <div className="lg:hidden md:hidden">
        {openBurgerMenu ? (
          <X onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
        ) : (
          <Menu onClick={() => setOpenBurgerMenu(!openBurgerMenu)} />
        )}
      </div>

      {/* DESKTOP NAVBAR */}

      <div className=" gap-8 font-bold md:flex lg:flex hidden dark:text-baseline-100 navigation-links ">
        <>
          <Link href="#about" title="About me">
            <p className="text-sm dark:text-baseline-200 ">About me</p>
          </Link>
          <Link href="#projects" title="Projects">
            <p className="text-sm">Projects</p>
          </Link>
          <Link href="#personal-projects" title="Personal projects">
            <p className="text-sm">Personal projects</p>
          </Link>
          <Link href="#skills" title="Skills">
            <p className="text-sm">Skills</p>
          </Link>
          <Link href="#contact" title="Contact">
            <p className="text-sm">Contact</p>
          </Link>
        </>
      </div>

      {/* //  MOBILE NABAR */}
      <div
        className={cn(
          openBurgerMenu ? "translate-x-0" : "translate-x-full",
          "mt-14  h-screen   w-full z-10 fixed inset-0 text-white font-bold",
          "transition-all duration-200 ease-in-out bg-black"
        )}
      >
        <div className="flex  flex-col z-20  justify-center items-center gap-12  pt-24  pb-12  ">
          <Link href="#about" onClick={handleNavLinkClick} title="About me">
            <p className="text-xl ">About me</p>
          </Link>
          <Link href="#projects" onClick={handleNavLinkClick} title="Projects">
            <p className="text-xl">My projects</p>
          </Link>
          <Link
            href="#personal-projects"
            onClick={handleNavLinkClick}
            title="Personal projects"
          >
            <p className="text-xl">Personal projects</p>
          </Link>
          <Link href="#skills" onClick={handleNavLinkClick} title="Skills">
            <p className="text-xl">Skills</p>
          </Link>
          <Link href="#contact" onClick={handleNavLinkClick} title="Contact">
            <p className="text-xl">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthLinks;

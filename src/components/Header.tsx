import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./ui/button";
import { AtSign } from "lucide-react";
import { ModeDropdown } from "./ModeDropdown";
import { BsWhatsapp } from "react-icons/bs";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 bg-background px-16 h-16 w-full flex items-center justify-between">
      <div id="pages" className="hidden md:block flex-1">
        <ul className="flex items-center gap-8 text-muted-foreground">
          <li>
            <Link href="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="blogs">Blogs</Link>
          </li>
          <li>
            <Link href="career">Career</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Link href="/">
          <h1 className="font-bold text-xl">
            <span className="text-primary">yo</span>
            <span className="">El3imari</span>
          </h1>
        </Link>
      </div>

      <div id="contact" className="hidden md:block flex-1">
        <ul className="w-full flex items-center justify-end gap-8">
          <li>
            <a
              href="https://linkedin.com/in/yoel3imari"
              className=" text-muted-foreground"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yoel3imari"
              target="_blank"
              className=" text-muted-foreground"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:youssef.elaimari@gmail.com"
              className=" text-muted-foreground"
              target="_blank"
            >
              <AtSign size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+212654194450"
              className=" text-muted-foreground"
              target="_blank"
            >
              <BsWhatsapp size={20} />
            </a>
          </li>
          <li>
            <ModeDropdown />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

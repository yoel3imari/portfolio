import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "./ui/button";
import { AtSign } from "lucide-react";
import { ModeDropdown } from "./ModeDropdown";

function Header() {
  return (
    <header className="px-16 h-16 w-full flex items-center justify-between">
      <div id="pages" className="flex-1">
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

      <div className="">
        <Link href="/">
          <h1 className="font-bold text-xl">
            <span className="text-primary">yo</span>
            <span className="">El3imari</span>
          </h1>
        </Link>
      </div>

      <div id="contact" className="flex-1">
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
            <Button variant="outline" className="w-16 h-8 border-2 rounded-full">CV</Button>
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

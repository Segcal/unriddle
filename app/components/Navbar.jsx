'use client'

import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

export default function Navbar() {
    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image
          src="https://res.cloudinary.com/dtrqikle5/image/upload/v1700008521/1214-removebg-preview_zznrtb.png"
          alt="logo"
          width={125}
          height={50}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">skill</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                project
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className={nav ? "md:hidden fixed w-full h-screen left-0 top-0 bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="https://res.cloudinary.com/dtrqikle5/image/upload/v1700008521/1214-removebg-preview_zznrtb.png"
                alt="logo"
                width={87}
                height={35}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/*  */}
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-mono">
                Let's build somthing unique together
              </p>
            </div>
          </div>
          {/*  */}

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">about</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">skill</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">project</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase mb-6 tracking-widest text-[#5651e5] font-mono">
                let's connect.
              </p>
              <div className="flex items-center justify-between w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500 ease-in">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500 ease-in">
                  <FaFacebook />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500 ease-in">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-500 ease-in">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

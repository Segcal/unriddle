import Link from 'next/link'
import Signup from './Signup';

export default function Navbar() {
  return (
    <>
      <nav className="lg:px-44 sm:px-8 px-8 flex justify-between items-center fixed w-full top-0 md:w-full bg-gray-100 py-4 bg-opacity-80 z-10">
        <div>
          <Link href="/" className="text-xl font-bold">
            Unriddle
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/pricing"
            className="hover:bg-gray-400 hover:bg-opacity-40 duration-200 ease-in-out px-2 py-1 rounded-md capitalize"
          >
            pricing
          </Link>
          <Link
            href="https://unriddle.notion.site/Join-Unriddle-s-Affiliate-Program-dacd4df4db0e486c888214055dbce66d"
            className="hover:bg-gray-400 hidden md:block hover:bg-opacity-40 duration-200 ease-in-out px-2 py-1 rounded-md capitalize"
          >
            Affiliate
          </Link>
          <Link
            href="/"
            className="hover:bg-gray-400 hidden md:block hover:bg-opacity-40 duration-200 ease-in-out px-2 py-1 rounded-md capitalize"
          >
            <Signup />
          </Link>
          <Link
            href="/"
            className="bg-black text-white duration-200 ease-in-out px-3 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500 bg-opacity-25 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base ">
      <div className="container mx-auto flex justify-between">
        <div className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
          <Link href="/">E</Link>
        </div>

        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Perfil</Link>
              </li>
            </>
          ) : (
            <>
 
 <li className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

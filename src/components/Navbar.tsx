import Link from "next/link";
// import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-500 bg-opacity-25 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base ">
        <Link href="/" passHref>
          <div className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
            E
          </div>
        </Link>
      <div className="flex items-center space-x-4 xl:pr-5 md:pr-1">
        <Link href="/registro" passHref>
          <div className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
            Registro
          </div>
        </Link>
        <Link href="/iniciarsesion" passHref>
          <div className="bg-opacity-25 text-white rounded-full py-2 px-4 border-2 hover:bg-white hover:text-cyan-950  hover:cursor-pointer">
            Iniciar Sesión
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

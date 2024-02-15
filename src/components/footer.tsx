import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-8 bg-glassmorphism border-t border-white">
      <div className="wrapper">
        <div className="absolute bottom-0 right-0 w-52 h-80 bg-[#7c39a3] blur-[175px]"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:justify-between">
          <div className="flex gap-x-4 text-white">
            <Link href={""}>Articles</Link>
            <Link href={""}>Projects</Link>
            <Link href={""}>Contact</Link>
            <Link href={""}>About</Link>
          </div>
          <p className="text-[#c7c7c7]">
            © 2024 Daffa Azhar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

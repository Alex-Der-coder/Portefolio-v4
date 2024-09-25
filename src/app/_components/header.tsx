import Link from "next/link";

const Header = () => {
  return (
      <h2 className="dark:text-foreground text-orange-300 text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center ">
        <Link href="/" className="hover:underline z-10">
          Blog
        </Link>
        .
      </h2>
  );
};

export default Header;

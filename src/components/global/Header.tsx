import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@/components/global/icons";

const Header: React.FC = () => {
  return (
    <header className="bg-[url(/img/lines-vector.svg)] bg-center bg-cover bg-no-repeat h-40 w-full grid place-content-center lg:mb-[5.68rem] mb-[4.625rem]">
      <div className="flex border border-border-color rounded-full bg-[#fcfcfd] divide-x divide-border-color]">
        <Link href="/" passHref>
          <button
            type="button"
            className="outline-none focus:outline-none lg:px-7 lg:py-[1.563rem] px-6 py-4"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={38}
              height={38}
              className="lg:w-[2.375rem] w-6"
            />
          </button>
        </Link>
        <button
          type="button"
          className="outline-none focus:outline-none lg:px-7 lg:py-[1.563rem] px-6 py-4 text-primary"
        >
          <MenuIcon classnames="lg:w-[2.375rem] w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;

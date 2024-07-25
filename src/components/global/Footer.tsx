import {
  FacebookIcon,
  GoToLinkIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/global/icons";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="lg:py-[5.375rem] py-8 bg-primary">
      <div className="container mx-auto px-4">
        <div className="bg-white md:pt-20 pt-4 md:rounded-[2.25rem] rounded-2xl">
          <div className="flex flex-wrap md:gap-16 gap-6">
            <div className="w-full flex md:flex-nowrap flex-wrap justify-between items-start md:gap-0 gap-16 lg:px-24 md:px-14 px-6">
              <div className="md:w-auto w-full md:text-left text-center">
                <h3 className="font-semibold text-xl text-primary leading-8">
                  Say Hello!
                </h3>
                <p className="text-xl leading-8 text-primary-faded md:block hidden">
                  opencoregroup@gmail.com
                </p>
                <div className="md:hidden py-2 px-4 rounded-lg border border-[#eaecf0] flex justify-center">
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-6 text-primary-faded">
                      opencoregroup@gmail.com
                    </span>
                    <GoToLinkIcon />
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-6">
                  <div className="w-10 h-10 rounded bg-[#f2f4f7] grid place-content-center">
                    <a href="#" className="text-primary">
                      <InstagramIcon />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded bg-[#f2f4f7] grid place-content-center">
                    <a href="#" className="text-primary">
                      <FacebookIcon />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded bg-[#f2f4f7] grid place-content-center">
                    <a href="#" className="text-primary">
                      <TwitterIcon />
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded bg-[#f2f4f7] grid place-content-center">
                    <a href="#" className="text-primary">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-[17rem] w-full grid grid-cols-2 gap-x-16 gap-y-3.5 md:py-0 py-8 md:border-y-0 border-y border-y-[#f2f4f7]">
                <div>
                  <Link href="/">
                    <span className="text-xl leading-7 text-[#475467]">
                      Home
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <span className="text-xl leading-7 text-[#475467]">
                      Services
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <span className="text-xl leading-7 text-[#475467]">
                      About us
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <span className="text-xl leading-7 text-[#475467]">
                      Contact us
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <span className="text-xl leading-7 text-[#475467]">
                      Work
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex md:flex-nowrap flex-wrap justify-between items-center gap-2 md:mb-[6.75rem] mb-6 lg:px-24 md:px-14 px-6">
              <div className="md:w-auto md:text-left w-full text-center">
                <p className="md:text-xl md:leading-8 text-primary-faded text-sm leading-5">
                  Toronto, ON Canada
                </p>
              </div>
              <div className="md:w-auto md:text-left w-full text-center">
                <p className="md:text-xl md:leading-8 text-primary-faded text-sm leading-5">
                  OpenCore. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center sm:-mb-8 -mb-4">
              <Image
                src="/img/footer-logo.svg"
                alt="footer logo"
                width={877}
                height={146}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

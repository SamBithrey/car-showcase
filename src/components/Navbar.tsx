import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex-between padding">
        <Link href="/" className="flex-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
            <Link href="/">
                <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18} className="object-contain" />
            </Link>

            <CustomButton 
                title="Sign in" 
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" 
                btnType="button"
            />
        </nav>
    </header>
  )
}

export default Navbar
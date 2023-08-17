import Image from 'next/image';
import { logo } from '../../public/index';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className="max-w-containerSmall  mx-auto py-2">
        <figure className="flex  items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="brand-logo"
              quality={80}
              placeholder="blur"
              width={45}
              height={45}
              className=" object-cover"
            />
          </Link>
          <figcaption className="ps-2 text-textDark">
            Suvaye Dictionary
          </figcaption>
        </figure>
      </header>
    </>
  );
};

export default Navbar;

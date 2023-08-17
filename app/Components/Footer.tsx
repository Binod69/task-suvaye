import Image from 'next/image';
import { footer } from '../../public';
import twitter from '../../public/assets/Vector.svg';

const Footer = () => {
  return (
    <>
      <footer className="con hidden lg:block">
        <div className="conwrap ">
          <div className="cons">
            <figure className="figure">
              <Image
                src={footer}
                alt="footer-logo"
                className="img"
                width={250}
                height={250}
              />
            </figure>
            <article className="flex items-center justify-center ">
              <div className="imgbor mt-12 me-3">
                <Image className="ms-5 mt-3" src={twitter} alt="twitter-logo" />
              </div>
              <h3 className="title">suvaye.official</h3>
            </article>
          </div>
          <p className="sub">Follow us on twitter for latest updates</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-bl from-sky-400 to-sky-900 rounded-t-[20px]  pt-72 ">
      <div>
        <ParallaxLayer offset={0.5} speed={0.25}>
          <div className="flex justify-center">
            <h1 className="font-sans text-[100px] font-bold  mt-24 text-white">Contact Me</h1>
          </div>
        </ParallaxLayer>

        <div>
          <ParallaxLayer offset={0.5} speed={0.1}>
            <div data-aos="fade-left" className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-4 mx-auto  w-[800px] ">
              <div>
                <Link to={'https://wa.me/6285236446961'}>
                  <FaWhatsapp className="mx-auto text-[90px] text-white transform hover:scale-150 transition-all duration-300 cursor-pointer active:rotate-45" />
                </Link>
              </div>
              <div className=" ">
                <Link to="https://www.instagram.com/firos_malik">
                  <FaInstagram className="mx-auto text-[90px] text-white transform hover:scale-150 transition-all duration-300 cursor-pointer active:rotate-45" />
                </Link>
              </div>
              <div>
                <Link to={'https://web.facebook.com/profile.php?id=100008615866247&_rdc=1&_rdr'}>
                  <FaFacebook className="mx-auto text-[90px] text-white transform hover:scale-150 transition-all duration-300 cursor-pointer active:rotate-45" />
                </Link>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={0.1}>
            <div className="mt-40 mx-auto text-white text-4xl justify-center flex ">Terima Kasih sudah berkunjung ❤</div>
          </ParallaxLayer>
        </div>
      </div>
    </div>
  );
};

export default Contact;

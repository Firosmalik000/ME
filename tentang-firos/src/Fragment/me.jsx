import React from 'react';
import profile from '../public/2.jpg';

const AboutIntro = () => {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-1">
      <div className="mx-auto flex  w-[600px] items-center">
        <div data-aos="fade-right">
          <p className="text-xl mb-3 font-serif ">Nama : Firos Malik Abdillah</p>
          <p className="text-xl mb-3 font-serif ">TTL : Probolinggo, 4 Maret 2000</p>
          <p className="text-xl mb-3 font-serif ">Alamat : Perum Leces Indah, Blok A2/17 kec. Tegalsiwalan kab. Probolinggo</p>
        </div>
      </div>
      <div data-aos="fade-up">
        <img src={profile} className="w-[550px] mx-auto items-center flex rounded-xl" />
      </div>
    </div>
  );
};

export default AboutIntro;

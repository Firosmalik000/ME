import React, { useState } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import AboutIntro from '../Fragment/me';
import CardRiwayat from '../component/cardSekolah';
import CardKerja from '../component/cardKerja';

const About = () => {
  const [type, setType] = useState('intro');
  return (
    <div className="h-screen w-screen rounded-b-2xl ">
      <ParallaxLayer offset={0.2} speed={0.25}>
        <p className="text-3xl text-center font-serif mt-14 mb-10">About Me</p>
      </ParallaxLayer>

      <ParallaxLayer offset={0.3} speed={0.25}>
        <div className="grid grid-cols-4 gap-x-4 w-[700px] mx-auto mb-10">
          <div>
            <div className="bg-blue-500 text-center rounded-xl btn text-white hover:bg-blue-700 transition duration-150 shadow-xl py-2 shadow-slate-300 cursor-pointer" onClick={() => setType('intro')}>
              Me
            </div>
          </div>

          <div>
            <div className="bg-blue-500 text-center rounded-xl btn text-white hover:bg-blue-700 transition duration-150 shadow-xl py-2 shadow-slate-300 cursor-pointer" onClick={() => setType('sekolah')}>
              Riwayat Pendidikan
            </div>
          </div>
          <div>
            <div className="bg-blue-500 text-center rounded-xl btn text-white hover:bg-blue-700 transition duration-150 shadow-xl py-2 shadow-slate-300 cursor-pointer" onClick={() => setType('kerja')}>
              Pengalaman Kerja
            </div>
          </div>
          <div>
            <div className="bg-blue-500 text-center rounded-xl btn text-white hover:bg-blue-700 transition duration-150 shadow-xl py-2 shadow-slate-300 cursor-pointer">Skill</div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Efek paralaks pada komponen lainnya */}

      <ParallaxLayer offset={0.3} speed={0.15}>
        {(type === 'intro' && <AboutIntro />) || (type === 'sekolah' && <CardRiwayat />) || (type === 'kerja' && <CardKerja />)}
      </ParallaxLayer>
    </div>
  );
};

export default About;

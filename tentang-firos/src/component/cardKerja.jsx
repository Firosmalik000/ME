import React, { useEffect } from 'react';
import empty from '../public/icon.gif';
import ppih from '../public/ppih.jpg';
import Graha from '../public/graha.png';
import { FaMapMarkerAlt } from 'react-icons/fa';


const CardKerja = () => {

  return (
    <section>
      <h1 className="text-center text-2xl font-bold mb-10">Pengalaman Kerja</h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-1">
        {/* Pengalaman Kerja 1 */}
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto bg-green-600 text-white flex items-center rounded-xl mb-3" data-aos="fade-right">
          <div className="grid grid-cols-2 gap-x-2">
            <div className="p-3 mx-auto flex items-center">
              <img src={Graha} className="h-full w-full rounded-xl" alt="Graha Jatim" />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">Graha Jatim Hotel Cairo</p>
                <p className="mt-3 flex">
                  <FaMapMarkerAlt className="text-4xl" /> 29X7+654, Al Asherah, Nasr City, Cairo Governorate 4442410, Egypt
                </p>
                <div className="mt-3">
                  <div>sekretaris (2019-2020)</div>
                  <div>sekretaris (2020-2021)</div>
                  <div>Direktur (2020-2022)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pengalaman Kerja 2 */}
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto flex items-center rounded-xl bg-yellow-500 text-white mb-3 " data-aos="fade-up">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="p-3 mx-auto">
              <img src={empty} className="h-[80%] " alt="Warung Majlis Ayam Cairo" />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">Warung Majlis Ayam Cairo</p>
                <p className="mt-3 flex ">
                  <FaMapMarkerAlt className="text-4xl" /> : (Dihapus)
                </p>
                <p className="mt-3"> Koki (2020-2021)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pengalaman Kerja 3 */}
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto flex items-center rounded-xl p-3 mb-3 " data-aos="fade-left">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="p-3 mx-auto">
              <img src={ppih} className="h-[80%] " alt="PPIH (Panitia Pelaksana Ibadah Haji)" />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">PPIH (Panitia Penyelenggara Ibadah Haji)</p>
                <p className="mt-3 flex">
                  <FaMapMarkerAlt className="text-4xl" /> 9VQF+96P, An Naseem, Makkah 24242, Saudi Arabia
                </p>
                <p className="mt-3"> Pengendali Transportasi (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardKerja;

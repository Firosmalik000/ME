import React, { useEffect } from 'react';
import sd from '../public/sd.jpg';
import empty from '../public/icon.gif';
import 'animate.css';

const CardRiwayat = () => {
  useEffect(() => {
    const fadeup = document.querySelectorAll('.animate__fadeInUp');
    const fadeDownElement = document.querySelector('.animate__fadeInDown');

    // Tambahkan class animate__animated ke elemen dengan efek fadeInDown
    if (fadeDownElement) {
      fadeDownElement.classList.add('animate__animated');
    }

    // Tambahkan class animate__animated ke semua elemen dengan efek fadeInUp
    fadeup.forEach((element) => {
      element.classList.add('animate__animated');
    });
  }, []);
  return (
    <div>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 ">
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto flex items-center rounded-xl " data-aos="fade-right">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="p-3 mx-auto flex items-center">
              <img src={sd} className="h-full w-full" />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">SDIT Al-amri</p>
                <p className="mt-3">Alamat: Plerenan, Sumberkedawung, Leces, Probolinggo Regency, East Java 67273</p>
                <p className="mt-3"> Tahun : 2006-2012</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto flex items-center rounded-xl animate__fadeInDown delay-75" data-aos="fade-up-left">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="p-3 mx-auto">
              <img src={empty} className="h-[80%] " />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">SMPIT Al-amri</p>
                <p className="mt-3">Alamat: Plerenan, Sumberkedawung, Leces, Probolinggo Regency, East Java 67273</p>
                <p className="mt-3"> Tahun : 2012-2015</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-[80%] justify-center shadow-xl mx-auto flex items-center rounded-xl p-3 " data-aos="fade-up">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="p-3 mx-auto">
              <img src={empty} className="h-[80%] " />
            </div>
            <div className="items-center flex">
              <div>
                <p className="text-3xl ">SMA Bina Insan Mandiri</p>
                <p className="mt-3">Alamat: 93Q5+CW7, Kompleks Pondok Pesantren Al-Ihsan, Dsn. Baron Timur, Ds. Baron, Kec. Baron, Lobesar, Baron, Nganjuk, Kabupaten Nganjuk, Jawa Timur 64394</p>
                <p className="mt-3"> Tahun : 2015-2048</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRiwayat;

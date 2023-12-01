import React, { useEffect } from 'react';
import me from '../public/1.jpg';
import { ParallaxLayer } from '@react-spring/parallax';
import 'animate.css';

const Jumbotron = () => {
  useEffect(() => {
    const fadeup = document.querySelectorAll('.animate__fadeInUp');
    document.querySelector('.animate__fadeInDown').classList.add('animate__animated');

    fadeup.forEach((element) => {
      element.classList.add('animate__animated');
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="bg-gradient-to-tr from-sky-400 to-sky-900 md:h-full rounded-b-[20px] shadow-xl">
        <ParallaxLayer offset={0} speed={0.75}>
          <div className="h-full items-center mx-auto grid xl:grid-cols-2 md:grid-cols-1">
            <div className="justify-center flex mx-auto">
              <img src={me} className="w-[500px] rounded-[30px] animate__fadeInUp delay-1s" alt="Me" />
            </div>

            <div className="mx-auto w-[500px]">
              <p className="text-white text-4xl mb-5 text-center animate__fadeInDown delay-1s">Hallo, Selamat Datang!!</p>
              <p className="text-white text-justify text-xl animate__fadeInUp delay-2s indent-8">Perkenalkan nama saya Firos Malik Abdillah. saya adalah junior programer yang baru saja belajar bahasa pemrograman khususnya Javascript.</p>
              <p className="text-white text-justify text-xl animate__fadeInUp delay-3s indent-8">Website ini, saya buat dengan tujuan sebagai biodata saya dalam bentuk digital. Maka dari itu, Yuk kita kenalan :D</p>
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </div>
  );
};

export default Jumbotron;

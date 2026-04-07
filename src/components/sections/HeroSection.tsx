'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { useRef, useState } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Mute / Unmute Button — top-left */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Ovozni yoqish' : "Ovozni o'chirish"}
        className="
          absolute bottom-4 left-4 z-30
          flex items-center gap-2
          bg-white/10 hover:bg-white/20
          backdrop-blur-sm
          border border-white/20
          text-white text-sm font-medium
          px-3 py-2 rounded-full
          transition-all duration-300
          sm:bottom-6 sm:left-6
        "
      >
        {isMuted ? (
          <HiVolumeOff className="w-5 h-5" />
        ) : (
          <HiVolumeUp className="w-5 h-5" />
        )}
      </button>

      {/* Content */}
      <div className="container-custom relative z-20 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            SAN&apos;ATCORE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Креативное агентство с упором на видеопродакшн.
          </p>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Мы создаем визуальные истории, которые формируют восприятие брендов, людей и идей.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="btn-primary"
            >
              Посмотреть проекты
              <FiArrowRight />
            </Link>
            <Link
              href="/#contact-form"
              className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-colors hover:bg-black hover:text-white"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

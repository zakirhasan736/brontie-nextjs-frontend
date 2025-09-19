import Image from 'next/image';
import React from 'react';
// import LoadingModal from '@/icons/loadingModal';

export default function Loading() {
  return (
    <div className="loading-container fixed top-0 left-0 w-full h-full px-5 bg-mono-0 z-[999999]">
      <div className="loading-content w-[100vw] h-full flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/Coffee love.gif"
          alt="loading image"
          width={300}
          height={300}
        />
        <p className="body-small text-mono-100"> Wird geladen...,</p>
      </div>
    </div>
  );
}

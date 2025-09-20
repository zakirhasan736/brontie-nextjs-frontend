import AvailableGifts from '@/components/pages/how-it-works/AvailableGifts';
import GiftCategorySection from '@/components/pages/how-it-works/GiftCategorySection';
import HowItWorksBanner from '@/components/pages/how-it-works/HowItWorksBanner';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HowItWorksPage = () => {
  return (
    <div className="main-wrapper-how-it-works-page">
      <div className="how-it-work-top-box relative">
       <HowItWorksBanner />
        <div className="blobs-wrapper-box relative">
          <GiftCategorySection />
          <AvailableGifts />
        </div>
        <div className="custom-container">
          {/* =================== */}
          <div className="site-cts-wrapper-area mt-16 md:mt-20 xl:mt-[129px] -mb-[180px] md:-mb-[160px] lg:-mb-[220px] xl:-mb-[318px] relative z-[999] grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-20 pt-[30px] md:pt-[47px] pr-[11px] md:pr-10 lg:pr-[56px] pb-[27px] md:pb-[34px] pl-0 md:pl-14 lg:pl-[77px] rounded-[22px]">
            <div className="site-cta-left-cont flex flex-col justify-center items-start pl-[26px] md:pl-0">
              <h2 className="title text-left text-[34px] lg:text-[46px] xl:text-[60px] text-mono-0 font-normal font-primary leading-[120%] max-w-[553px]">
                “Brighten someone’s day. Gift a Brontie today.”
              </h2>
              <div className="button-item relative mt-8 md:mt-9 lg:mt-[50px]">
                <Link
                  className="bg-secondary-100 hover:opacity-85 flex relative z-[9] h-[49px] md:h-[60px] lg:h-[79px] items-center max-w-[305px] w-full justify-center py-4 md:py-5 xl:py-[27px] pl-[35px] pr-[19px] rounded-[11px] text-[12px] md:text-[18px] lg:text-[22px] text-center font-secondary font-normal leading-[1]"
                  href="/how-it-works"
                >
                  Gift a Brontie today →
                </Link>
                <Image
                  src="/images/icons/shadow-elisp.svg"
                  width={233}
                  height={41}
                  alt="angle arrow model"
                  className="absolute -bottom-[45px] -left-[26px] right-0 mx-auto"
                />
              </div>
            </div>
            <div className="site-cta-right-cont ">
              <Image
                src="/images/cta-section-model.png"
                alt="cta model image"
                width={626}
                height={480}
              />
            </div>
          </div>
          {/* ====================== */}
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage

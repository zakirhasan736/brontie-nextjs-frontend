import AvailableGifts from '@/components/pages/how-it-works/AvailableGifts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HowItWorksPage = () => {
  return (
    <div className="main-wrapper-how-it-works-page">
      <div className="how-it-work-top-box relative">
        <section className="how-it-works-banner pt-[145px] md:pt-[170px]  pb-16 md:pb-24 lg:pb-[158px]">
          <div className="custom-container">
            <div className="how-it-works-cont relative z-[99]">
              <h1 className="banner-title text-[49px] md:text-[52px] lg:text-[65px] xl:text-[80px] text-center text-mono-0 font-normal font-primary leading-[100%]">
                How to Send a{' '}
                <span className="text-img-box relative items-center">
                  <span className="!text-mono-100">Brontie Gift</span>{' '}
                </span>
              </h1>
              <p className="text-[16px] md:text-[18px] lg:text-[22px] xl:text-[26px] text-center font-normal font-secondary text-mono-0 mt-[6px] leading-130%]">
                {' '}
                A little surprise goes a long way!!
              </p>
            </div>

            <div className="how-it-works-wrapper mt-[74px] flex md:flex-row flex-col items-center  gap-[110px] md:gap-6 justify-between  relative z-[9999]">
              <div className="how-its-work-card-item relative flex flex-col justify-center max-w-[345px] w-full">
                <div className="img-box relative flex justify-center max-w-[130px] w-full mx-auto">
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-0 w-7 md:w-9 h-7 md:h-9 xl:w-[46.64px] absolute -top-5 left-7 md:-top-5 md:-left-1 xl:h-[46.64px] rounded-full bg-primary-100 items-center flex justify-center">
                    1
                  </span>
                  <Image
                    src="/images/icons/coffee-with-hand.svg"
                    alt="icons card items"
                    width={133}
                    height={133}
                    className="h-[90px] lg:h-[133px]"
                  />
                </div>
                <p className="desc mt-6 md:mt-9 lg:mt-[42px] max-w-[211px] mx-auto md:max-w-full text-center text-[14px] md:text-[20px] xl:text-[26px] leading-[130%] font-secondary font-normal">
                  {' '}
                  Pick a coffee or treat from a local café.
                </p>
                <Image
                  src="/images/icons/srrow-right-spring.svg"
                  width={127}
                  height={70}
                  className="hidden md:block absolute top-2 -right-[50px] xl:-right-[112px] w-[90px] xl:w-[127px]"
                  alt="arrow spring image"
                />
                <Image
                  src="/images/icons/arrouw-down-spring.svg"
                  width={29}
                  height={53}
                  className="absolute md:hidden block -bottom-20 right-0 left-0 mx-auto"
                  alt="arrow spring image"
                />
              </div>
              <div className="how-its-work-card-item relative flex flex-col justify-center max-w-[388px] w-full">
                <div className="img-box relative flex justify-center max-w-[130px] w-full mx-auto">
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-0 w-7 md:w-9 h-7 md:h-9 lg:w-[46.64px] absolute -top-5 left-3 md:-top-7 md:-left-4 lg:h-[46.64px] rounded-full bg-primary-100 items-center flex justify-center">
                    2
                  </span>
                  <Image
                    src="/images/icons/coffe-link-share.svg"
                    alt="icons card items"
                    width={126}
                    height={126}
                    className="h-[70px] lg:h-[126px]"
                  />
                </div>
                <p className="desc mt-6 md:mt-9 lg:mt-[42px] max-w-[218px] mx-auto md:max-w-full text-center text-[14px] md:text-[20px] xl:text-[26px] leading-[130%] font-secondary font-normal">
                  {' '}
                  Send the link instantly to a friend or family member.
                </p>
                <Image
                  src="/images/icons/srrow-right-spring.svg"
                  width={127}
                  height={70}
                  className="hidden md:block absolute top-2 -right-[50px] xl:-right-[112px] w-[90px] xl:w-[127px]"
                  alt="arrow spring image"
                />
                <Image
                  src="/images/icons/arrouw-down-spring.svg"
                  width={29}
                  height={53}
                  className="absolute md:hidden block -bottom-20 right-0 left-0 mx-auto"
                  alt="arrow spring image"
                />
              </div>
              <div className="how-its-work-card-item relative flex flex-col justify-center max-w-[376px] w-full">
                <div className="img-box relative flex justify-center max-w-[130px] w-full mx-auto">
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-0 w-7 md:w-9 h-7 md:h-9 lg:w-[46.64px] absolute -top-5 left-3 md:-top-8 md:-left-2 lg:h-[46.64px] rounded-full bg-primary-100 items-center flex justify-center">
                    3
                  </span>
                  <Image
                    src="/images/icons/ready-coffee-for recever.svg"
                    alt="icons card items"
                    width={139}
                    height={102}
                    className="h-[70px] lg:h-[102px]"
                  />
                </div>
                <p className="desc mt-6 md:mt-9 lg:mt-[42px] max-w-[185px] mx-auto md:max-w-full text-center text-[14px] md:text-[20px] xl:text-[26px] leading-[130%] font-secondary font-normal">
                  {' '}
                  They redeem it in-store, and enjoy their treat.
                </p>
                <Image
                  src="/images/icons/srrow-right-spring.svg"
                  width={127}
                  height={70}
                  className="hidden md:hidden absolute top-2 -right-[50px] lg:-right-[112px] w-[90px] xl:w-[127px]"
                  alt="arrow spring image"
                />
                <Image
                  src="/images/icons/arrouw-down-spring.svg"
                  width={29}
                  height={53}
                  className="absolute md:hidden hidden -bottom-20 right-0 left-0 mx-auto"
                  alt="arrow spring image"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="blobs-wrapper-box relative">
          <section className="categories-section relative pt-16 md:pt-20 lg:pt-[146px]">
            <div className="custom-container">
              <div className="section-content relative z-[99] mb-[33px]">
                <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-center text-mono-100 font-normal font-primary leading-[100%]">
                  Discover Gifts by Category
                </h2>
              </div>
              <div className="categories-section-wrapper max-w-[1169px] mx-auto relative z-[99]">
                <ul className="available-category-lists flex flex-col gap-5 md:gap-6 lg:gap-[29px]">
                  <li className="category-list-item relative hover:-top-[8px] top-0 transition-all ease-in-out duration-500 ">
                    <Link
                      href="/"
                      className="flex items-center gap-5 justify-between border-[3px] border-[#6A9D9E] rounded-[12px] py-[10px] pl-[10px] pr-[17px] bg-mono-0"
                    >
                      <div className="flex items-center gap-2 md:gap-8 lg:gap-[29px]">
                        {' '}
                        <Image
                          width={95}
                          height={95}
                          src="/images/category-menu-image1.png"
                          alt="menu item image"
                          className="w-12 md:w-16 lg:w-[95px]"
                        />
                        <p className="text-[19px] md:text[22px] lg:text-[26px] xl:text-[32px] text-left text-mono-100 font-primary font-normal leading-[100%]">
                          Cafés & Treats{'  '}
                          <span className="text-[11px] block lg:inline-block mt-1 md:mt-0 md:text[16px] lg:text-[18px] xl:text-[23px] text-left text-mono-100 font-secondary font-normal leading-[100%]">
                            ( Coffee, pastries, and delicious treats )
                          </span>
                        </p>
                      </div>
                      <Image
                        src="/images/icons/link-arrow.svg"
                        alt="icons link for category menu"
                        className="w-10 md:w-14 lg:w-[64px] rounded-full"
                        width={64}
                        height={64}
                      />
                    </Link>
                  </li>
                  <li className="category-list-item relative  top-0 transition-all ease-in-out duration-500 ">
                    <Link
                      href="/"
                      className="flex cursor-not-allowed items-center gap-5 justify-between border-[3px] border-[#6A9D9E] rounded-[12px] py-[10px] pl-[10px] pr-[17px] bg-mono-0 opacity-[33%]"
                    >
                      <div className="flex items-center gap-2 md:gap-8 lg:gap-[29px]">
                        {' '}
                        <Image
                          width={95}
                          height={95}
                          src="/images/category-menu-image2.png"
                          alt="menu item image"
                          className="w-12 md:w-16 lg:w-[95px]"
                        />
                        <p className="text-[19px] md:text[22px] lg:text-[26px] xl:text-[32px] text-left text-mono-100 font-primary font-normal leading-[100%]">
                          Ticket & Passes{'  '}
                          {/* <span className="text-[11px] block lg:inline-block mt-1 md:mt-0 md:text[16px] lg:text-[18px] xl:text-[23px] text-left text-mono-100 font-secondary font-normal leading-[100%]">
                            ( Coffee, pastries, and delicious treats )
                          </span> */}
                        </p>
                      </div>
                      <Image
                        src="/images/icons/link-arrow.svg"
                        alt="icons link for category menu"
                        className="w-10 md:w-14 lg:w-[64px] rounded-full"
                        width={64}
                        height={64}
                      />
                    </Link>
                    <button
                      type="button"
                      className="rounded-full text-[12px] md:text[16px] lg:text-[18px] xl:text-[23px] absolute top-0 bottom-0 my-auto right-16 md:right-[198px] font-normal font-secondary text-center text-mono-100 lg:h-[60px] max-w-[68px] h-[25px] md:max-w-[120px] md:h-[48px] lg:max-w-[190px] w-full flex items-center justify-center px-[30px] py-2 bg-[#F4C24D80] border border-[#F4C24D80]"
                    >
                      Upcoming{' '}
                    </button>
                  </li>
                  <li className="category-list-item relative  top-0 transition-all ease-in-out duration-500 ">
                    <Link
                      href="/"
                      className="flex items-center  cursor-not-allowed gap-5 justify-between border-[3px] border-[#6A9D9E] rounded-[12px] py-[10px] pl-[10px] pr-[17px] bg-mono-0 opacity-[33%]"
                    >
                      <div className="flex items-center gap-2 md:gap-8 lg:gap-[29px]">
                        {' '}
                        <Image
                          width={95}
                          height={95}
                          src="/images/category-menu-image3.png"
                          alt="menu item image"
                          className="w-12 md:w-16 lg:w-[95px]"
                        />
                        <p className="text-[19px] md:text[22px] lg:text-[26px] xl:text-[32px] text-left text-mono-100 font-primary font-normal leading-[100%]">
                          Gifts & Hampers{'  '}
                          {/* <span className="text-[11px] block lg:inline-block mt-1 md:mt-0 md:text[16px] lg:text-[18px] xl:text-[23px] text-left text-mono-100 font-secondary font-normal leading-[100%]">
                            ( Coffee, pastries, and delicious treats )
                          </span> */}
                        </p>
                      </div>
                      <Image
                        src="/images/icons/link-arrow.svg"
                        alt="icons link for category menu"
                        className="w-10 md:w-14 lg:w-[64px] rounded-full"
                        width={64}
                        height={64}
                      />
                    </Link>
                    <button
                      type="button"
                      className="rounded-full text-[12px] md:text[16px] lg:text-[18px] xl:text-[23px] absolute top-0 bottom-0 my-auto right-16 md:right-[198px] font-normal font-secondary text-center text-mono-100 lg:h-[60px] max-w-[68px] h-[25px] md:max-w-[120px] md:h-[48px] lg:max-w-[190px] w-full flex items-center justify-center px-[30px] py-2 bg-[#F4C24D80] border border-[#F4C24D80]"
                    >
                      Upcoming{' '}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
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

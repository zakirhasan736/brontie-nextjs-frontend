import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HowItWorksPage = () => {
  return (
    <div className="main-wrapper-how-it-works-page">
      <div className="how-it-work-top-box relative">
        <section className="how-it-works-banner pt-[157px] md:pt-[231px]  pb-16 md:pb-24 lg:pb-[158px]">
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
          <section className="available-gifts-section">
            <div className="available-gift-wrapper relative  pt-16 lg:pt-20 xl:pt-[130px] pb-[85px]">
              <div className="custom-container">
                <div className="section-cont relative z-[99] mb-5">
                  <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-center text-mono-100 font-normal font-primary leading-[100%]">
                    Available Gifts
                  </h2>
                </div>
                <div className="available-gifts--box relative z-[99]">
                  <ul className="available-category-filter-tabs mb-8 md:mb-8 lg:mb-8 xl:mb-[46px] flex items-center gap-0 justify-center  max-w-[550px] mx-auto ">
                    <li className="filter-tabs-items border-b-[3px] pb-[12px] pt-[12px] cursor-pointer hover:text-primary-100 hover:border-b-primary-100 transition-all ease-in drop-shadow-blue-600 border-b-primary-100 pl-[68px] pr-[50px] text-[16px] lg:text-[19px] text-center text-primary-100 font-normal font-secondary">
                      All Items
                    </li>
                    <li className="filter-tabs-items text-[16px] lg:text-[19px] px-[17px] pb-[12px] pt-[12px] cursor-pointer hover:text-primary-100 hover:border-b-primary-100 transition-all ease-in drop-shadow-blue-600 text-center border-b-[3px] border-b-[#F4C26F] text-mono-100 font-normal font-secondary">
                      Willow & Wild
                    </li>
                    <li className="filter-tabs-items  pb-[12px] pt-[12px] cursor-pointer hover:text-primary-100 hover:border-b-primary-100 transition-all ease-in drop-shadow-blue-600 border-b-[3px] border-b-[#F4C26F]  pr-[68px] pl-[50px] text-[16px] lg:text-[19px] text-center text-mono-100 font-normal font-secondary">
                      Cafe 2
                    </li>
                  </ul>
                  <div className="available-gifts-card-main-box grid  grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-x-4 lg:gap-x-6 xl:gap-x-10 gap-y-[33px]">
                    <div className="category-product-card-item rounded-[16px] px-[13px] lg:px-[19px] pb-[18px] lg:pb-[24px] pt-[13px] lg:pt-[18px] bg-mono-0">
                      <div className="p-card-head overflow-hidden w-full max-w-[387px]  max-h-[324px] rounded-[12px]">
                        <Image
                          src="/images/product-card-image1.png"
                          alt="product image"
                          className="w-full h-full object-cover"
                          width={387}
                          height={324}
                        />
                      </div>
                      <div className="p-card-body mt-4 md:mt-5 xl:mt-[26px]">
                        <h3 className="p-title text-[21px] md:text-[24px] lg:text-[30px] text-left text-mono-100 font-normal font-primary leading-[120%]">
                          Our Popular coffee
                        </h3>
                        <div className="desc-box mt-[7px] flex items-center gap-2 justify-between">
                          <p className="text-[#282828] text-[12px] font-normal leading-[20px] font-secondary">
                            Cappuccino or Americano
                          </p>
                          <p className="preview-stars flex items-center gap-1 text-[11x] md:text-[14px]">
                            <Image
                              src="/images/icons/stars.svg"
                              alt="stars"
                              width={18}
                              height={18}
                              className="w-3 md:w-[18px]"
                            />
                            4.8/<span>5</span>
                          </p>
                        </div>
                        <p className="p-price mt-3 lg:mt-[20px] block font-bold font-secondary text-left text-[24px] md:text-[26px]lg:text-[32px] text-mono-100 leading-[120%]">
                          €4.00
                        </p>
                        <div className="info-product-box mt-3 lg:mt-[20px] px-[13px] pt-[9px] pb-[18px] rounded-[12px]  border border-[#F4C24D] bg-[#F4C24D2E] ">
                          <p className="info-vendor flex items-center gap-[8px]">
                            <Image
                              src="/images/icons/vendor-small-logo.svg"
                              alt="vendor logo image"
                              width={23}
                              height={23}
                            />
                            <span className="text-[#6CA3A4] text-left text-[12px] font-secondary font-normal leading-[100%]">
                              Willow & Wild
                            </span>
                          </p>
                          <ul className="location-list mr-2 lg:mt-3 flex flex-col  gap-2 lg:gap-4 pl-0 lg:pl-6">
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />
                              <p className="text-mono-100  text-left text-[11px] md:text-[12px] font-secondary font-normal leading-[100%]">
                                No. 2 Courthouse Square, Maynooth
                              </p>
                            </li>
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />

                              <p className="text-mono-100 text-left text-[12px] font-secondary font-normal leading-[100%]">
                                77 Oaklawn, Leixlip
                              </p>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/gift"
                          className="hover:opacity-85 rounded-[9px] lg:rounded-[13px]  py-3 h-[46px] lg:h-[57px] max-w-[333px] mx-auto bg-secondary-100 w-full flex items-center mt-[20px] justify-center text-[15px] text-center text-mono-100 font-normal font-secondary leading-[100%] px-[21px]"
                        >
                          Purchase Gift →
                        </Link>
                      </div>
                    </div>
                    {/*===================== */}
                    <div className="category-product-card-item rounded-[16px] px-[13px] lg:px-[19px] pb-[18px] lg:pb-[24px] pt-[13px] lg:pt-[18px] bg-mono-0">
                      <div className="p-card-head overflow-hidden w-full max-w-[387px]  max-h-[324px] rounded-[12px]">
                        <Image
                          src="/images/product-card-image2.png"
                          alt="product image"
                          className="w-full h-full object-cover"
                          width={387}
                          height={324}
                        />
                      </div>
                      <div className="p-card-body mt-4 md:mt-5 xl:mt-[26px]">
                        <h3 className="p-title text-[21px] md:text-[24px] lg:text-[30px] text-left text-mono-100 font-normal font-primary leading-[120%]">
                          Coffee + Cake
                        </h3>
                        <div className="desc-box mt-[7px] flex items-center gap-2 justify-between">
                          <p className="text-[#282828] text-[12px] font-normal leading-[20px] font-secondary">
                            Gift a Cappuccino or an Americano with a cake
                          </p>
                          <p className="preview-stars flex items-center gap-1 text-[11x] md:text-[14px]">
                            <Image
                              src="/images/icons/stars.svg"
                              alt="stars"
                              width={18}
                              height={18}
                              className="w-3 md:w-[18px]"
                            />
                            4.8/<span>5</span>
                          </p>
                        </div>
                        <p className="p-price mt-3 lg:mt-[20px] block font-bold font-secondary text-left text-[24px] md:text-[26px]lg:text-[32px] text-mono-100 leading-[120%]">
                          €8.00
                        </p>
                        <div className="info-product-box mt-3 lg:mt-[20px] px-[13px] pt-[9px] pb-[18px] rounded-[12px]  border border-[#F4C24D] bg-[#F4C24D2E] ">
                          <p className="info-vendor flex items-center gap-[8px]">
                            <Image
                              src="/images/icons/vendor-small-logo.svg"
                              alt="vendor logo image"
                              width={23}
                              height={23}
                            />
                            <span className="text-[#6CA3A4] text-left text-[12px] font-secondary font-normal leading-[100%]">
                              Willow & Wild
                            </span>
                          </p>
                          <ul className="location-list mr-2 lg:mt-3 flex flex-col  gap-2 lg:gap-4 pl-0 lg:pl-6">
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />
                              <p className="text-mono-100  text-left text-[11px] md:text-[12px] font-secondary font-normal leading-[100%]">
                                No. 2 Courthouse Square, Maynooth
                              </p>
                            </li>
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />

                              <p className="text-mono-100 text-left text-[12px] font-secondary font-normal leading-[100%]">
                                77 Oaklawn, Leixlip
                              </p>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/gift"
                          className="hover:opacity-85 rounded-[9px] lg:rounded-[13px]  py-3 h-[46px] lg:h-[57px] max-w-[333px] mx-auto bg-secondary-100 w-full flex items-center mt-[20px] justify-center text-[15px] text-center text-mono-100 font-normal font-secondary leading-[100%] px-[21px]"
                        >
                          Purchase Gift →
                        </Link>
                      </div>
                    </div>
                    {/*===================== */}
                    <div className="category-product-card-item rounded-[16px] px-[13px] lg:px-[19px] pb-[18px] lg:pb-[24px] pt-[13px] lg:pt-[18px] bg-mono-0">
                      <div className="p-card-head overflow-hidden w-full max-w-[387px]  max-h-[324px] rounded-[12px]">
                        <Image
                          src="/images/product-card-image3.png"
                          alt="product image"
                          className="w-full h-full object-cover"
                          width={387}
                          height={324}
                        />
                      </div>
                      <div className="p-card-body mt-4 md:mt-5 xl:mt-[26px]">
                        <h3 className="p-title text-[21px] md:text-[24px] lg:text-[30px] text-left text-mono-100 font-normal font-primary leading-[120%]">
                          Two Coffee + One Cake
                        </h3>
                        <div className="desc-box mt-[7px] flex items-center gap-2 justify-between">
                          <p className="text-[#282828] text-[12px] font-normal leading-[20px] font-secondary">
                            A gift for two. Have two coffee and one cake
                          </p>
                          <p className="preview-stars flex items-center gap-1 text-[11x] md:text-[14px]">
                            <Image
                              src="/images/icons/stars.svg"
                              alt="stars"
                              width={18}
                              height={18}
                              className="w-3 md:w-[18px]"
                            />
                            4.8/<span>5</span>
                          </p>
                        </div>
                        <p className="p-price mt-3 lg:mt-[20px] block font-bold font-secondary text-left text-[24px] md:text-[26px]lg:text-[32px] text-mono-100 leading-[120%]">
                          €12.00
                        </p>
                        <div className="info-product-box mt-3 lg:mt-[20px] px-[13px] pt-[9px] pb-[18px] rounded-[12px]  border border-[#F4C24D] bg-[#F4C24D2E] ">
                          <p className="info-vendor flex items-center gap-[8px]">
                            <Image
                              src="/images/icons/vendor-small-logo.svg"
                              alt="vendor logo image"
                              width={23}
                              height={23}
                            />
                            <span className="text-[#6CA3A4] text-left text-[12px] font-secondary font-normal leading-[100%]">
                              Willow & Wild
                            </span>
                          </p>
                          <ul className="location-list mr-2 lg:mt-3 flex flex-col  gap-2 lg:gap-4 pl-0 lg:pl-6">
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />

                              <p className="text-mono-100 text-left text-[12px] font-secondary font-normal leading-[100%]">
                                77 Oaklawn, Leixlip
                              </p>
                            </li>
                            <li className="locations flex items-center gap-2">
                              <Image
                                src="/images/icons/ep_location.svg"
                                alt="vendor logo image"
                                width={16}
                                height={16}
                              />
                              <p className="text-mono-100  text-left text-[11px] md:text-[12px] font-secondary font-normal leading-[100%]">
                                No. 2 Courthouse Square, Maynooth
                              </p>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/gift"
                          className="hover:opacity-85 rounded-[9px] lg:rounded-[13px]  py-3 h-[46px] lg:h-[57px] max-w-[333px] mx-auto bg-secondary-100 w-full flex items-center mt-[20px] justify-center text-[15px] text-center text-mono-100 font-normal font-secondary leading-[100%] px-[21px]"
                        >
                          Purchase Gift →
                        </Link>
                      </div>
                    </div>
                    {/*===================== */}
                  </div>
                  <Link
                    href="/gift"
                    className="rounded-[13px] hover:bg-secondary-100 h-[55px] max-w-[200px] mx-auto bg-transparent border border-secondary-100 w-full flex items-center mt-[28px] justify-center text-[15px] text-center text-mono-100 font-normal font-secondary leading-[100%] px-[21px]"
                  >
                    Explore more Gifts →
                  </Link>
                </div>
              </div>
            </div>
          </section>
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
                  href="/gift"
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

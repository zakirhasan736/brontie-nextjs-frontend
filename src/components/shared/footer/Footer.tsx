import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FooterSection = () => {
  return (
    <footer className="footer-section bg-secondary-100 pt-[240px] md:pt-[180px] lg:pt-[250px] xl:pt-[413px]">
      <div className="custom-container">
        <div className="footer-wrapper grid grid-cols-6 md:grid-cols-12  gap-0 md:gap-5 lg:gap-10 pb-14 lg:pb-[75px]">
          <div className="footer-left-cont col-span-6 md:col-span-5">
            <div className="footer-brand-logo relative -left-14 lg:-left-[20px]">
              <Image
                src="/images/logo-black.svg"
                width={236}
                height={93}
                className="h-16 lg:h-[93px]"
                alt="footer brand logo"
              />
            </div>
            <p className="desc max-w-full md:max-w-[458px] mt-4 md:mt-5 lg:mt-[22px] w-full text-[16px] md:text-[20px] lg:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[140%]">
              Brontie is Ireland’s first café gifting platform, no app, no
              login, just simple gifting.
            </p>
            <ul className="socials-list mt-12 md:mt-14 lg:mt-[76px] flex items-center gap-[9px]">
              <li className="socials-list-item">
                <Link
                  href="/"
                  className="w-10 md:w-12 xl:w-[57px] flex items-center justify-center h-10 md:h-12 xl:h-[57px] hover:bg-primary-100 hover:border-mono-0 transition-all ease-in-out duration-500 rounded-full border-[2] border-mono-100"
                >
                  <Image
                    src="/images/icons/fi_1077042.svg"
                    alt="socials icons image"
                    className="h-[20px] xl:h-[29px]"
                    width={29}
                    height={29}
                  />
                </Link>
              </li>
              <li className="socials-list-item">
                <Link
                  href="/"
                  className="w-10 md:w-12 xl:w-[57px] flex items-center justify-center h-10 md:h-12 xl:h-[57px] hover:bg-primary-100 hover:border-mono-0 transition-all ease-in-out duration-500 rounded-full border-[2] border-mono-100"
                >
                  <Image
                    src="/images/icons/fi_15678551.svg"
                    alt="socials icons image"
                    className="h-[20px] xl:h-[29px]"
                    width={29}
                    height={29}
                  />
                </Link>
              </li>
              <li className="socials-list-item">
                <Link
                  href="/"
                  className="w-10 md:w-12 xl:w-[57px] flex items-center justify-center h-10 md:h-12 xl:h-[57px] hover:bg-primary-100 hover:border-mono-0 transition-all ease-in-out duration-500 rounded-full border-[2] border-mono-100"
                >
                  <Image
                    src="/images/icons/link-din-icons.svg"
                    alt="socials icons image"
                    className="h-[20px] xl:h-[29px]"
                    width={29}
                    height={29}
                  />
                </Link>
              </li>
              <li className="socials-list-item">
                <Link
                  href="/"
                  className="w-10 md:w-12 xl:w-[57px] flex items-center justify-center h-10 md:h-12 xl:h-[57px] hover:bg-primary-100 hover:border-mono-0 transition-all ease-in-out duration-500 rounded-full border-[2] border-mono-100"
                >
                  <Image
                    src="/images/icons/fi_5968958.svg"
                    alt="socials icons image"
                    className="h-[20px] xl:h-[29px]"
                    width={29}
                    height={29}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-right-cont flex md:flex-row flex-col items-start justify-between gap-[50px] md:gap-10 pt-[53px] md:pt-[57px] col-span-6 md:col-span-7">
            <div className="footer-quick-link">
              <h3 className="quick-link-title font-bold font-secondary text-[22px] md:text-[20px] lg:text-[24px] whitespace-nowrap xl:text-[30px] text-left text-mono-100 leading-[120%]">
                Our Company
              </h3>
              <ul className="quick-link flex mt-5 xl:mt-[27px]  flex-wrap md:flex-col gap-x-10 gap-y-[10px] md:gap-[15px]">
                <li className="link-item">
                  <Link
                    href="/"
                    className="text-[16px] xl:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[120%] hover:text-primary-100"
                  >
                    Gift
                  </Link>
                </li>
                <li className="link-item">
                  <Link
                    href="/"
                    className="text-[16px] xl:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[120%] hover:text-primary-100"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="link-item">
                  <Link
                    href="/"
                    className="text-[16px] xl:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[120%] hover:text-primary-100"
                  >
                    About us
                  </Link>
                </li>
                <li className="link-item">
                  <Link
                    href="/"
                    className="text-[16px] xl:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[120%] hover:text-primary-100"
                  >
                    Benefits
                  </Link>
                </li>
                <li className="link-item">
                  <Link
                    href="/"
                    className="text-[16px] xl:text-[22px] text-left text-mono-100 font-secondary font-normal leading-[120%] hover:text-primary-100"
                  >
                    Featured In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-subscription-area max-w-[428px] w-full ml-auto">
              <h3 className="quick-link-title font-bold font-secondary text-[20px] lg:text-[24px] whitespace-nowrap xl:text-[30px] text-left text-mono-100 leading-[120%]">
                Sign up to our Newsletter!
              </h3>
              <form action="" className="subscriptions-form mt-5 xl:mt-[33px]">
                <label
                  htmlFor="email"
                  className="max-w-[428px] block relative w-full rounded-full overflow-hidden"
                >
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="email md:h-[54px] h-[45px] w-full bg-mono-0 rounded-full pt-3 pb-3 md:pt-[22px] md:pb-[17px] pl-[22px] text-[16px] text-[#000000] text-left font-normal font-secondary leading-[100%] pr-[139px] md:pr-[120px] lg:pr-[166px]"
                  />
                  <div className="submit-button absolute top-0 right-0 rounded-full overflow-hidden max-w-[139px] md:max-w-[120px] flex justify-center lg:max-w-[166px] w-full">
                    <input
                      type="submit"
                      className="bg-primary-100 font-secondary text-[16px] lg:text-[18px] cursor-pointer text-mono-0 pt-3 pb-3 md:pt-[17px] md:pb-[12px] lg:pl-[40px] lg:pr-[39px] px-4  md:h-[54px] h-[45px] max-w-[139px] md:max-w-[120px] flex justify-center lg:max-w-[166px] w-full rounded-full"
                      value="Subscribe"
                    />
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-area max-w-[calc(100% - 20%)] w-full md:w-[calc(100%-5%)] mx-auto h-[1px] bg-[#F0F0F0]"></div>
      <div className="custom-container flex md:flex-row flex-col items-center gap-9 md:gap-2 xl:gap-6 justify-between py-5 xl:pt-[23px] xl:pb-[24px]">
        <p className="copyright-text text-mono-100 text-[14px] xl:text-[18px] text-left font-normal font-secondary leading-[130%]">
          © 2025 Brontie Ltd. All rights reserved. | Payments securely processed
          by Stripe
        </p>
        <ul className="link-lists flex gap-1 xl:gap-3 items-center">
          <li className="link-items whitespace-nowrap text-mono-100 text-[14px] md:text-[16px] xl:text-[18px] text-left font-normal font-secondary leading-[110%]">
            <Link href="/term-condition">Terms & Conditions</Link>
          </li>
          |
          <li className="link-items whitespace-nowrap text-mono-100 text-[14px] md:text-[16px] xl:text-[18px] text-left font-normal font-secondary leading-[110%]">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          |
          <li className="link-items whitespace-nowrap text-mono-100 text-[14px] md:text-[16px] xl:text-[18px] text-left font-normal font-secondary leading-[110%]">
            <Link href="/cookies-policy">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterSection

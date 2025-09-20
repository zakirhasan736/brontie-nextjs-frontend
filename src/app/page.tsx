import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page-main-wrapper">
      <div className="bg-wrapper-area overflow-hidden">
        <section className="banner-section relative">
          <div className="banner-main-cont-box overflow-hidden pt-26 md:pt-[126px] lg:pt-[145px] xl:pt-[125px] pb-10 md:pb-32 xl:pb-[80px] relative z-[99]">
            <div className="custom-container">
              <div className="banner-wrapper w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
                <div className="banner-left-cont max-w-[635px] w-full">
                  <h1 className="title text-mono-0 leading-[1.2] text-normal text-[101px]">
                    Send a <span className="color-text">coffee</span> in <br />
                    <span className="text-img-box flex relative items-center">
                      {/* shape-text */}
                      <span className="color-text">Seconds.</span>{' '}
                      <Image
                        src="/images/icons/coffee-small-icon.svg"
                        width={510}
                        height={489}
                        alt="icon"
                        className="w-[119px]  hidden  md:block"
                      />
                    </span>
                  </h1>
                  <p className="desc text-[16px] nd:text-[20px] xl:text-[22px] font-normal md:max-w-[490px] leading-[130%] mt-4 md:mt-3 font-secondary text-mono-0 max-w-[300px]">
                    Brontie is Ireland’s first café gifting platform — no app,
                    no login, just simple gifting.
                  </p>
                  <div className="button-box max-w-[345px] relative mt-1 md:mt-[6px]">
                    <Image
                      src="/images/icons/angle-loto-arrow.svg"
                      width={70}
                      height={128}
                      className="w-[35px] md:w-[70px] ml-[185px] md:ml-[329px]"
                      alt="angle arrow model"
                    />
                    <div className="button-item relative">
                      <Link
                        className="bg-mono-0 hover:opacity-70 flex relative z-[9] items-center max-w-[195px] h-[51px] md:h-auto md:max-w-[270px] xl:max-w-[305px] w-full justify-center py-4 pl-[18px] pr-[15px] md:py-[20px] xl:py-[27px] md:pl-[35px] md:pr-[19px] rounded-[11px] text-[16px] md:text-[20px] xl:text-[22px] text-center font-secondary font-normal leading-[1]"
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
                </div>
                <div className="banner-right-cont relative max-w-[755px] w-full">
                  <Image
                    src="/images/banner-right-model-image.png"
                    alt="banner right side modal image"
                    width={1078}
                    height={790}
                    className="relative min-w-[950px]  z-20 left-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="shape-icon-box relative max-w-[1763px] mx-auto">
            <Image
              src="/images/shape/Coffee-Bean3.svg"
              alt="banner lest shape layer model"
              width={155}
              height={171}
              className="banner-left-shape-layer absolute -bottom-7 -left-5 md:-bottom-8 lg:-bottom-12 xl:-bottom-22 z-[96] md:-left-6 lg:-left-9 xl:-left-[45px] xl:w-[155px] w-[75px] md:w-[90px] lg:w-[120px]"
            />
          </div>
        </section>
        <section
          className="how-it-works-section relative z-[99] pt-[80px] pb-[80px] lg:pb-[150px] xl:pb-[180px]"
          id="howitworks"
        >
          <div className="bg-color-shape-area block md:hidden"></div>
          <div className="shape-icon-box hidden md:block relative max-w-[1763px] mx-auto">
            <Image
              src="/images/shape/coffee-bean-1.svg"
              alt="banner lest shape layer model"
              width={138}
              height={107}
              className="banner-left-shape-layer absolute -bottom-0 xl:-bottom-18 z-[96] -right-[30px] lg:-right-[40px] w-[90px] lg:w-[138px]"
            />
          </div>
          <div className="custom-container relative z-[99]">
            <div className="section-content relative-box mb-20 md:mb-[60px] lg:mb-20 xl:mb-[127px] text-center">
              <h2 className="inline-block title relative text-mono-100 text-center text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] font-primary font-normal leading-[120%]">
                How it Works <span className="color-text block">(3 steps)</span>
                <Image
                  src="/images/shape/heart-modal-shape1.png"
                  alt="banner lest shape layer model"
                  width={162}
                  height={172}
                  className="banner-left-shape-layer absolute -bottom-8 md:bottom-4 lg:bottom-6 xl:bottom-0 z-[96] -left-14 md:-left-22 lg:-left-28 xl:-left-36 w-[80px] md:w-[90px] lg:w-[110px] xl:w-[138px]"
                />
              </h2>
            </div>
            <div className="how-it-works-wrapper flex md:flex-row flex-col items-center  gap-[110px] md:gap-6 justify-between">
              <div className="how-its-work-card-item relative flex flex-col justify-center max-w-[345px] w-full">
                <div className="img-box relative flex justify-center max-w-[130px] w-full mx-auto">
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-100 w-7 md:w-9 h-7 md:h-9 xl:w-[46.64px] absolute -top-5 left-7 md:-top-5 md:-left-1 xl:h-[46.64px] rounded-full bg-secondary-100 items-center flex justify-center">
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
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-100 w-7 md:w-9 h-7 md:h-9 lg:w-[46.64px] absolute -top-5 left-3 md:-top-7 md:-left-4 lg:h-[46.64px] rounded-full bg-secondary-100 items-center flex justify-center">
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
                  <span className="text-[14px] md:text-[18px] lg:text-[26px] font-normal font-secondary text-mono-100 w-7 md:w-9 h-7 md:h-9 lg:w-[46.64px] absolute -top-5 left-3 md:-top-8 md:-left-2 lg:h-[46.64px] rounded-full bg-secondary-100 items-center flex justify-center">
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
      </div>
      <section
        className="about-us-section pt-16 md:pt-[90px] xl:pt-[125px] pb-12 md:pb-[90px] xl:pb-[130px] bg-mono-0"
        id="aboutUs"
      >
        <div className="custom-container">
          <div className="about-us-main-wrapper grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 xl:gap-[87px]">
            <div className="about-us-left-cont md:order-1 order-2">
              <Image
                src="/images/about-us-section-model-image.png"
                alt="about us model image right"
                width={695}
                height={669}
              />
            </div>
            <div className="about-us-right-cont flex flex-col md:items-start justify-start order-1 md:order-2">
              <h2 className="title text-mono-100 text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-center md:text-left font-normal font-primary">
                About Us / Story
              </h2>
              <div className="desc-box relative mt-[38px] pb-[46px]">
                <span className="font-normal font-primary text-primary-100 text-left text-[80px] lg:text-[101px] leading-[100%] absolute -top-4 lg:-top-6 -left-[25px] md:-left-[45px] lg:-left-[58px]">
                  <Image
                    className="lg:h-12 md:h-6 h-4"
                    src="/images/icons/quote-image-left.svg"
                    alt="qoute-icons"
                    width={48}
                    height={48}
                  />
                </span>
                <p className="desc-cont font-normal font-secondary lg:text-[24px] text-left text-mono-100 leading-[140%]">
                  The idea came while I was living in South Korea, where people
                  often gifted coffees and cakes to friends with just a click.
                  It felt so much more personal than a voucher or sending money.
                </p>
                <p className="desc-cont  mt-5 lg:mt-6 xl:mt-9 font-normal font-secondary lg:text-[24px] text-left text-mono-100 leading-[140%]">
                  Brontie brings that experience to Ireland — thoughtful little
                  gestures that brighten someone’s day and support local cafés.
                </p>
                <span className="font-normal font-primary text-primary-100 text-right text-[80px] lg:text-[101px] leading-[100%] absolute bottom-6 md:-bottom-[0px] right-0 md:left-[160px]">
                  <Image
                    className="lg:h-12 md:h-6 h-4"
                    src="/images/icons/quote-image-right.svg"
                    alt="qoute-icons"
                    width={48}
                    height={48}
                  />
                </span>
              </div>
              <Link
                href="/hoq-it-works"
                className="font-secondary hover:opacity-70 font-normal mt-0 md:mt-[36px] xl:h-[84px]  h-[50px] md:h-[58px] flex items-center justify-center leading-[1] text-[14px]  md:text-[18px] lg:text-[20px] xl:text-[22px] text-center text-mono-100 bg-secondary-100 max-w-[162px] md:max-w-[230px] xl:max-w-[272px] w-full ml-0 rounded-[12px] xl:rounded-[18px] py-3 xl:py-[27px] pl-[32px] pr-[17px]"
              >
                Go to Gifts →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="benefit-section pt-[60px] pb-10 md:py-[60px] overflow-hidden"
        id="benefits"
      >
        <div className="custom-container">
          <div className="benefit-section-wrapper flex flex-col md:flex-row items-center gap-9 md:gap-0">
            <div className="benefit-sec-left-cont max-w-[660px] w-full">
              <p className="pin-text whitespace-nowrap py-[13px] px-[22px] rounded-full  h-[33px] md:h-[46px] flex justify-center items-center bg-primary-50 text-mono-0 text-center text-[13px] md:text-[18px] max-w-[106px] md:max-w-[150px] w-full font-normal font-secondary leading-[100%]">
                Our Benefits
              </p>
              <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-[left font-normal font-primary text-mono-0 leading-[100%] mt-4 md:mt-[24px]">
                Why You’ll Love It
              </h2>
              <ul className="linst-of-benefit flex flex-col mt-7 md:mt-10 xl:mt-[65px] gap-6 lg:gap-9 xl:gap-[50px]">
                <li className="flex items-center gap-4 lg:gap-6">
                  <Image
                    src="/images/icons/user-module.svg"
                    alt="benefit info list icon"
                    width={78}
                    height={78}
                    className="w-12 lg:w-[56px] xl:w-[78px]"
                  />
                  <p className="text-[14px] md:text-[20px] lg:text-[26px] text-left font-secondary text-mono-0 leading-[100%] font-normal">
                    Gifting That Feels Personal
                  </p>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <Image
                    src="/images/icons/support.svg"
                    alt="benefit info list icon"
                    width={78}
                    height={78}
                    className="w-12 lg:w-[56px] xl:w-[78px]"
                  />
                  <p className="text-[14px] md:text-[20px] lg:text-[26px] text-left font-secondary text-mono-0 leading-[100%] font-normal">
                    Support local independent cafés
                  </p>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <Image
                    src="/images/icons/gift.svg"
                    alt="benefit info list icon"
                    width={78}
                    height={78}
                    className="w-12 lg:w-[56px] xl:w-[78px]"
                  />
                  <p className="text-[14px] md:text-[20px] lg:text-[26px] text-left font-secondary text-mono-0 leading-[100%] font-normal">
                    No app, no account needed
                  </p>
                </li>
              </ul>
            </div>
            <div className="benefit-sec-right-cont w-full">
              <Image
                src="/images/our-benifit-section-model.png"
                alt="benefit section model image"
                width={928}
                height={804}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="trust-features-section relative  pt-16 md:pt-20 pb-16 md:pb-20 xl:pt-[135px] xl:pb-[121px] bg-mono-0"
        id="featured-in"
      >
        <div className="custom-container">
          <div className="section-content relative z-[99] mb-[25px] md:mb-[73px]">
            <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-center font-normal font-primary text-mono-100 leading-[100%]">
              Trusted & Featured By
            </h2>
            <p className="desc text-[14px] md:text-[18px] lg:text-[22px] xl:text-[26px] font-bold text-center font-secondary text-mono-100 leading-[140%]  mt-[14px]">
              As seen on{' '}
              <span className="color-text">The Ian Dempsey Breakfast Show</span>{' '}
              and other leading media outlets.
            </p>
          </div>
          <div className="trust-feature-wrapper grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-6 lg:gap-10 xl:gap-20  relative z-[99]">
            <div className="trust-feature-cards-item h-full bg-mono-0 rounded-[16px] overflow-hidden">
              <div className="card-image-box rounded-[9px] md:rounded-[16px] overflow-hidden">
                <Image
                  src="/images/trust-feature-imag1.jpg"
                  width={661}
                  height={441}
                  alt=" trust feature image"
                  className="rounded-[9px] md:rounded-[16px] w-full h-full object-cover"
                />
              </div>
              <div className="trust-feature-cont pb-[19px] px-[10px] md:pb-[25px] lg:pb-[35px] xl:pb-[51px] md:px-[19px] pt-[15px] md:pt-[29px] bg-mono-0">
                <h3 className="text-[16px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-left text-mono-100 font-bold font-secondary leading-[120%]">
                  New gift-giving platform positively received by locals after
                  Maynooth launch
                </h3>
                <p className="mt-4 text-[12px] md:text-[18px] lg:text-[19px] xl:text-[21px] text-mono-1000 text-left font-normal font-secondary leading-[130%]">
                  SIMPLE, straight-forward, appealing to all ages, and a clever
                  way to deliver a kind gesture: this is how new users...
                </p>
                <button
                  className="type-read-more hover:text-secondary-100 mt-[16px] cursor-pointer text-primary-100 underline text-[12px] md:text-[16px] lg:text-[19px] xl:text-[21px] text-left font-bold font-secondary leading-[130%]"
                  type="button"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="trust-feature-cards-item h-full bg-mono-0 rounded-[16px] overflow-hidden">
              <div className="card-image-box rounded-[9px] md:rounded-[16px] overflow-hidden">
                <Image
                  src="/images/trust-feature-imag2.png"
                  width={661}
                  height={441}
                  alt=" trust feature image"
                  className="rounded-[9px] md:rounded-[16px] w-full h-full object-cover"
                />
              </div>
              <div className="trust-feature-cont pb-[19px] px-[10px] md:pb-[25px] lg:pb-[35px] xl:pb-[51px] md:px-[19px] pt-[15px] md:pt-[29px] bg-mono-0">
                <h3 className="text-[16px] md:text-[22px] lg:text-[26px] xl:text-[32px] text-left text-mono-100 font-bold font-secondary leading-[120%]">
                  Community gifting platform launching at popular Kildare Café
                </h3>
                <p className="mt-4 text-[12px] md:text-[18px] lg:text-[19px] xl:text-[21px] text-mono-1000 text-left font-normal font-secondary leading-[130%]">
                  Brontie, a new micro-gifting platform, is officially launching
                  at Willow & Wild Café...
                </p>
                <button
                  className="type-read-more hover:text-secondary-100 mt-[16px] cursor-pointer text-primary-100 underline text-[12px] md:text-[16px] lg:text-[19px] xl:text-[21px] text-left font-bold font-secondary leading-[130%]"
                  type="button"
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
          <Link
            href="/how-it-works"
            className="font-secondary hover:opacity-70 relative z-[99] mx-auto font-normal mt-[37px] md:mt-[42px] xl:h-[84px] h-[50px] md:h-[58px] flex items-center justify-center leading-[1] text-[14px] md:text-[20px] xl:text-[22px] text-center text-mono-100 bg-secondary-100 max-w-[162px] md:max-w-[230px] xl:max-w-[272px] w-full rounded-[10px] md:rounded-[12px] xl:rounded-[18px] py-3 xl:py-[27px] pl-[32px] pr-[17px]"
          >
            Go to Gifts →
          </Link>
        </div>
      </section>
      <section className="socials-testimonials xl:pt-[120px] pt-16 md:pt-20 pb-20 md:pb-[60px] overflow-hidden">
        <div className="shape-icon-box relative max-w-[1763px] mx-auto">
          <Image
            src="/images/shape/coffee-tree.png"
            alt="banner lest shape layer model"
            width={341}
            height={237}
            className="banner-left-shape-layer absolute top-12 -left-12 md:top-0 lg:top-0 xl:-top-0 z-[96] md:-left-14 lg:-left-20 xl:-left-10 xl:w-[321px] w-[156px] md:w-[200px] lg:w-[250px]"
          />
        </div>
        <div className="custom-container">
          <div className="section-content mb-10 md:mb-[33px]">
            <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] text-center font-normal font-primary text-mono-100 leading-[100%]">
              Social Testimonial
            </h2>
          </div>
          <div className="socials-testimonials-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
            <div className="socials-testimonials-left-cont">
              <Image
                src="/images/socials-testimonials-model.png"
                alt="socials testimonials model image"
                width={721}
                height={691}
                className="md:h-[337px] lg:h-[480px] xl:h-[691px] object-cover"
              />
            </div>
            <div className="socials-testimonials-right-cont flex flex-col items-start justify-center">
              <h3 className="sub-title text-left text-[28px] md:text-[38px] lg:text-[46px] xl:text-[60px] text-mono-100 font-primary font-normal leading-[100%] max-w-[656px] w-full">
                Brightening Days in Kildare
              </h3>
              <ul className="review-start mt-[23px] md:mt-5 flex items-center gap-[4px]">
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li
                  className="stars-item
                    "
                >
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>

                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
              </ul>
              <p className="reviews-text text-left text-[14px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-mono-100 max-w-[548px] w-full font-secondary font-normal mt-[19px]  leading-[130%] md:mt-[30px]">
                “I love the idea of buying a coffee or a coffee and cake to
                share with someone rather than just a voucher &quot;
              </p>
              <div className="reviews-user-info-box  mt-9 xl:mt-12 flex items-center gap-4 md:gap-[28px] justify-start">
                <div className="users-img w-[53px] h-[53px] md:w-16 md:h-16 xl:w-[90px] xl:h-[90px] rounded-full overflow-hidden">
                  <Image
                    src="/images/users-image1.png"
                    alt="user image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="user-info-cont">
                  <h4 className="user-name text-mono-100  text-left  text-[16px] md:text-[22px] xl:text-[26px] font-bold font-secondary leading-[100%]">
                    Catherine L.
                  </h4>
                  <p className="user-cat text-primary-100 mt-[6px] text-left text-[10px] md:text-[14px] xl:text-[16px] font-normal font-secondary leading-[100%]">
                    Happy Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="great-moment-with-founders bg-tarteary-100 pt-16 md:pt-20 xl:pt-[104px] pb-[90px] xl:pb-[150px]">
        <div className="custom-container">
          <div className="section-content mb-9 md:mb-12 xl:mb-20">
            <h2 className="title text-[35px] md:text-[48px] lg:text-[56px] xl:text-[67px] max-w-[643px] mx-auto text-center font-normal font-primary text-mono-100 leading-[120%]">
              Loved by Cafes across Kildare
            </h2>
          </div>
          <div className="great-moment-wrapper grid grid-cols-6 md:grid-cols-12 gap-[46px] md:gap-6 lg:gap-10 xl:gap-16">
            <div className="great-moment-left-cont col-span-6 xl:col-span-5">
              <ul className="review-start mt-0 mdmt-5 flex items-center gap-[4px]">
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li
                  className="stars-item
                    "
                >
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>

                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
                <li className="stars-item">
                  <Image
                    src="/images/icons/stars.svg"
                    alt="reviews stars"
                    width={34}
                    height={34}
                    className="h-5 md:h-6 w-5 md:w-6 lg:h-[34px] lg:w-[34px]"
                  />
                </li>
              </ul>
              <p className="reviews-text text-left text-[14px] md:text-[20px] lg:text-[22px] xl:text-[28px] text-mono-100 max-w-full w-full font-secondary font-normal leading-[130%] mt-5 md:mt-[30px]">
                “I think it’s a brilliant idea and the minute I found out; I was
                delighted to get behind it”
                <span className="mt-6 block">
                  “It’s a thoughtful little gift, and so far, the feedback of
                  people coming in has been great.
                </span>
              </p>
              <div className="reviews-user-info-box  mt-10 flex items-center gap-4 md:gap-[28px] justify-start">
                <div className="users-img w-[53px] h-[53px] md:w-16 md:h-16 xl:w-[90px] xl:h-[90px] rounded-full overflow-hidden">
                  <Image
                    src="/images/users-image2.png"
                    alt="user image"
                    width={90}
                    height={90}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="user-info-cont">
                  <h4 className="user-name text-mono-100  text-left  text-[16px] md:text-[22px] xl:text-[26px] font-bold font-secondary leading-[100%]">
                    Kate C.
                  </h4>
                  <p className="user-cat text-primary-100 mt-[6px] text-left text-[10px] md:text-[14px] xl:text-[16px] font-normal font-secondary leading-[100%]">
                    Willow & Wild
                  </p>
                </div>
              </div>
            </div>
            <div className="great-moment-right-model w-full max-w-[778px] rounded-[16px] overflow-hidden col-span-6  xl:col-span-7">
              <Image
                src="/images/great-moment-model-image.png"
                alt="great moment model image right side"
                width={779}
                height={507}
                className="rounded-[16px] w-full min-h-[232px] md:h-[380px] xl:h-[507px] overflow-hidden object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section pt-16 md:pt-[90px] xl:pt-[164px] pb-0">
        <div className="custom-container">
          <div className="contact-form-wrapper grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 lg:gap-10 xl:gap-[97px]">
            <div className="contact-form-left-cont">
              <h2 className="title text-left text-[35px]  md:text-[48px] lg:text-[56px] xl:text-[67px] text-mono-100 font-primary font-normal mb-[17px] md:mb-10 xl:mb-12">
                Let’s Get in Touch, Contact us
              </h2>
              <div className="model-image-box hidden md:block xl:h-[834px] w-full overflow-hidden rounded-[16px]">
                <Image
                  height={834}
                  width={625}
                  src="/images/contact-form-sec-model-image.png"
                  alt="contact form model image"
                  className="w-full h-full rounded-[16px] overflow-hidden object-fill"
                />
              </div>
            </div>
            <div className="contact-form-right-cont border border-[#FFDC89] bg-tarteary-100 rounded-[16px] pt-[27px] px-[18px] md:pt-[52px] md:px-[35px] pb-9 md:pb-12 xl:pb-[69px]">
              <form
                action=""
                className="contact-forms-main flex flex-col gap-5 lg:gap-6 xl:gap-12"
              >
                <div className="input-group-box">
                  <label
                    htmlFor="name"
                    className="mb-3 md:mb-4 xl:mb-6 block text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] text-left text-[#232323] font-secondary font-normal leading-[100%]"
                  >
                    Your Name
                  </label>
                  <input
                    className="pt-6 pr-[35px] w-full h-10 lg:h-16 xl:h-[94px] flex justify-start items-center pb-6 rounded-[12px] !border-2 border-mono-0 focus:!border-[#F4C24D] focus-within:!rounded-[12px] focus-visible:!rounded-[12px] focus:!rounded-[12px] focus-within:!border-[#F4C24D] placeholder:text-[24px] placeholder:text-mono-100 pl-[31px] text-[28px] text-left text-[#232323] font-secondary font-bold leading-[100%]"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="input-group-box">
                  <label
                    htmlFor="email"
                    className="mb-3 md:mb-4 xl:mb-6 block text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] text-left text-[#232323] font-secondary font-normal leading-[100%]"
                  >
                    Your Email
                  </label>
                  <input
                    className="pt-6 pr-[35px] w-full h-10 lg:h-16 xl:h-[94px] flex justify-start items-center pb-6 rounded-[12px] !border-2 border-mono-0 focus:!border-[#F4C24D] focus-within:!rounded-[12px] focus-visible:!rounded-[12px] focus:!rounded-[12px] focus-within:!border-[#F4C24D] placeholder:text-[24px] placeholder:text-mono-100 pl-[31px] text-[28px] text-left text-[#232323] font-secondary font-bold leading-[100%]"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="input-group-box">
                  <label
                    htmlFor="coffename"
                    className="mb-3 md:mb-4 xl:mb-6 block text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] text-left text-[#232323] font-secondary font-normal leading-[100%]"
                  >
                    Cafe Name
                  </label>
                  <input
                    className="pt-6 pr-[35px] w-full h-10 lg:h-16 xl:h-[94px] flex justify-start items-center pb-6 rounded-[12px] !border-2 border-mono-0 focus:!border-[#F4C24D] focus-within:!rounded-[12px] focus-visible:!rounded-[12px] focus:!rounded-[12px] focus-within:!border-[#F4C24D] placeholder:text-[24px] placeholder:text-mono-100 pl-[31px] text-[28px] text-left text-[#232323] font-secondary font-bold leading-[100%]"
                    type="text"
                    name="coffename"
                    id="coffename"
                  />
                </div>
                <div className="input-group-box">
                  <label
                    htmlFor="desc"
                    className="mb-3 md:mb-4 xl:mb-6 block text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] text-left text-[#232323] font-secondary font-normal leading-[100%]"
                  >
                    Describe your request
                  </label>
                  <textarea
                    className="pt-6 w-full bg-mono-0 pr-5 md:pr-[35px] h-20 lg:h-[127px] pb-6 !rounded-[12px] !border-2 border-mono-0 focus:!border-[#F4C24D]  focus-within:!rounded-[12px] focus-visible:!rounded-[12px] focus:!rounded-[12px] focus-within:!border-[#F4C24D] placeholder:text-[24px] placeholder:text-mono-100 pl-[31px] text-[28px] text-left text-[#232323] font-secondary font-bold leading-[100%]"
                    name="desc"
                    id="desc"
                  ></textarea>
                </div>
                <div className="input-group-box">
                  <input
                    type="submit"
                    value="Send Request"
                    className="h-[44px] hover:opacity-70 cursor-pointer xl:h-[84px] md:h-[65px] max-w-[202px] md:max-w-[386px] w-full text-[12px] md:text-[22px] lg:text-[24px] xl:text-[28px] text-center flex justify-center items-center text-mono-100 font-normal font-secondary leading-[100%] bg-secondary-100 rounded-[10px] md:rounded-[12px] xl:rounded-[18px] mx-auto"
                  />
                </div>
              </form>
            </div>

            <div className="model-image-box mt-[25px] block md:hidden  h-[290px] md:h-[469px] xl:h-[834px] w-full overflow-hidden rounded-[16px]">
              <Image
                height={834}
                width={625}
                src="/images/contact-form-sec-model-image.png"
                alt="contact form model image"
                className="w-full h-full rounded-[16px] overflow-hidden object-cover md:object-fill"
              />
            </div>
          </div>
          {/* =================== */}
          <div className="site-cts-wrapper-area mt-16 md:mt-20 xl:mt-[129px] -mb-[180px] md:-mb-[160px] lg:-mb-[220px] xl:-mb-[318px] relative z-[999] grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 lg:gap-20 pt-[30px] md:pt-[47px] pr-[11px] md:pr-10 lg:pr-[56px] pb-[27px] md:pb-[34px] pl-0 md:pl-14 lg:pl-[77px] rounded-[22px]">
            <div className="site-cta-left-cont flex flex-col justify-center items-start pl-[26px] md:pl-0">
              <h2 className="title text-left text-[34px] lg:text-[46px] xl:text-[60px] text-mono-0 font-normal font-primary leading-[120%] max-w-[553px]">
                “Brighten someone’s day. Gift a Brontie today.”
              </h2>
              <div className="button-item relative mt-8 md:mt-9 lg:mt-[50px]">
                <Link
                  className="bg-secondary-100 hover:opacity-70 flex relative z-[9] h-[49px] md:h-[60px] lg:h-[79px] items-center max-w-[305px] w-full justify-center py-4 md:py-5 xl:py-[27px] pl-[35px] pr-[19px] rounded-[11px] text-[12px] md:text-[18px] lg:text-[22px] text-center font-secondary font-normal leading-[1]"
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
      </section>
    </div>
  );
}

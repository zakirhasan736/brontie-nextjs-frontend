import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TrustFeature = () => {
  return (
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
  )
}

export default TrustFeature

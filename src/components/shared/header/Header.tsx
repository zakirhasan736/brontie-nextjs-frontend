'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const HeaderSection: React.FC = () => {
  const pathname = usePathname() || '/';
  const isHowItWorks = pathname === '/how-it-works';

  // ----- Scroll-aware header visibility -----
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false); // > 100px?

  // thresholds
  const HIDE_THRESHOLD = 6;
  const SHOW_THRESHOLD = 2;
  const TOP_LOCK = 8;
  const BOTTOM_LOCK = 120;
  const EFFECTS_THRESHOLD = 100; // remove effects if scrollY <= 100

  const checkLocks = (y: number) => {
    const atTop = y <= TOP_LOCK;
    const atBottom =
      typeof window !== 'undefined' &&
      window.innerHeight + y >=
        (document.documentElement?.scrollHeight || document.body.scrollHeight) -
          BOTTOM_LOCK;
    return { atTop, atBottom };
  };

  useEffect(() => {
    lastYRef.current = typeof window !== 'undefined' ? window.scrollY : 0;
    setScrolled(lastYRef.current > EFFECTS_THRESHOLD);
  }, []);

  useMotionValueEvent(scrollY, 'change', current => {
    const last = lastYRef.current;
    const delta = current - last;

    // update scrolled flag for effects
    setScrolled(current > EFFECTS_THRESHOLD);

    const { atTop, atBottom } = checkLocks(current);

    if (atTop || atBottom) {
      setVisible(true);
    } else {
      if (delta > HIDE_THRESHOLD) setVisible(false); // scrolling down
      else if (delta < -SHOW_THRESHOLD) setVisible(true); // scrolling up
    }

    lastYRef.current = current;
  });

  const navItems = useMemo(
    () => [
      { href: '/how-it-works', label: 'Gift' },
      { href: './#howitworks', label: 'How it Works' },
      { href: './#aboutUs', label: 'About us' },
      { href: './#benefits', label: 'Benefits' },
      { href: './#featured-in', label: 'Featured In' },
    ],
    []
  );

  // Effects only when header is visible AND beyond threshold
  const showEffects = visible && scrolled;

  // Background logic:
  // - if showEffects => glass/primary
  // - else if specific page wants solid (how-it-works) => solid
  // - else => transparent
  const bgClasses = showEffects
    ? 'bg-primary-100/80 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md'
    : isHowItWorks
    ? 'bg-primary-100'
    : 'bg-transparent';

  const shadowStyle = showEffects ? '0 6px 20px rgba(0,0,0,0.08)' : 'none';

  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.6 }}
      className={`header-section fixed top-0 z-[99999] w-full left-0 pt-[12px] pb-5 md:pb-[20px] ${bgClasses}`}
      style={{
        boxShadow: shadowStyle,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="custom-container">
        <div className="header-wrapper w-full">
          <nav className="nav-menu-navbar justify-between flex w-full items-end gap-4 xl:gap-6">
            {/* MOBILE DRAWER */}
            <div className="lg:hidden flex items-center justify-center w-full">
              <div className="drawer">
                <input
                  id="mobile-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex justify-between items-center">
                  <label
                    htmlFor="mobile-drawer"
                    className="w-10 h-[28px] block cursor-pointer"
                  >
                    <Image
                      src="/images/icons/trigger-icons.svg"
                      alt="Open menu"
                      width={40}
                      height={28}
                    />
                  </label>
                  <Link href="/" className="block">
                    <Image
                      src="/images/logo-main-mobo.svg"
                      width={117}
                      height={46}
                      alt="brand logo"
                      className="block w-[150px]"
                    />
                  </Link>
                </div>
                <div className="drawer-side z-[99999]">
                  <label
                    htmlFor="mobile-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <aside className="min-h-[100vh] w-[85%] bg-primary-100 max-w-xs shadow-xl justify-evenly flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                          const el = document.getElementById(
                            'mobile-drawer'
                          ) as HTMLInputElement | null;
                          if (el) el.checked = false;
                        }}
                      >
                        <Image
                          src="/images/logo-main-mobo.svg"
                          width={117}
                          height={46}
                          alt="brand logo"
                        />
                      </Link>
                      <label
                        htmlFor="mobile-drawer"
                        className="btn btn-ghost text-mono-0 ml-auto"
                        aria-label="Close menu"
                      >
                        <Image
                          src="/images/Vector.png"
                          alt="close icons"
                          width={24}
                          height={24}
                        />
                      </label>
                    </div>

                    <ul className="menu mt-[50px] px-4 gap-3">
                      {navItems.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`text-[20px] leading-[120%] font-secondary font-normal ${
                              pathname === item.href
                                ? 'text-secondary-100'
                                : 'text-base-content'
                            }`}
                            onClick={() => {
                              const el = document.getElementById(
                                'mobile-drawer'
                              ) as HTMLInputElement | null;
                              if (el) el.checked = false;
                            }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="nav-menu-auth-area mt-auto px-5 pb-6">
                      <div className="before-login-feature items-start flex gap-6 flex-col lg:flex-row sm:gap-4">
                        <Link
                          href="/cafe-signup"
                          className="px-5 whitespace-nowrap leading-[1] font-normal text-[16px] md:text-[20px] text-mono-100 py-3 md:py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[11px] border border-mono-0 bg-mono-0 hover:text-secondary-100 hover:border-secondary-100"
                        >
                          Cafe sign up →
                        </Link>
                        <Link
                          className="px-5 leading-[1] font-normal text-[16px] md:text-[20px] text-mono-0 py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[12px] hover:text-secondary-100"
                          href="/login"
                        >
                          Login
                        </Link>
                      </div>

                      <div className="after-login-feature h-[52px] hidden items-center gap-8">
                        <Link className="caret-cart relative" href="/cart">
                          <Image
                            src="/images/icons/caret-image.svg"
                            alt="caret cart icon"
                            width={33}
                            height={30}
                          />
                          <span className="flex items-center justify-center absolute -top-3 right-0 font-secondary font-normal text-[16px] text-center leading-[100%] w-[19px] h-[19px] rounded-full !bg-secondary-100">
                            1
                          </span>
                        </Link>
                        <Link className="caret-cart-user" href="/user">
                          <Image
                            src="/images/icons/user-icon.svg"
                            alt="caret user icon"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                      <ul className="socials-list mt-5 md:mt-14 lg:mt-[76px] flex items-center gap-[9px]">
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
                            href="https://www.linkedin.com/company/brontie/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BAuhyj82ZTEythSaTU1QjKg%3D%3D"
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
                            href="https://www.facebook.com/share/1BF1snhHQF/"
                            className="w-10 md:w-12 xl:w-[57px] flex items-center justify-center h-10 md:h-12 xl:h-[57px] hover:bg-primary-100 hover:border-mono-0 transition-all ease-in-out duration-500 rounded-full border-[2] border-mono-100"
                          >
                            <Image
                              src="/images/icons/facebook.png"
                              alt="socials icons image"
                              className="h-[20px] xl:h-[29px]"
                              width={29}
                              height={29}
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            {/* BRAND + DESKTOP NAV */}
            <div className="brand-logo lg:flex hidden items-center gap-6">
              <Link href="/">
                <Image
                  src="/images/logo-main.svg"
                  width={234}
                  height={93}
                  alt="brand logo"
                  className="sm:block hidden lg:w-[150px] xl:w-[140px]"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="nav-manu-list hidden lg:flex flex-col lg:flex-row gap-[15px] items-center lg:gap-[18px] pb-0">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`xl:text-[18px] text-center leading-[120%] inline-block font-secondary font-normal px-[10px] transition-all ease-in-out border-b border-b-transparent py-[9px] cursor-pointer ${
                      pathname === item.href
                        ? 'text-secondary-100 border-b-secondary-100'
                        : 'text-mono-0 hover:text-secondary-100 hover:border-b-secondary-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop auth area */}
            <div className="nav-menu-auth-area hidden lg:block">
              <div className="before-login-feature items-center flex gap-6 flex-col md:flex-row md:gap-4">
                <Link
                  className="px-5 leading-[1] font-normal xl:text-[18px] text-mono-0 py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[12px] hover:text-secondary-100"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  href="/cafe-signup"
                  className="px-5 leading-[1] font-normal xl:text-[18px] text-mono-100 py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[11px] border border-mono-0 bg-mono-0 hover:text-secondary-100 hover:border-secondary-100"
                >
                  Cafe sign up →
                </Link>
              </div>

              <div className="after-login-feature h-[52px] hidden items-center gap-8">
                <Link className="caret-cart relative" href="/cart">
                  <Image
                    src="/images/icons/caret-image.svg"
                    alt="caret cart icon"
                    width={33}
                    height={30}
                  />
                  <span className="flex items-center justify-center absolute -top-3 right-0 font-secondary font-normal text-[16px] text-center leading-[100%] w-[19px] h-[19px] rounded-full !bg-secondary-100">
                    1
                  </span>
                </Link>
                <Link className="caret-cart-user" href="/user">
                  <Image
                    src="/images/icons/user-icon.svg"
                    alt="caret user icon"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderSection;

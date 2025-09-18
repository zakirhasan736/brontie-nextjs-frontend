'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const HeaderSection: React.FC = () => {
  const pathname = usePathname() || '/';
  const isHowItWorks = pathname === '/how-it-works';

  const navItems = [
    { href: '/gift', label: 'Gift' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/about-us', label: 'About us' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/featured-in', label: 'Featured In' },
  ];

  return (
    <header
      className={`header-section absolute top-0 z-[99999] w-full left-0 pt-[16px] pb-5 md:pb-[24px] ${
        isHowItWorks ? 'bg-primary-100' : 'bg-transparent'
      }`}
    >
      <div className="custom-container">
        <div className="header-wrapper w-full">
          <nav className="nav-menu-navbar justify-between flex w-full items-end gap-4 xl:gap-6">
            {/* MOBILE DRAWER: wraps only the mobile trigger + panel */}
            <div className="lg:hidden flex items-center justify-center w-full">
              <div className="drawer">
                {/* Checkbox controls the drawer state */}
                <input
                  id="mobile-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />

                {/* CONTENT (just the trigger & logo for mobile) */}
                <div className="drawer-content flex justify-between items-center">
                  {/* Trigger button */}
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
                      className="block"
                    />
                  </Link>
                </div>

                {/* SIDE PANEL */}
                <div className="drawer-side z-[99999]">
                  {/* Overlay to close on click */}
                  <label
                    htmlFor="mobile-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <aside className="min-h-[100vh] w-[85%] bg-primary-100 max-w-xs  shadow-xl flex flex-col">
                    {/* Header inside drawer */}
                    <div className="flex items-center justify-between px-4 py-3">
                      {/* <Link
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
                      </Link> */}
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

                    {/* Mobile nav items */}
                    <ul className="menu mt-[50px] px-4 gap-7">
                      {navItems.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`text-[22px] leading-[120%] font-secondary font-normal ${
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

                    {/* Mobile auth buttons */}
                    {/* <div className="mt-auto p-4 gap-3">
                      <Link
                        className="btn btn-ghost"
                        href="/login"
                        onClick={() => {
                          const el = document.getElementById(
                            'mobile-drawer'
                          ) as HTMLInputElement | null;
                          if (el) el.checked = false;
                        }}
                      >
                        Login
                      </Link>
                      <Link
                        href="/cafe-signup"
                        className="btn btn-primary"
                        onClick={() => {
                          const el = document.getElementById(
                            'mobile-drawer'
                          ) as HTMLInputElement | null;
                          if (el) el.checked = false;
                        }}
                      >
                        Cafe sign up →
                      </Link>
                    </div> */}
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

                      {/* After-login feature (example, still hidden) */}
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
                  className="sm:block hidden lg:w-[180px] xl:w-[234px]"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <ul className="nav-manu-list hidden lg:flex flex-col lg:flex-row gap-[29px] items-center ld:gap-[15px] pb-[13px]">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`xl:text-[22px] text-center leading-[120%] inline-block font-secondary font-normal px-[10px] transition-all ease-in-out border-b border-b-transparent py-[9px] cursor-pointer ${
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
            <div className="nav-menu-auth-area hidden lg:block mb-[8px]">
              <div className="before-login-feature items-center flex gap-6 flex-col md:flex-row md:gap-4">
                <Link
                  className="px-5 leading-[1] font-normal xl:text-[20px] text-mono-0 py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[12px] hover:text-secondary-100"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  href="/cafe-signup"
                  className="px-5 leading-[1] font-normal xl:text-[20px] text-mono-100 py-[17px] font-secondary h-[52.5px] flex items-center justify-center rounded-[11px] border border-mono-0 bg-mono-0 hover:text-secondary-100 hover:border-secondary-100"
                >
                  Cafe sign up →
                </Link>
              </div>

              {/* After-login feature (example, still hidden) */}
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
    </header>
  );
};

export default HeaderSection;

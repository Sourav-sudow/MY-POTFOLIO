"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Signature from "@/app/components/Signature";
import ShopifyLogo from "@/app/components/icon/Shopify.png";
import UWaterlooLogo from "@/app/components/icon/UWaterloo.png";
import SunnybrookLogo from "@/app/components/icon/Sunnybrook.png";
import BrowserbaseLogo from "@/app/components/icon/Browserbase.png";
import PolymarketLogo from "@/app/components/icon/Polymarket.png";
import IcpureLogo from "@/app/components/icon/Icpure.jpeg";
import KRMangalamLogo from "@/app/components/icon/KRMangalam.png";
import TKVLogo from "@/app/components/icon/TKV.png";
import AimaxonLogo from "@/app/components/icon/Aimaxon.png";
import PlacifyLogo from "@/app/components/icon/Placify.png";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto font-extralight">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            Marketing Intern —
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Image
                src={IcpureLogo}
                alt="Icpure Logo"
                width={14}
                height={14}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://icpure.com" className="font-medium">
                Icpure
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            BCA Student —
            <span className="inline-flex items-baseline gap-1 ml-2">
              <Image
                src={KRMangalamLogo}
                alt="KR Mangalam University Logo"
                width={14}
                height={14}
                className="object-contain relative top-[2px]"
              />
              <Link href="https://www.krmangalam.edu.in/" className="font-medium">
                KR Mangalam University
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            what i&apos;ve been building:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                created{" "}
                <Link href="https://lerno.ai" className="font-medium">
                  Lerno AI
                </Link>{" "}
                (5k+ views, 500+ stars, building Lerno AI learning platform)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built {" "}
                <Link href="https://jakesresu.me" className="font-medium">
                  Resume-Matcher
                </Link>{" "}
                in &lt; ↳ building AI Resume Job Matcher
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link href="https://rakshaalert.com" className="font-medium">
                  RakshaAlert
                </Link>{" "}
                (1,000+ users in &lt; 24 hours)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                built{" "}
                <Link
                  href="https://github.com/sourav"
                  className="font-medium"
                >
                  Automatic Attendance using Face Recognition
                </Link>
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">
            previously:
          </span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Operations Intern —
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={TKVLogo}
                    alt="TKV Solutions Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://tkvsolutions.com" className="font-medium">
                    TKV Solutions
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Marketing Intern —
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={AimaxonLogo}
                    alt="Aimaxon Marketing Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://aimaxon.com" className="font-medium">
                    Aimaxon Marketing
                  </Link>
                </span>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">
                ↳
              </span>
              <span className="text-stone-600 dark:text-stone-400">
                Cybersecurity Intern —
                <span className="inline-flex items-baseline gap-1 ml-2">
                  <Image
                    src={PlacifyLogo}
                    alt="Placify Technologies Logo"
                    width={14}
                    height={14}
                    className="object-contain relative top-[2px]"
                  />
                  <Link href="https://placify.io" className="font-medium">
                    Placify Technologies
                  </Link>
                </span>
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border border-stone-400 dark:border-stone-600 bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-extralight hover:scale-[1.02] active:scale-[0.98] shadow-sm"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex flex-col sm:flex-row items-center justify-end mt-8">
        <Signature />
      </div>
    </div>
  );
}

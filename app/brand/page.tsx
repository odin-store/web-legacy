"use client";

import { Metadata } from "next";
import logo from "@/public/brand/logo.png";
import logoColor from "@/public/brand/logo-color.png";
import Image from "next/image";

import "@/styles/brand/brand.scss";
import Link from "next/link";

export default function Brand() {
  return (
    <main>
      <h1>🎨 오딘 브랜드 리소스 센터</h1>
      <div className="brand-container">
        <div className="brand-remotes">
          <div className="brand-remotes-category">
            <p>브랜드 아이덴티티</p>
            <Link href={"/brand#logo"}>심볼 로고</Link>
            <Link href={"/brand#colors"}>브랜드 컬러</Link>
          </div>
        </div>
        <div className="brand-body">
          <div id="logo" className="brand-title">
            <h2>심볼 로고</h2>
            <p>
              프로젝트 오딘의 심볼 로고입니다. <br />
              색과 형태의 변형 등 임의의 수정 없이 사용해야 합니다.
            </p>
          </div>
          <div className="brand-logo-container">
            <div className="brand-logo">
              <p>오딘 브랜드 로고</p>
              <Image src={logo} alt="logo" />
              <a download="proposed_file_name">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                다운로드
              </a>
            </div>
            <div className="brand-logo">
              <p>오딘 브랜드 로고 다크</p>
              <Image src={logoColor} alt="logo" />
              <a>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                  />
                </svg>
                다운로드
              </a>
            </div>
          </div>
          <div id="colors" className="brand-title">
            <h2>브랜드 컬러</h2>
            <p>
              프로젝트 오딘의 브랜드 컬러입니다. <br />
              색과 형태의 변형 등 임의의 수정 없이 사용해야 합니다.
            </p>
          </div>
          <div className="brand-colors-container">
            <div className="brand-colors brand-color-black">
              <h3>블랙</h3>
              <p>#080808</p>
              <p>RGB(8, 8, 8)</p>
              <p>HSL(0, 0%, 3%)</p>
              <p>HWB(0, 3%, 96%)</p>
            </div>
            <div className="brand-colors brand-color-gold">
              <h3>골드</h3>
              <p>#F7C14C</p>
              <p>RGB(247, 193, 76)</p>
              <p>HSL(41, 91%, 63%)</p>
              <p>HWB(41, 29%, 3%)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

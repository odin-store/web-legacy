import logo from "@/public/brand/logo.png";
import Image from "next/image";

import "@/styles/main/main.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className="global-header">
      <div className="global-header-front">
        <a className="global-header-logo" href="/">
          <Image src={logo} alt="logo" />
        </a>
      </div>
      <div className="global-header-last">
        <Link href="https://youtube.com">개발자</Link>
        <Link href="/download" className="global-header-download">
          다운로드
        </Link>
      </div>
    </header>
  );
}

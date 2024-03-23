import logo from "@/public/brand/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-logo">
          <Image src={logo} alt="footer-logo" />
        </div>
        <div className="footer-items">
          <div className="footer-category">
            <h4>서비스</h4>
            <Link href={"/notice"}>공지사항</Link>
            <Link href={"/ad"}>광고 문의</Link>
            <Link href={"/developers"}>개발자 센터</Link>
            <Link href={"/docs/developers"}>개발자 문서</Link>
            <Link href={"/brand"}>브랜드 리소스 센터</Link>
            <Link href={"/status"}>서버 상태 확인</Link>
          </div>
          <div className="footer-category">
            <h4>지원</h4>
            <Link href={"/help"}>고객센터</Link>
            <Link href={"mailTo:admin@damie.works"}>이메일</Link>
            <Link href={"/report?type=copyright"}>저작권 침해 신고</Link>
          </div>
          <div className="footer-category">
            <h4>법적 고지</h4>
            <Link href={"/docs/term-of-services"}>서비스 이용 약관</Link>
            <Link href={"/docs/privacy"}>개인정보 처리방침</Link>
            <Link href={"/license"}>라이선스</Link>
          </div>
          <div className="footer-category">
            <h4>팀</h4>
            <Link href={"/jobs"}>채용 정보</Link>
            <Link href={"/team"}>팀 정보</Link>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © {new Date().getFullYear()} project odin. All rights reserved
      </p>
    </footer>
  );
}

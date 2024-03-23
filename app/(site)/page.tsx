import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/main/main.scss";

import screenshot from "@/public/global/screenshot.png";
import purchase from "@/public/global/purchase.png";
import drmFree from "@/public/global/drm-free.png";
import fee from "@/public/global/fee.png";

export const metadata: Metadata = {
  title: "프로젝트 오딘",
  description: "게이머들을 위한 신세대 게이밍 플랫폼, 오딘입니다.",
};

export default function Home() {
  return (
    <>
      <section className="main-first">
        <div className="main-first-title">
          <p>The New-Age</p>
          <h1>Gaming Platform</h1>
        </div>
        <div className="main-first-desc">
          <p>오딘은 인디 게임을 위한 신세대 게이밍 플랫폼입니다.</p>
          <div className="main-first-buttons">
            <Link href="/download">다운로드</Link>
            <Link href="https://github.com/odin-store/native">Github</Link>
          </div>
        </div>
        <Image
          className="main-first-screenshot"
          src={screenshot}
          alt="screenshot"
        />
      </section>
      <section className="main-second">
        <div className="main-second-title">
          <h2>게임들을 쉽게 접해 보세요</h2>
          <p>클릭 한 번에 다운로드부터 플래이까지</p>
        </div>
      </section>
      <section className="main-third">
        <div className="main-third-items">
          <div className="main-third-title">
            <h2>쉬운 결제</h2>
            <p>
              토스페이먼츠와의 연동으로, 더욱 쉬운 결제가 가능해요.
              <br />
              국내 대부분의 카드사와 토스페이 등 일부 간편 결제를 지원하고
              있어요.
            </p>
            <a href="https://www.tosspayments.com/" target="_blank">
              토스페이먼츠 방문하기
            </a>
          </div>
          <Image src={purchase} alt="purchase" />
        </div>
        <div className="main-third-items">
          <div className="main-third-title">
            <h2>DRM-free</h2>
            <p>
              오딘은 100% DRM-free 정책을 채용했어요.
              <br />
              내가 구매한 게임은 내 어느 컴퓨터에서나 쉽게 이용이 가능하고,
              <br />그 누구도 게임 플래이를 방해하지 않을 거에요.
            </p>
            <a>DRM 정책 확인하기</a>
          </div>
          <Image src={drmFree} alt="drm-free" />
        </div>
        <div className="main-third-items">
          <div className="main-third-title">
            <h2>선택적 수수료 정책</h2>
            <p>
              수수료를 최소 10%에서 최대 90%까지 선택하실 수 있어요.
              <br />
              개발사에겐 적은 부담을, 소비자에겐 더 적은 가격으로
              <br />
              모두에게 이득인 가격 정책을 선보여요.
            </p>
            <a>수수료 정책 확인하기</a>
          </div>
          <Image src={fee} alt="selectable-fee" />
        </div>
      </section>
      <section className="section-four">
        <h3>..이것 말고도 많은 기능들이 준비되어 있어요!</h3>
        <Link href="/download">다운로드</Link>
      </section>
    </>
  );
}

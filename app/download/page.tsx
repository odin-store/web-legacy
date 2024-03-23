import { Metadata } from "next";

import "@/styles/download/download.scss";

export const metadata: Metadata = {
  title: "다운로드 - 프로젝트 오딘",
  description: "게이머들을 위한 신세대 게이밍 플랫폼, 오딘입니다.",
};

export default function Download() {
  return (
    <main>
      <div className="download-main">
        <h1>Odin Launcher 다운로드</h1>
        <p>
          새로운 세대의 게임 런처와 함께, <br />
          더욱 혁신적인 플래이 경험을 느껴 보세요.
        </p>
        <button>
          <svg
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
              d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"
            />
          </svg>
          Download For Windows
        </button>
      </div>
    </main>
  );
}

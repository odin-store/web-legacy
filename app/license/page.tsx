import Link from "next/link";

import "@/styles/license/license.scss";

export default function License() {
  return (
    <main>
      <div className="license-title">
        <h1>📜 Odin-Open-Sources 라이선스</h1>
        <p>
          오딘이 오픈 소스로 제공하는 모든 코드들은 아래 라이선스를 따릅니다.
        </p>
      </div>
      <Link
        href={"https://www.mozilla.org/en-US/MPL/2.0/"}
        className="license-link"
      >
        라이선스 전문 확인하기
      </Link>
    </main>
  );
}

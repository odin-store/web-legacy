import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>:(</h2>
      <h1>404 Not Found</h1>
      <p>페이지를 찾을 수 없었어요..</p>
      <Link href={"/"}>홈으로 돌아가기</Link>
    </div>
  );
}

import NoticeItem from "@/components/notice/items";
import "@/styles/notice/notice.scss";

export default function Notice() {
  return (
    <main>
      <h1 className="page-title">📢 Notice</h1>
      <div className="notice-body"></div>
      <div className="notice-end">
        <h4>상위 5개를 제외한 공지들은 모두 삭제됩니다.</h4>
        <p>모든 공지사항들은 클라이언트와 동기화됩니다.</p>
      </div>
    </main>
  );
}

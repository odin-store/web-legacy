import Link from "next/link";

export default function NoticeItem(props: {
  title: string;
  contents: string;
  id: number;
}) {
  return (
    <Link href={`/notice/${props.id}`}>
      <div className="notice-item">
        <h3>{props.title}</h3>
        <p>{props.contents.substring(0, 40) + ".."}</p>
      </div>
    </Link>
  );
}

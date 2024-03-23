import leeGyuYeon from "@/public/teammates/leegyuyeon.jpg";
import minSung from "@/public/teammates/minsung.jpg";
import minHo from "@/public/teammates/minho.jpg";
import yeonTaek from "@/public/teammates/yeontaek.jpg";
import junSeo from "@/public/teammates/junseo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import "@/styles/teammates/teammate.scss";

export const metadata: Metadata = {
  title: "프로젝트 오딘",
  description: "게이머들을 위한 신세대 게이밍 플랫폼, 오딘입니다.",
};

export default function Team() {
  return (
    <main>
      <div className="team-title">
        <h1>Our Teammates</h1>
        <p>
          프로젝트 오딘의 팀원들을 소개할게요!
          <br />
          모두 게임 문화의 혁신을 위해 열심히 노력하고 있어요 :)
        </p>
      </div>
      <h1>💼 Core Teammates</h1>
      <div className="teammates-container">
        <div className="teammate">
          <div className="teammate-profile">
            <Image src={leeGyuYeon} alt="gyuyeon" />
          </div>
          <div className="teammate-info">
            <Link
              className="teammate-title"
              href={"https://instagram.com/ekal_.index"}
              target="_blank"
            >
              <h3>이규연</h3>
              <p>@ekal_.index</p>
            </Link>
            <div className="teammate-roles">
              <p>Project Leader</p>
              <p>Lead Developer</p>
              <p>Client Maintainer</p>
              <p>Server Maintainer</p>
            </div>
          </div>
        </div>
        <div className="teammate">
          <div className="teammate-profile">
            <Image src={minSung} alt="minsung" />
          </div>
          <div className="teammate-info">
            <Link
              className="teammate-title"
              href={"https://www.instagram.com/minsung__25"}
              target="_blank"
            >
              <h3>신민성</h3>
              <p>@minsung__25</p>
            </Link>
            <div className="teammate-roles">
              <p>Backend Developer</p>
              <p>Cron Server Maintainer</p>
            </div>
          </div>
        </div>
        <div className="teammate">
          <div className="teammate-profile">
            <Image src={junSeo} alt="minsung" />
          </div>
          <div className="teammate-info">
            <Link
              className="teammate-title"
              href={"https://www.instagram.com/jse0._yo"}
              target="_blank"
            >
              <h3>이준서</h3>
              <p>@jse0._yo5</p>
            </Link>
            <div className="teammate-roles">
              <p>Backend Developer</p>
              <p>Cron Server Maintainer</p>
            </div>
          </div>
        </div>
        <div className="teammate">
          <div className="teammate-profile">
            <Image src={yeonTaek} alt="minsung" />
          </div>
          <div className="teammate-info">
            <Link
              className="teammate-title"
              href={"https://www.instagram.com/motden_kong"}
              target="_blank"
            >
              <h3>공연택</h3>
              <p>@motden_kong</p>
            </Link>
            <div className="teammate-roles">
              <p>Backend Developer</p>
              <p>Client Updater Maintainer</p>
            </div>
          </div>
        </div>
        <div className="teammate">
          <div className="teammate-profile">
            <Image src={minHo} alt="minsung" />
          </div>
          <div className="teammate-info">
            <Link
              className="teammate-title"
              href={"https://www.instagram.com/piz_know55"}
              target="_blank"
            >
              <h3>최민호</h3>
              <p>@piz_know55</p>
            </Link>
            <div className="teammate-roles">
              <p>Backend Developer</p>
              <p>Recommand Algorithm Maintainer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

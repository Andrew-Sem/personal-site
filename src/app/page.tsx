import { Link } from "@/components/Link";
import { P } from "@/components/P";

export default function Home() {
  return (
    <main className={"container mx-auto px-4"}>
      <div className={"lg:w-3/5"}>
        <h1 className={"text-7xl mt-10 font-semibold"}>Hello</h1>
        <h3 className={"text-3xl mt-5 "}>My name is Andrew Semyonov</h3>
        <P>
          I am frontend developer, currently located in Volzhskiy, Russia.
          <br />
          You can find my projects on&nbsp;
          <Link href={"https://github.com/Andrew-Sem"}>GitHub</Link>
        </P>
        <P>
          Also take a look at my collaboration with backend developer&nbsp;
          <Link href={"https://github.com/SergeyPodgorny"}>
            Sergey Podgorny
          </Link>
          &nbsp;-&nbsp;
          <Link
            href={
              "https://github.com/Friendly-neighborhood-development/Fnd_games_store"
            }
          >
            Games Store
          </Link>
        </P>
        <P>
          My&nbsp;
          <Link href="/pdfs/Resume.pdf" target="_blank">
            resume
          </Link>
          &nbsp;is available for your perusal
        </P>
        <div className={"mt-5"}>
          <h4 className={"text-2xl"}>Contact me</h4>
          <ul className={"space-y-1"}>
            <li>
              <Link href={"http://t.me/keax4208"}>Telegram</Link>
              <br />
            </li>
            <li>
              <Link href={"mailto:andrew.semyonov02@gmail.com"}>Email</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

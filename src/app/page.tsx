import { Link } from "@/components/Link";
import { P } from "@/components/P";

export default function Home() {
  return (
    <main className={"container mx-auto px-4"}>
      <div className={"lg:w-3/5"}>
        <h1 className={"text-7xl mt-10 font-semibold"}>Привет!</h1>
        <h3 className={"text-3xl mt-5 "}>Меня зовут Андрей Семёнов</h3>
        <P>
          Я фронтенд разработчик, сейчас живу в Волжском, Россия.
          <br />
          Вы можете найти мои проекты на&nbsp;
          <Link href={"https://github.com/Andrew-Sem"}>GitHub</Link>
        </P>
        <P>
          Также взгляните на мою коллаборацию с бэкенд разработчиком&nbsp;
          <Link href={"https://github.com/SergeyPodgorny"}>
            Сергей Подгорный
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
          Моё&nbsp;
          <Link href="/pdfs/Resume.pdf" target="_blank">
            резюме
          </Link>
          &nbsp;доступно для вашего ознакомления
        </P>
        <div className={"mt-5"}>
          <h4 className={"text-2xl"}>Свяжитесь со мной</h4>
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

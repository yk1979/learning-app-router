import Link from "next/link";
import styles from "./page.module.css";

const contents = ["Return Message"];

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        {contents.map((content, i) => {
          const num = i + 1;
          return (
            <li key={num}>
              <Link href={`/sample${num}`}>{content}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

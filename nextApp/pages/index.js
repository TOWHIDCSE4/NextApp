import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple Next Project</title>
        <meta name="description" content="Developed By Johirul Islam Nishat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container className={styles.container}>
          <Navbar />
          <div>
            <div className={styles.buttonStyles}>
              <Link href="/Page2" passHref>
                <a className={styles.mainButtons} rel="noopener noreferrer">
                  {" "}
                  スタッフ一覧
                </a>
              </Link>
              <Link href="/Page3" passHref className={styles.mainButtons}>
                <a className={styles.mainButtons} rel="noopener noreferrer">
                  {" "}
                  店舗一覧
                </a>
              </Link>
              <Link href="/Page4" passHref className={styles.mainButtons}>
                <a className={styles.mainButtons} rel="noopener noreferrer">
                  {" "}
                  エリア一覧
                </a>
              </Link>
              <Link href="/" passHref className={styles.mainButtons}>
                <a
                  className={styles.mainButtons}
                  style={{
                    marginTop: "50px",
                    marginBottom: "174px",
                  }}
                  rel="noopener noreferrer">
                  {" "}
                  戻る
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

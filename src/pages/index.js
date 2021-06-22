import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
    return(
        <div className={styles.container}>
        <Head>
            <title>Tela Incial</title>
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Bem vindo ao <a href="http://nextjs.org">site!</a>
            </h1>
        </main>
        </div>
    );
}
import Head from 'next/head';
import { Button } from '@material-ui/core';


export default function Home() {
    return(
        <div>
        <Head>
            <title>Tela Incial</title>
        </Head>

        <main>
            <h1>
                Bem vindo ao <a href="http://nextjs.org">site!</a>
                <br/>
                <Button variant="contained" color="primary">
                    Entrar
              </Button>
            </h1>
        </main>
        </div>
    );
}
import Layout from '../components/Layout';
import Image from 'next/image';
import Perfil from '../../public/perfil.jpeg';
import { AiFillGithub } from 'react-icons/ai';




export default function Home() {
    return(
        <Layout>
          <div className="container">
              <div className="desc">
                    <h1>Christian Pereira, <br/> Desenvolvedor Web e Mobile.</h1>
                    <p>Experiência em tecnologia e desenvolvimento, atualmente faço trabalhos como freelancer na área de desenvolvimento. Sou recém-formado em Análise e Desenvolvimento de Sistemas, estou me dedicando agora ao estudo de soluções FullStack e práticas Devops.
                    <p>. Conhecimento básico nas linguagens: Java, PHP, C#;</p>
                    <p>. Instalação e uso de IDEs (NetBeans, Android Studio, Visual Studio Code);</p>
                    <p>. Manutenção e instalação de WordPress;</p>
                    <p>. Versionameto (Git/GitHub);</p>
                    <p>. Metodologia Ágil;</p>
                    <p>Pró-ativo, dinamismo, facilidade de aprendizado e relacionamento, comunicação e trabalho em equipe.</p>
                    </p>
                      <button>Projetos no GitHub <p className="github"><AiFillGithub size={35}/></p></button>
              </div>
              <div className="container">
                  <div className="card">
                       <Image src={Perfil} alt="Perfil"/>
                  </div>
              </div>
            </div>
        </Layout>
    );
}
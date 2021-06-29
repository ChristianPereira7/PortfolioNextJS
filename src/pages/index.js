import Layout from '../components/Layout';
import Image from 'next/image';
import Perfil from '../../public/perfil.jpeg';
import Github from '../../public/github.jpg';
import React from '../../public/reactjs.jpg';
import Next from '../../public/nextjs.jpg';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';



export default function Home() {
    return(
        <Layout>
          <div className="container">
              <div className="desc">
                    <h1>Desenvolvedor Web e Mobile.</h1>
                    <p>Tecnologias que uso para desenvolvimento:</p>
                 
                 
                    <ul className="stacks">
                      <li className="git">  <Image src={Github} alt="git" width={300} height={300} className={'img'}/></li>
                      <li className="next">  <Image src={Next} alt="nextjs"width={300} height={300} className={'img'}/></li>
                      <li className="react">  <Image src={React} alt="reactjs" width={300} height={300} className={'img'}/></li>
                    </ul>
                  
                   
                      <button>Conheça o meu portfolio<p className="seta-direita"><FiArrowRight size={35}/></p></button>
              </div>
              <div className="container">
                  <div className="card">
                      <div>
                          <Image src={Perfil} alt="Perfil"/>
                      </div>
                      <div>
                      <h2 className="name">Christian Pereira</h2>
                      <p class="prev">Tenho 20 anos, sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho.</p>  
                         <div className="social-media">
                            <a href="https://github.com/ChristianPereira7"><buttom className="github"><AiFillGithub size={35}/></buttom></a>
                            <a href="https://www.instagram.com/christian.pereira_/"><buttom className="insta"><AiOutlineInstagram size={35}/></buttom></a>
                            <a href="https://linkedin.com/in/christian-p-b8b624195"><buttom className="linkedin"><AiFillLinkedin size={35}/></buttom></a>
                         </div>
                      </div>
                  </div>
                  
              </div>
            </div>
        </Layout>
    );
}




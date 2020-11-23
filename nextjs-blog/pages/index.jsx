import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.aboutText}>
          Renan Pereira Biazini concluiu o mestrado em Ciência da Computação
          pela Universidade Estadual Paulista [UNESP - FCT - Presidente
          Prudente] em 2020. Atualmente é bolsista FAPESP TT-IV no projeto
          Tecnologia GNSS no suporte à Navegação Aérea. Já foi programador
          full-stack WEB, com ênfase em tecnologias da stack JavaScript (NodeJS
          e ReactJS) em uma empresa de desenvolvimento. Tem experiência na área
          de Ciência da Computação, com ênfase em Banco de Dados e Engenharia de
          Software, tendo já atuado na área como Programador, incluindo
          participação em um projeto de sistema institucional da Unesp. Sua
          principais áreas de interesse são: Engenharia de Software e
          Visualização de Informação e Científica.
        </p>
      </section>
      <section>
        <a href="http://lattes.cnpq.br/3678045617529892">Currículo Lattes</a>
        <br />
        <a href="https://github.com/Biazza">GitHub</a>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

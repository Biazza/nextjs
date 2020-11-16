import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Concluiu o mestrado em Ciência da Computação pela Universidade
          Estadual Paulista [UNESP - FCT - Presidente Prudente] em 2020.
          Atualmente é programador full-stack JS em uma empresa de
          desenvolvimento. Tem experiência na área de Ciência da Computação, com
          ênfase em Banco de Dados e Engenharia de Software, tendo já atuado na
          área como Programador, incluindo participação em um projeto de sistema
          institucional da Unesp. Sua principais áreas de interesse são:
          Engenharia de Software e Visualização de Informação e Científica.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
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

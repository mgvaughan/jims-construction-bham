import Head from "next/head";
import HomePage from "@/components/HomePage";
import { createClient } from "contentful";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "jimsConstructionBham",
  });

  return {
    props: { projects: res.items },
    revalidate: 10
  };
}

export default function Home({ projects }) {
  console.log(projects);

  return (
    <div>
      <Head>
        <title>Jim's Construction Bham</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />

      <About />
    </div>
  );
}

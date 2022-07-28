import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function FirstPost() {
  const router = useRouter();

  useEffect(() => {
    // router.push("/posts/first-post/?counter=10", undefined, { shallow: true });
  }, []);

  useEffect(() => {
    alert(JSON.stringify(router.query));
  }, [router.query]);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}

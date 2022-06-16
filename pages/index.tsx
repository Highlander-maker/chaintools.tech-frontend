import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import { sanityClient} from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Chaintools.tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-slate-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-semibold">
            <span className="underline decoration-black decoration-4">
              Chaintools.tech
            </span>{" "}
            is a place to come learn, stake, support the world of decentralised
            blockchains
          </h1>
          <h2>
            Production grade validators securing multiple chains accros the
            cosmos eco-system. We validate, teach, offer services. Support us
            with your stake and earn high APY rewards paid out daily
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:-full"
          src="/public/chaintools-logo-black.svg"
          alt=""
        />
      </div>

      {/* Posts */}
      <div>
        {posts.map(post => (
          <Link key={post._id} href={`/post/s{post.slug.current}`}>
            <div>
              <h1> i am a post</h1>
              {/* //<img src={urlFor(post.mainImage).url()!} alt="" /> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
     name,
    image
  },
    description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

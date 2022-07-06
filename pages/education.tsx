import React from "react";
import { Post } from "../typings";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Layout from "../components/Layout";

interface Props {
  posts: [Post];
}

function education({ posts }: Props) {
  return (
    // Posts
    <Layout>
      <div className="bg-slate-500 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-3 md:gap-4 p-5 md:p-6">

        
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                  alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by {post.author.name}
                    </p>
                  </div>

                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      
    </Layout>
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

export default education;

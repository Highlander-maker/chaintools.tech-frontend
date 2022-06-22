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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        <div>
          {posts.map((post) => (
            <Link key={post._id} href={`/post/s{post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img 
                className="h-60 w-full object-cover group-hover:scale-185 transition-transform duration-200 ease-in-out" 
                src={urlFor(post.mainImage).url()!} alt="" />
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

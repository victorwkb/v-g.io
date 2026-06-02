import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import CustomImage from "./Image";

const components = {
  Image: CustomImage,
};

export default async function MdxWrapper({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeSlug],
      },
    },
    components,
  });

  return <>{content}</>;
}

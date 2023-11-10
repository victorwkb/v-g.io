import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, '');

const projectComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: 'string',
    resolve: (doc) => `/projects${getSlug(doc)}/image.png`,
  }
}

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: false,
    },
    updatedAt: {
      type: 'string',
      required: false,
    },
    computedFields: projectComputedFields,
  }
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  }
})

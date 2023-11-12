import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, '');

const projectComputedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: 'string',
    resolve: (doc) => `/projects/${getSlug(doc)}/image.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    url: { type: 'string', required: false },
    tags: { type: 'json', required: false },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
  mdx: {
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});

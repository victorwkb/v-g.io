import { useMDXComponent } from "next-contentlayer/hooks";

const components = {};

export default function MdxWrapper({ code }: {code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}

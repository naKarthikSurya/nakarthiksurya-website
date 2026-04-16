import ProjectDetail from "@/pages/ProjectDetail";
import { projects } from "@/config/projects";
import { GetStaticPaths, GetStaticProps } from "next";

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params?.id || null,
    },
  };
};

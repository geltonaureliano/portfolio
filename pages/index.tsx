import Home from 'components/home-page/home';
import { GetStaticProps, NextPage } from 'next';
import { BlogPostProps } from 'interfaces/interface';
import PageLayout from 'components/layouts/pageLayout';

const Index: NextPage<BlogPostProps> = () => {
  return (
    <PageLayout title="Gelton Aureliano - Full Stack Developer">
      <Home />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1
  };
};

export default Index;

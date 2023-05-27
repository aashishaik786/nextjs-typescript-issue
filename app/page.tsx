import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
    return [];
};

export const getStaticPaths: GetStaticPaths = async () => {
    // ...
    return [];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    return [];
};

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return null
}

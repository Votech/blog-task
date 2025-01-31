import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import CategorySection from '@/features/categorySelection/components/CategorySection';
import PostsSection from '@/features/posts/components/PostsSection/PostsSection';

export default function Home() {
  return (
    <>
      <ContentWrapper className="my-6 md:my-10">
        <h1 className="bg-primary m-0">Blog Edukacyjny</h1>
      </ContentWrapper>
      <ContentWrapper className="bg-gray-100 py-6 md:py-10">
        <CategorySection />
      </ContentWrapper>
      <ContentWrapper className="py-6 md:py-10">
        <PostsSection />
      </ContentWrapper>
    </>
  );
}

import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import CategorySection from '@/features/categorySelection/components/CategorySection';
import PostsSection from '@/features/posts/components/PostsSection';

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <h1 className="bg-primary">Blog Edukacyjny</h1>
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

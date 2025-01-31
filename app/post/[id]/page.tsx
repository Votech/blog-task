import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import PostPageContent from '@/features/postPage/components/PostPageContent';
import PostPageHeader from '@/features/postPage/components/PostPageHeader';

export default function PostPage() {
  return (
    <ContentWrapper>
      <div className="max-w-4xl">
        <div className="mb-6 md:mb-10">
          <PostPageHeader />
        </div>
        <PostPageContent />
      </div>
    </ContentWrapper>
  );
}

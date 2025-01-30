'use client';

import useMobileVersion from '@/hooks/useMobileVersion';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Logo from '../icons/Logo';
import { TEXT } from './constants';

export default function Header() {
  const isMobile = useMobileVersion(640);

  return (
    <header>
      <ContentWrapper>
        <div className="py-5 sm:py-10">
          <Logo className="h-14" showText={!isMobile} />
        </div>
        {!isMobile && (
          <div className="border-b border-gray-300 pb-3">
            <p className="relative pl-3 text-xs font-bold before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-2 before:-translate-y-1/2 before:bg-current before:content-['']">
              {TEXT.BLOG.toUpperCase()}
            </p>
          </div>
        )}
      </ContentWrapper>
    </header>
  );
}

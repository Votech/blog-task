'use client';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Logo from '../icons/Logo';
import LogoMobile from '../icons/LogoMobile';
import { TEXT } from './constants';

export default function Header() {
  return (
    <header>
      <ContentWrapper>
        <div className="py-5 sm:py-10">
          <Logo className="hidden h-14 sm:block" />
          <LogoMobile className="h-14 sm:hidden" />
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-300 pb-3">
            <p className="relative pl-3 text-xs font-bold before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-2 before:-translate-y-1/2 before:bg-current before:content-['']">
              {TEXT.BLOG.toUpperCase()}
            </p>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
}

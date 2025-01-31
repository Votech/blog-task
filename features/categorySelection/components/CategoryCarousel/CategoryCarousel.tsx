import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import CategorySlides from '../CategorySlides';

export function CategoryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className="relative flex">
      <div className="embla max-w-60 xs:max-w-72">
        {/* Dots */}
        <div className="flex justify-center space-x-2 pb-6">
          {Array.from({ length: emblaApi?.scrollSnapList().length || 0 }).map(
            (_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full border border-category-blue-dark ${
                  index === selectedIndex && 'bg-category-blue-dark'
                }`}
                onClick={() => scrollTo(index)}
              />
            ),
          )}
        </div>
        {/* Viewport */}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <CategorySlides />
          </div>
        </div>
        {/* Arrows */}
        <button
          className="embla__prev absolute -left-12 top-1/2 -translate-y-1/2 rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft strokeWidth={0.5} className="size-12" />
        </button>
        <button
          className="embla__next absolute -right-12 top-1/2 -translate-y-1/2 rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight strokeWidth={0.5} className="size-12" />
        </button>
      </div>
    </div>
  );
}

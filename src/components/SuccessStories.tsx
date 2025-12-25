import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';

const stories = [
  {
    quote: "퇴직하고 매장 3개를 운영 중인데, 매출이 다 잘 나와요. 안정적인 수익이 보장되는 사업이에요.",
    author: "김OO 점주",
    location: "서울 강남구",
  },
  {
    quote: "무인으로 편하게 운영하면서 이 정도 수익률을 낼 수 있는 사업이 또 있을까요?",
    author: "이OO 점주",
    location: "경기 성남시",
  },
  {
    quote: "하루 30분 투자해 월 500 매출, 경험 없이도 쉽게 운영할 수 있어요.",
    author: "박OO 점주",
    location: "인천 부평구",
  },
];

export const SuccessStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section id="story" className="py-24 section-darker relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="section-title mt-4">
            워시24<br />
            <span className="text-primary">성공 창업스토리</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {stories.map((story, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-card rounded-3xl p-8 md:p-12 text-center border border-border/30">
                    <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                      "{story.quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{story.author.charAt(0)}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{story.author}</p>
                        <p className="text-sm text-muted-foreground">{story.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'w-6 bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-card transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-center mt-4 text-muted-foreground">
            <span className="text-primary font-bold">{String(selectedIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(stories.length).padStart(2, '0')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

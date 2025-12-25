import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const salesData = [
  { size: '11평', revenue: '855만 원', location: '서울 소재 K매장' },
  { size: '11평', revenue: '816만 원', location: '서울 소재 C매장' },
  { size: '11평', revenue: '917만 원', location: '경기 소재 G매장' },
  { size: '12평', revenue: '1,166만 원', location: '서울 소재 A매장' },
  { size: '10평', revenue: '1,138만 원', location: '서울 소재 B매장' },
  { size: '15평', revenue: '1,018만 원', location: '경기 소재 E매장' },
];

export const SalesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            빨래방과 드라이클리닝 매출로
            <br />
            <span className="text-primary">비수기 걱정 없는 창업</span>
          </h2>
          <p className="section-subtitle mx-auto">
            세탁 산업의 현대화를 지향하는 워시24는 빨래방과 드라이클리닝
            매출 동시 확보로 비수기 걱정 없이 안정적인 사업 운영이 가능합니다.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {salesData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[300px] md:w-[350px]"
                >
                  <div className="slider-card h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${index + 10}/400/300`}
                        alt={`${item.location} 이미지`}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm mb-1">{item.size} 월 매출</p>
                      <p className="text-3xl font-bold text-primary mb-2">{item.revenue}</p>
                      <p className="text-foreground font-medium">워시24 {item.location}</p>
                      <p className="text-xs text-muted-foreground mt-2">*실제 매장 사진과 다를 수 있습니다</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

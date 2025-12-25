import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const stores = [
  { name: '워시24 강남점', address: '서울 강남구 테헤란로 123' },
  { name: '워시24 홍대점', address: '서울 마포구 와우산로 45' },
  { name: '워시24 판교점', address: '경기 성남시 분당구 판교로 67' },
  { name: '워시24 인천점', address: '인천 연수구 송도대로 89' },
  { name: '워시24 부산점', address: '부산 해운대구 센텀중앙로 101' },
];

export const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredStores = stores.filter(
    store => store.name.includes(searchQuery) || store.address.includes(searchQuery)
  );

  return (
    <section id="store" className="py-24 section-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Store Locator</span>
          <h2 className="section-title mt-4">
            매장 찾기
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Map placeholder */}
          <div className="aspect-video bg-secondary rounded-2xl overflow-hidden mb-8 relative">
            <img
              src="https://picsum.photos/seed/map/1200/600"
              alt="매장 지도"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">전국 150+ 매장</p>
                <p className="text-muted-foreground text-sm">가까운 워시24 매장을 찾아보세요</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="매장명 또는 주소 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-12"
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              검색
            </Button>
          </div>

          {/* Store list */}
          <div className="bg-card rounded-2xl border border-border/30 divide-y divide-border/30">
            <div className="p-4 text-sm text-muted-foreground">
              {filteredStores.length}개의 지점이 검색되었습니다.
            </div>
            {filteredStores.map((store, index) => (
              <div
                key={index}
                className="p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{store.name}</p>
                  <p className="text-sm text-muted-foreground">{store.address}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shirt, Home, Footprints } from 'lucide-react';

const services = [
  {
    icon: Shirt,
    title: '드라이클리닝',
    items: '니트, 와이셔츠, 패딩 등',
  },
  {
    icon: Home,
    title: '리빙',
    items: '이불, 커튼, 러그 등',
  },
  {
    icon: Footprints,
    title: '신발',
    items: '운동화, 골프화 등',
  },
];

const tabs = [
  {
    id: 'dry',
    title: '드라이클리닝',
    subtitle: '국내 최초 리얼스타 도입',
    description: '국내 세탁 서비스 최초로 최고급 드라이클리닝 머신인 리얼스타를 도입해 사용하고 있습니다. 냄새가 심하고, 환경 오염을 일으키는 석유계 용제가 아닌 하이드로카본 용제를 사용해 세정력을 높이고, 의류 손상을 방지합니다.',
  },
  {
    id: 'stain',
    title: '얼룩 제거',
    subtitle: '고객의 요청 사항에 딱 맞춘 세탁 케어',
    description: '스마트팩토리에 입고된 의류는 소재, 얼룩, 세탁 방법, 고객의 요청사항에 따라 맞춤 세탁으로 진행됩니다. 얼룩이 있는 드라이클리닝 의류는 세탁 전문가가 오염 원인을 분석해 전문 도구와 전처리제로 손상 없이 얼룩을 제거합니다.',
  },
  {
    id: 'steam',
    title: '스팀 터널',
    subtitle: '스팀 터널로 주름 ∙ 세균 ∙ 바이러스 완벽 제거',
    description: 'STEP 01: 약 100℃에 가까운 수증기를 뿜어내 주름을 펴줍니다. STEP 02: 고온 바람으로 옷에 남아있는 먼지는 물론 세균과 바이러스를 제거합니다.',
  },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('dry');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section id="about" className="py-24 section-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section 1: Brand intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Wash24</span>
          <h2 className="section-title mt-4">
            세탁이 필요할 때 언제나,<br />
            <span className="text-primary">워시24</span>
          </h2>
          <p className="section-subtitle mx-auto">
            워시24는 빨래방과 드라이클리닝의 기능을 하나로 결합하여
            365일 24시간 내내 세탁에 대한 고객의 니즈를 한 번에 해결하는
            가장 스마트한 무인 세탁소입니다.
          </p>
        </motion.div>

        {/* Dry Cleaning Station */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent text-sm font-medium">Dry cleaning system</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
              빨래방에<br />
              <span className="text-primary">드라이클리닝</span>을 더하다
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              워시24는 빨래방과 세탁소를 통합한 스마트 무인 세탁 사업을 지향합니다.
              특허 받은 자체 개발 드라이클리닝 스테이션을 통해
              드라이클리닝과 운동화 세탁 서비스를 제공하여 폭넓은 고객의
              니즈를 수용하는 새로운 셀프 빨래방 트렌드를 선도합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="hash-tag">#드라이클리닝 스테이션</span>
              <span className="hash-tag">#수준 높은 세탁 퀄리티</span>
              <span className="hash-tag">#빨래방+세탁소 매출</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/laundry1/800/500"
              alt="드라이클리닝 스테이션"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            드라이클리닝 스테이션
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="feature-card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.items}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            까다로운 얼룩까지<br />
            <span className="text-primary">워시24가 해결해 드릴게요</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {activeContent && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                <img
                  src={`https://picsum.photos/seed/${activeContent.id}/600/400`}
                  alt={activeContent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">{activeContent.title}</h4>
                <p className="text-primary font-medium mb-4">{activeContent.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{activeContent.description}</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

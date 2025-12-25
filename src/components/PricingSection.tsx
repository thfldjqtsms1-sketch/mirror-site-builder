import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 'combo',
    name: '빨래+드라이',
    description: '빨래방과 드라이클리닝을 함께 운영하는 복합형 매장',
    features: [
      '빨래방 세탁기 & 건조기',
      '드라이클리닝 스테이션',
      '통합 무인 결제 시스템',
      '본사 운영 지원',
      '신발 세탁 서비스',
    ],
    recommended: true,
  },
  {
    id: 'laundry',
    name: '빨래방 ONLY',
    description: '셀프 빨래방 전문 매장',
    features: [
      '고성능 세탁기 & 건조기',
      '무인 결제 시스템',
      '본사 운영 지원',
      '24시간 운영',
    ],
    recommended: false,
  },
  {
    id: 'dry',
    name: '드라이 ONLY',
    description: '드라이클리닝 전문 매장',
    features: [
      '드라이클리닝 스테이션',
      '무인 접수 시스템',
      '본사 스마트 팩토리 연동',
      '고급 의류 케어',
    ],
    recommended: false,
  },
];

export const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('combo');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cost" className="py-24 section-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="section-title mt-4">
            합리적인 비용으로<br />
            <span className="text-primary">안정적인 사업 수익</span>을 창출해 보세요
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {pricingPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={`tab-btn ${activeTab === plan.id ? 'active' : ''}`}
            >
              {plan.name}
            </button>
          ))}
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`feature-card relative ${
                plan.recommended ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  추천
                </div>
              )}
              
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                  plan.recommended
                    ? 'bg-primary text-primary-foreground hover:shadow-gold'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                상담 신청하기
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

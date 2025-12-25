import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, MapPin, FileText, FileCheck, Building, Settings, GraduationCap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: '창업 상담',
    description: '워시24 창업 전문가의 1:1 맞춤 상담',
  },
  {
    number: '02',
    icon: MapPin,
    title: '입지/상권 분석',
    description: '희망 지역에 적합한 상권 조사 및 분석',
  },
  {
    number: '03',
    icon: FileText,
    title: '세탁 장비 설치 타당성 검토',
    description: '도면 검토 후 최적 설비 계획안 수립',
  },
  {
    number: '04',
    icon: FileCheck,
    title: '점포 임대 및 장비 구매 계약',
    description: '점포 임대, 설치 장비 확정 후 계약 진행',
  },
  {
    number: '05',
    icon: Building,
    title: '장비 설치 및 인테리어 공사',
    description: '장비 배치도 구상 후 인테리어 시공',
  },
  {
    number: '06',
    icon: Settings,
    title: '사업주 교육 및 시운전',
    description: '오픈 전 장비 점검 및 운영 교육 진행',
  },
  {
    number: '07',
    icon: GraduationCap,
    title: '워시24 OPEN',
    description: '오픈 프로모션, 매장 사후 관리 진행',
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 section-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="section-title mt-4">
            창업 절차
          </h2>
          <p className="section-subtitle mx-auto">
            전문 상권 분석과 구체적인 사업성 검토를 바탕으로
            든든한 창업 파트너가 되어드립니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300 h-full group">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

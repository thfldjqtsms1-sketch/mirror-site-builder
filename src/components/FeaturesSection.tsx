import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Zap, Shield, HeadphonesIcon, Wrench } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '365일 24시간 무인 운영',
    description: '무인 시스템으로 편하게 운영하면서 부가 수입을 창출하세요.',
  },
  {
    icon: Users,
    title: '고객 응대 걱정 NO',
    description: '본사 콜센터에서 모든 고객 응대를 처리합니다.',
  },
  {
    icon: Zap,
    title: '직원 관리 걱정 ZERO',
    description: '인건비 부담 없이 효율적인 매장 운영이 가능합니다.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: '안정적인 매출',
    description: '빨래방과 드라이클리닝 매출을 동시 확보',
  },
  {
    icon: Wrench,
    title: '초기 비용 절감',
    description: '원가 수준의 고효율 세탁 장비 제공',
  },
  {
    icon: HeadphonesIcon,
    title: '또 하나의 월급 통장',
    description: '부업으로도 충분한 수익 창출',
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-dark relative">
      <div className="container mx-auto px-4">
        {/* 24-hour service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium">24-hour Service</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
              무인 시스템과 본사 운영 지원이<br />
              결합해 <span className="text-primary">더욱 완벽한 창업</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              자체 개발 무인 시스템 드라이클리닝 스테이션과 본사
              의식주컴퍼니 스마트 팩토리의 체계적인 자동화 세탁 시스템을
              결합해 물류, 세탁, 매장 배송까지 모두 본사에서 운영합니다.
              더욱 완벽한 무인 시스템으로 또 하나의 월급 통장을 만들어 보세요.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/smartfactory/600/600"
              alt="스마트 팩토리"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2">
                <span className="hash-tag">#고객 응대 걱정 NO</span>
                <span className="hash-tag">#직원 관리 걱정 ZERO</span>
                <span className="hash-tag">#지속적인 고객 유입</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stable revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-2 lg:order-1 relative aspect-video rounded-2xl overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/revenue/800/500"
              alt="안정적인 수익"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent text-sm font-medium">Stable revenue generation</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
              안정적인 수익 확보가 가능한<br />
              <span className="text-primary">소자본 성공 창업</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              점주님의 성공 창업을 위해 중간 마진 없이 원가 수준의 고효율
              세탁 장비를 제공하고, 기본 옵션의 폭을 넓혀 투자금을 절감할
              수 있도록 지원하고 있습니다. 초기 비용의 부담은 덜고,
              빨래방과 세탁소 매출까지 한 번에 잡는 소자본 성공 창업의 꿈,
              워시24로 실현해 보세요.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-foreground">{benefit.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

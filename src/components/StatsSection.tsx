import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Store, TrendingUp, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  {
    icon: Store,
    value: 152,
    suffix: '호점',
    label: '런칭 3년차 전국 개설 매장수',
  },
  {
    icon: TrendingUp,
    prefix: '',
    value: 1000,
    suffix: '만 원',
    label: '복합형 월 매출',
  },
  {
    icon: Users,
    value: 10,
    suffix: '만 명',
    label: '워시24 가입 고객수',
  },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competition" className="py-24 section-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Growth Record</span>
          <h2 className="section-title mt-4">
            3년만에<br />
            <span className="text-primary">전국 150호점 돌파!</span>
          </h2>
          <p className="section-subtitle mx-auto">
            많은 분들이 소자본 성공 창업을 위해 워시24를 선택하고 있습니다.
          </p>
          <p className="text-muted-foreground text-sm mt-2">(2024년 8월 기준)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="counter-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          2024년 8월 수도권 매출 기준
        </motion.p>
      </div>
    </section>
  );
};

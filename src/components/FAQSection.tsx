import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: '세탁 경험이나 기술 없이도 창업할 수 있나요?',
    answer: '네 가능합니다. 워시24는 본사 운영지원을 통한 완벽한 무인 운영으로 세탁물 수거/배송, 검수, 세탁 및 CS, 보상까지 모든 서비스 영역을 본사에서 관리, 지원합니다.',
  },
  {
    question: '매장에서 발생한 세탁 클레임은 어떻게 처리하나요?',
    answer: '고객 컴플레인 응대부터 보상까지 본사에서 책임집니다. 본사 콜센터를 통해 클레임을 접수하고, 스마트팩토리에서 처리하여 고객 응대에 대한 스트레스가 없습니다.',
  },
  {
    question: '오픈까지 소요 기간은 어떻게 되나요?',
    answer: '계약 체결 기준 장비 설치까지 약 3~4주 소요됩니다.',
  },
  {
    question: '매장 운영 시간은 어떻게 되나요? 상주 직원이 필요한가요?',
    answer: '365일 24시간 연중무휴로 운영되나, 상주 직원은 필요하지 않습니다. 최소한의 시간을 할애하여 단순 매장 관리 및 점검 차원의 방문, 관리만을 점주님에게 권하고 있습니다.',
  },
  {
    question: '타인에게 점포 양도 인수가 가능한가요?',
    answer: '점포 양도는 본사와 협의하여 진행 가능합니다. 인수자는 교육비, 계약 이행 보증금을 납부해야 하며, 본사 협의 없이 명의 변경 시 세탁 서비스 및 AS 진행이 불가합니다.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 section-darker relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="section-title mt-4">
            자주 묻는 질문
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 text-left group"
              >
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const regions = ['서울', '경기', '인천', '기타(타 지역은 상담 후 개설 가능)'];
const sources = ['홈페이지', '인터넷 검색', '매장 방문', '지인소개', '기타'];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    source: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      toast.error('개인정보취급방침에 동의해주세요.');
      return;
    }
    toast.success('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      region: '',
      source: '',
      message: '',
      agreed: false,
    });
  };

  return (
    <section id="contact" className="py-24 section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="section-title mt-4">
            창업 문의
          </h2>
          <p className="section-subtitle mx-auto">
            365일 24시간 무인 창업 워시24와 함께 하세요!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 border border-border/30">
            <h3 className="text-xl font-bold text-center mb-8">창업 문의하기</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">이름</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="홍길동"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">이메일</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">연락처</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">개설 희망지역</label>
                <Select
                  value={formData.region}
                  onValueChange={(value) => setFormData({ ...formData, region: value })}
                >
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">유입 경로</label>
                <Select
                  value={formData.source}
                  onValueChange={(value) => setFormData({ ...formData, source: value })}
                >
                  <SelectTrigger className="form-input">
                    <SelectValue placeholder="선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {sources.map((source) => (
                      <SelectItem key={source} value={source}>{source}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">문의 내용</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input min-h-[120px]"
                  placeholder="문의하실 내용을 입력해주세요"
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {formData.message.length} / 2700
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreed}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreed: checked as boolean })}
                  className="mt-0.5"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                  개인정보취급방침을 읽었으며 이에 동의합니다.
                </label>
              </div>
              
              <details className="mt-4 text-sm text-muted-foreground bg-secondary/50 rounded-lg p-4">
                <summary className="cursor-pointer font-medium">개인정보취급방침</summary>
                <div className="mt-3 space-y-2">
                  <p>회사는 창업 상담을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                  <p>1. 수집항목 : (필수) 이름, 연락처, 창업희망지역, 창업희망시기, 투자가능비용, 빨래방 이용경험, 건물소유/임대</p>
                  <p>2. 이용목적 : 문의 상담, 기타 관련 문의사항 답변, 창업 관련 정보 제공 및 관련 안내 문자(SMS) 발송</p>
                  <p>3. 보유기간 : 3년간 보관</p>
                  <p className="text-xs">* 위의 개인정보 수집, 이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부하실 경우 상담이 불가합니다.</p>
                </div>
              </details>
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full mt-8 bg-primary text-primary-foreground hover:shadow-gold py-6 text-lg font-semibold"
            >
              문의 접수하기
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const regions = ['서울', '경기', '인천', '기타'];
const sources = ['홈페이지', '인터넷 검색', '매장 방문', '지인소개', '기타'];

export const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    source: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('문의가 접수되었습니다!');
    setIsOpen(false);
    setFormData({ name: '', phone: '', region: '', source: '' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-gold flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.button>

          {/* Floating form */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="fixed bottom-24 right-6 z-50 w-80 bg-card rounded-2xl shadow-2xl border border-border/30 overflow-hidden"
              >
                <div className="bg-primary p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                    <div>
                      <p className="text-primary-foreground font-semibold">워시24 창업 문의</p>
                      <p className="text-primary-foreground/80 text-sm">1544-4335</p>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                  <Input
                    type="text"
                    placeholder="이름"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="연락처"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    required
                  />
                  <Select
                    value={formData.region}
                    onValueChange={(value) => setFormData({ ...formData, region: value })}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="개설 희망지역" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>{region}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={formData.source}
                    onValueChange={(value) => setFormData({ ...formData, source: value })}
                  >
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="유입경로" />
                    </SelectTrigger>
                    <SelectContent>
                      {sources.map((source) => (
                        <SelectItem key={source} value={source}>{source}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <input type="checkbox" id="floating-privacy" required className="rounded" />
                    <label htmlFor="floating-privacy">개인정보취급방침 동의</label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:shadow-gold">
                    창업 문의하기
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

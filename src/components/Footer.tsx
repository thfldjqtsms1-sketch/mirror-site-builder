import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">워시24</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              빨래방과 드라이클리닝의 기능을 하나로 결합한
              365일 24시간 스마트 무인 세탁소
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <a href="#competition" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  창업경쟁력
                </a>
              </li>
              <li>
                <a href="#story" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  창업스토리
                </a>
              </li>
              <li>
                <a href="#cost" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  창업비용
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  창업절차
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">문의</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:1544-4335" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  1544-4335
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@wash24.kr" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  contact@wash24.kr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  서울특별시 강남구 테헤란로 123
                  <br />
                  워시24빌딩 10층
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">창업 문의</h4>
            <p className="text-muted-foreground text-sm mb-4">
              워시24와 함께 성공적인 창업을 시작하세요.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:shadow-gold transition-all"
            >
              상담 신청하기
            </a>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 워시24. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                개인정보처리방침
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

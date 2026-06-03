import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-tag">수학의 기초부터 실력 완성까지</div>
        <h1>
          아이마다 다른 수학,<br />
          <span className="hl">맞춤으로 완성합니다</span>
        </h1>
        <p className="hero-desc">
          일괄적인 진도가 아닌, 아이 한 명 한 명의 수준과 속도에 맞춘 커리큘럼으로 진짜 실력을 만듭니다.
        </p>
        <div className="hero-ctas">
          <Link href="#contact" className="cta-main">무료 상담 신청</Link>
          <Link href="#features" className="cta-sub">학원 소개 <span className="arr">→</span></Link>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <div className="stat-n">15<sup style={{ fontSize: '1.2rem' }}>+</sup></div>
          <div className="stat-l">지도 경력</div>
        </div>
        <div className="stat">
          <div className="stat-n">98<sup style={{ fontSize: '1.2rem' }}>%</sup></div>
          <div className="stat-l">학부모 만족도</div>
        </div>
        <div className="stat">
          <div className="stat-n">1:1</div>
          <div className="stat-l">개별 커리큘럼</div>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="features-head">
          <div>
            <div className="sec-label">Why 여은정 수학</div>
            <h2 className="sec-title">남다른<br />네 가지 이유</h2>
          </div>
          <div>
            <p className="sec-desc">
              단순히 점수를 올리는 것을 넘어, 수학적으로 사고하는 힘을 기릅니다. 아이가 스스로 성장할 수 있도록 최적의 환경과 방법을 제공합니다.
            </p>
          </div>
        </div>

        <div className="features-grid">
          <div className="f-card">
            <div className="f-idx">01</div>
            <div className="f-icon">🎯</div>
            <h3>우리 아이만을 위한<br />개별 커리큘럼</h3>
            <p>모든 학생의 학습 수준과 성향을 면밀히 분석하여, 한 명 한 명에게 맞는 진도와 방식으로 수업합니다. 일괄적인 진도는 없습니다.</p>
          </div>
          <div className="f-card">
            <div className="f-idx">02</div>
            <div className="f-icon">⚡</div>
            <h3>강의식 × 관리식<br />최상의 접목</h3>
            <p>개념을 정확히 전달하는 강의식과, 스스로 사고하게 이끄는 관리식 수업을 최적의 비율로 결합하여 학습 효과를 극대화합니다.</p>
          </div>
          <div className="f-card">
            <div className="f-idx">03</div>
            <div className="f-icon">📝</div>
            <h3>풀이노트 & n차<br />오답테스트 · 구멍 제로</h3>
            <p>직접 작성하는 풀이노트로 사고 과정을 체계화하고, 완전히 이해할 때까지 반복 테스트합니다. 단 하나의 개념도 허투루 넘기지 않습니다.</p>
          </div>
          <div className="f-card">
            <div className="f-idx">04</div>
            <div className="f-icon">🌿</div>
            <h3>최적의 환경과<br />충분한 학습량 확보</h3>
            <p>집중력이 높아지는 학습 환경과 올바른 학습 습관으로, 질과 양 모두를 놓치지 않는 최적의 학습량을 매 수업 확보합니다.</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="quote-section">
        <div className="quote-card">
          <div className="quote-left">
            <div className="quote-tag">TEACHER&apos;S MESSAGE</div>
            <div>
              <div className="quote-name">여은정</div>
              <div className="quote-role">여은정 수학 원장</div>
            </div>
          </div>
          <div className="quote-right">
            <div className="quote-mark">&ldquo;</div>
            <p className="quote-text">
              수학은 암기 과목이 아닙니다.<br /><br />
              아이가 스스로 이해하고, 스스로 풀어내고,
              스스로 틀린 이유를 찾아낼 수 있을 때 —
              그때 비로소 <strong>진짜 실력</strong>이 만들어집니다.<br /><br />
              저는 그 과정을 아이 옆에서 함께합니다.
            </p>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="sec-label">학습 시스템</div>
        <h2 className="sec-title">체계적인 4단계 사이클</h2>

        <div className="process-layout">
          <div className="process-left">
            <p className="sec-desc" style={{ marginTop: 0 }}>
              개념 이해부터 반복 완성까지, 한 사이클이 끝나면 진짜 내 것이 됩니다.
            </p>
            <div className="process-note">
              <p>틀린 문제는 합격 기준을 충족할 때까지 사이클을 반복합니다. 완전히 이해하기 전까지는 다음으로 넘어가지 않습니다.</p>
            </div>
          </div>

          <div className="step-list">
            <div className="step">
              <span className="step-no">01</span>
              <div>
                <h4>개념 학습</h4>
                <p>핵심 원리를 정확하게 이해하는 강의식 수업으로 시작합니다. 왜 그렇게 되는지, 원리부터 탄탄히 다집니다.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-no">02</span>
              <div>
                <h4>풀이노트 작성</h4>
                <p>배운 내용을 손으로 직접 정리합니다. 쓰는 과정이 사고력을 깊게 하고, 스스로 빈틈을 발견하게 합니다.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-no">03</span>
              <div>
                <h4>오답 심층 분석</h4>
                <p>틀린 문제는 왜 틀렸는지를 정확히 파악합니다. 단순 실수인지, 개념 오류인지를 구분하여 뿌리부터 제거합니다.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-no">04</span>
              <div>
                <h4>n차 반복 완성</h4>
                <p>완전히 이해했는지 확인하는 반복 테스트로 마무리합니다. 합격 기준을 충족할 때까지 사이클을 반복합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="sec-label">Contact</div>
        <h2 className="sec-title">상담 및 문의</h2>
        <p className="sec-desc">입학 상담, 수업 관련 궁금한 점을 편하게 남겨주세요.</p>

        <div className="contact-wrap">
          <dl className="info-rows">
            <div className="info-row">
              <div className="info-ico">📍</div>
              <div>
                <dt>LOCATION</dt>
                <dd>서울특별시<br />(상세 주소 입력)</dd>
              </div>
            </div>
            <div className="info-row">
              <div className="info-ico">☎</div>
              <div>
                <dt>PHONE</dt>
                <dd>010-0000-0000</dd>
              </div>
            </div>
            <div className="info-row">
              <div className="info-ico">🕐</div>
              <div>
                <dt>HOURS</dt>
                <dd>평일 13:00 – 22:00<br />토요일 10:00 – 18:00<br />일요일 · 공휴일 휴원</dd>
              </div>
            </div>
            <div className="info-row">
              <div className="info-ico">💬</div>
              <div>
                <dt>KAKAO</dt>
                <dd>카카오 채널 : 여은정수학</dd>
              </div>
            </div>
          </dl>

          <div className="form-box">
            <h3>무료 상담 신청</h3>
            <div className="fld-row">
              <div className="fld">
                <label>학부모 성함</label>
                <input type="text" placeholder="홍길동" />
              </div>
              <div className="fld">
                <label>연락처</label>
                <input type="tel" placeholder="010-0000-0000" />
              </div>
            </div>
            <div className="fld">
              <label>학생 학년</label>
              <select defaultValue="">
                <option value="">— 선택 —</option>
                <optgroup label="초등">
                  <option>초등 3학년</option>
                  <option>초등 4학년</option>
                  <option>초등 5학년</option>
                  <option>초등 6학년</option>
                </optgroup>
                <optgroup label="중학교">
                  <option>중학교 1학년</option>
                  <option>중학교 2학년</option>
                  <option>중학교 3학년</option>
                </optgroup>
                <optgroup label="고등학교">
                  <option>고등학교 1학년</option>
                  <option>고등학교 2학년</option>
                  <option>고등학교 3학년</option>
                </optgroup>
              </select>
            </div>
            <div className="fld">
              <label>문의 내용</label>
              <textarea placeholder="궁금한 점이나 상담 내용을 자유롭게 작성해 주세요." />
            </div>
            <button className="form-btn">상담 신청하기</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <div className="foot-logo">여은정 <span>수학</span></div>
          <div className="foot-links">
            <Link href="#features">소개</Link>
            <Link href="#process">학습과정</Link>
            <Link href="#contact">상담 신청</Link>
            <Link href="/blog">블로그</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">© 2024 여은정 수학. All rights reserved.</span>
          <span className="foot-tag">ZERO GAPS · REAL MATH</span>
        </div>
      </footer>
    </main>
  )
}

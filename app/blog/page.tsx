import Link from 'next/link'
import BlogFilter from '@/components/BlogFilter'

export const metadata = {
  title: '블로그 — 여은정 수학',
}

export default function BlogPage() {
  return (
    <main>
      {/* HERO */}
      <div className="blog-hero">
        <div className="hero-inner">
          <Link href="/" className="back-link">← 홈으로</Link>
          <div className="hero-label">Blog</div>
          <h1>수학에 대한<br />모든 이야기</h1>
          <p>공부법, 개념 정리, 학습 상담까지 — 아이의 수학 실력을 키우는 데 도움이 되는 이야기를 나눕니다.</p>
        </div>
      </div>

      {/* FILTER */}
      <BlogFilter />

      {/* POSTS */}
      <section className="posts-section">
        <div className="posts-grid">
          <a href="#" className="post-card featured">
            <div className="post-meta">
              <span className="post-tag">학습법</span>
              <span className="post-date">2024. 11. 15</span>
            </div>
            <h2>수학 공부, 문제를 많이 푸는 것보다<br />중요한 한 가지</h2>
            <p>많은 학생들이 수학 성적을 올리기 위해 문제집을 쌓아두고 무작정 풉니다. 하지만 진짜 수학 실력은 문제를 많이 푸는 것이 아닌, 틀린 문제를 완전히 이해하는 과정에서 만들어집니다. 오늘은 그 구체적인 방법에 대해 이야기해 보겠습니다.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 5분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>

          <a href="#" className="post-card">
            <div className="post-meta">
              <span className="post-tag">학습법</span>
              <span className="post-date">2024. 11. 08</span>
            </div>
            <h2>풀이노트, 제대로 쓰는 방법</h2>
            <p>풀이노트를 쓰는 학생과 안 쓰는 학생의 차이는 생각보다 훨씬 큽니다. 단순히 정답을 적는 것이 아닌, 사고 과정을 구조화하는 방법을 알려드립니다.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 4분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>

          <a href="#" className="post-card">
            <div className="post-meta">
              <span className="post-tag">개념 정리</span>
              <span className="post-date">2024. 10. 28</span>
            </div>
            <h2>중학교 수학에서 절대 놓치면 안 되는 핵심 개념</h2>
            <p>중등 수학은 고등수학의 뿌리입니다. 이 시기에 개념을 허술하게 잡으면 고등 수학에서 무너집니다. 반드시 잡아야 할 핵심 개념을 정리했습니다.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 6분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>

          <a href="#" className="post-card">
            <div className="post-meta">
              <span className="post-tag">학부모 가이드</span>
              <span className="post-date">2024. 10. 14</span>
            </div>
            <h2>수학을 싫어하는 아이, 어떻게 도와줄 수 있을까요</h2>
            <p>수학 불안증은 생각보다 흔합니다. 아이가 수학을 두려워하는 이유와, 집에서 부모님이 할 수 있는 현실적인 도움 방법을 알려드립니다.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 5분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>

          <a href="#" className="post-card">
            <div className="post-meta">
              <span className="post-tag">상담 이야기</span>
              <span className="post-date">2024. 09. 30</span>
            </div>
            <h2>고등수학 선행, 언제 시작해야 할까</h2>
            <p>많은 부모님이 선행 학습에 대해 고민합니다. 하지만 선행보다 더 중요한 것이 있습니다. 현행 개념이 완전히 잡혀 있는지 먼저 확인하세요.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 4분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>

          <a href="#" className="post-card">
            <div className="post-meta">
              <span className="post-tag">학습법</span>
              <span className="post-date">2024. 09. 18</span>
            </div>
            <h2>오답테스트, 왜 n번씩 반복해야 하는가</h2>
            <p>한 번 틀린 문제를 두 번 풀면 맞을 것 같지만 실제로는 그렇지 않습니다. 뇌가 개념을 장기 기억으로 저장하기 위해 반복이 필요한 이유를 설명합니다.</p>
            <div className="post-footer">
              <span className="post-read">읽는 시간 3분</span>
              <span className="post-arrow">→</span>
            </div>
          </a>
        </div>

        <div className="pagination">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">→</button>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <div className="subscribe">
        <div>
          <h3>새 글이 올라오면<br /><span>바로 알려드릴게요</span></h3>
          <p>수학 공부에 도움이 되는 글을 이메일로 받아보세요.</p>
        </div>
        <div className="subscribe-form">
          <input className="subscribe-input" type="email" placeholder="이메일 주소를 입력하세요" />
          <button className="subscribe-btn">구독하기</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <Link href="/" className="foot-logo">여은정 <span>수학</span></Link>
          <div className="foot-links">
            <Link href="/#features">소개</Link>
            <Link href="/#process">학습과정</Link>
            <Link href="/#contact">상담 신청</Link>
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

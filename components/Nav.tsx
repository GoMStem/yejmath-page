'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav>
        <Link href="/" className="logo">여은정 <span>수학</span></Link>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={toggle}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`menu-overlay${open ? ' open' : ''}`}>
        <div className="menu-links">
          <Link href={isHome ? '#features' : '/#features'} className="menu-link" onClick={close}>
            소개 <span className="link-num">01</span>
          </Link>
          <Link href={isHome ? '#process' : '/#process'} className="menu-link" onClick={close}>
            학습과정 <span className="link-num">02</span>
          </Link>
          <Link href={isHome ? '#contact' : '/#contact'} className="menu-link" onClick={close}>
            상담 신청 <span className="link-num">03</span>
          </Link>
          <Link href="/blog" className="menu-link" onClick={close}>
            블로그 <span className="link-num">04</span>
          </Link>
        </div>
        <dl className="menu-foot">
          <div className="menu-foot-item">
            <dt>PHONE</dt>
            <dd>010-0000-0000</dd>
          </div>
          <div className="menu-foot-item">
            <dt>HOURS</dt>
            <dd>평일 13:00 – 22:00</dd>
          </div>
          <div className="menu-foot-item">
            <dt>KAKAO</dt>
            <dd>여은정수학</dd>
          </div>
        </dl>
      </div>
    </>
  )
}

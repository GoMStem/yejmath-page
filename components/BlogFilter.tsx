'use client'
import { useState } from 'react'

const categories = ['전체', '학습법', '개념 정리', '상담 이야기', '학부모 가이드']

export default function BlogFilter() {
  const [active, setActive] = useState('전체')

  return (
    <div className="filter-bar">
      {categories.map(cat => (
        <button
          key={cat}
          className={`filter-btn${active === cat ? ' active' : ''}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

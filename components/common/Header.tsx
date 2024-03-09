import React from 'react'
import Image from 'next/image'
import icon from '@/assets/icon/free-icon-meteorite-5458643.png'

export default function Header() {
  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div>네비게이션 버튼 영역</div>
        <div className='flex'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Dino Games</span>
            <Image src={icon} alt='logo' className='h-12 w-auto' />
          </a>
        </div>
        <div>다크모드 토글</div>
      </nav>
    </header>
  )
}

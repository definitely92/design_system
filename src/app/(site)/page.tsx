import Image from 'next/image'
import { FaFigma } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo/240904_gnb_artfair_logo_01.gif"
          alt="Lush logo"
          width={180}
          height={38}
          priority
        />
        <h2 className="text-2xl font-bold">Design System Publishing Guide</h2>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            디자인 팀의 디자인 시스템 피그마를 기반으로 만들었습니다.
          </li>
          <li className="tracking-[-.01em]">
            디자인 시스템의 모든 요소를 포함하고 있습니다.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.figma.com/design/Tfex85DvKcbgQs9oV0pNzJ/Design-System?node-id=688-98&m=dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFigma />
            피그마 바로가기
          </a>
        </div>
      </main>
    </div>
  )
}

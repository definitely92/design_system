'use client'

import IconButton from '@/components/elements/IconButton'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Logo = ({ isInDrawer, onClickClose }: { isInDrawer: boolean; onClickClose: () => void }) => {
  const { push } = useRouter()

  const onClickLogo = () => {
    push('/')
  }

  return (
    <div className="flex items-center gap-5">
      {isInDrawer ? (
        <IconButton icon={<IoCloseOutline size={24} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickClose} />
      )}
      <div onClick={onClickLogo}>
        <Image src="/logo/240904_gnb_artfair_logo_01.gif" alt="logo" width={50} height={38} />
      </div>
    </div>
  )
}

export default Logo

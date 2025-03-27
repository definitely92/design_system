'use client'

import UpdateLottie from '@/assets/loading.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

const LoadingBar = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={UpdateLottie}
        style={{ width: '100%', height: '100%' }}
        play={true}
      />
    </div>
  )
}

export default LoadingBar

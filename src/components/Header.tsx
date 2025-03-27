'use client'

import PagePadding from './PagePadding'
import { cn } from '@/lib/utils'
import { FiSearch } from 'react-icons/fi'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useState } from 'react'
import Logo from '@/components/elements/Logo'
const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false)
              }}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const Header = () => {
  return (
    <header>
      <section></section>
      <section className={cn('sticky top-0 left-0 z-10')}>
        <PagePadding>
          <div className="h-[50px] flex items-center justify-between">
            <HeaderDrawer>
              <Logo isInDrawer={false} onClickClose={() => {}} />
            </HeaderDrawer>
            <div className={cn('flex items-center gap-2')}>
              <input
                type="text"
                placeholder="Search"
                className="px-2 w-[200px] h-[30px] rounded-md border border-gray-300"
              />
              <FiSearch size={20} />
            </div>
          </div>
        </PagePadding>
      </section>
    </header>
  )
}

export default Header

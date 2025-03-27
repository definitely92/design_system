import Header from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout

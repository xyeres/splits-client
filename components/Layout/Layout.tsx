import { Navbar } from "../Navbar"
import { Footer } from "../Footer"
import { FC, ReactNode } from "react"


interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-row h-screen bg-dark-est'>
      <Navbar />
      <div className="flex-auto flex flex-col h-full">
        <div className="flex-auto">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
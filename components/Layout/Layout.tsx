import { Navbar } from "../Navbar"
import { Footer } from "../Footer"
import { FC, ReactNode } from "react"


interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
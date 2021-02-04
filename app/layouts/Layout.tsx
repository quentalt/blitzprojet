import { ReactNode, Suspense } from "react"
import { Head, Link } from "blitz"
import UserInfo from "app/components/Userinfo"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Quentin-blitz"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-lg mx-auto">
        <header className="flex flex-row">
          <Link href="/">
            <a>
              <h1 className="font-extrabold text-gray-600 tracking-tighter text-xl py-4">
                Système de vote
              </h1>
            </a>
          </Link>
          <nav className="ml-auto flex flex-row items-center space-x-4">
            <Link href="/products/1">
              <a> Features List</a>
            </Link>
          </nav>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </header>
        {children}
      </div>
    </>
  )
}

export default Layout

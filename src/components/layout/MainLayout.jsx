import { Header, Footer } from "@/components";

export const MainLayout = ({ onlyChildren, children }) => {
  return (
    <>
      {!onlyChildren && <Header />}
      <main className="mt-20 max-container padding-container">
        {children}
      </main>
      {!onlyChildren && <Footer />}
    </>
  )
}
import { Header, Footer } from "@/components";

export const MainLayout = ({ onlyChildren, children }) => {
  return (
    <>
      {!onlyChildren && <Header />}
      <main className="max-container padding-container mt-10">
        {children}
      </main>
      {!onlyChildren && <Footer />}
    </>
  )
}
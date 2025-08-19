import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"

export default function VenuePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Venue & Travel"
          subtitle="A historic setting for future innovations in Nuremberg, Germany."
        />
        <section className="py-20">
          <div className="container mx-auto px-6">{/* Venue content will be added */}</div>
        </section>
      </main>
      <Footer />
    </>
  )
}

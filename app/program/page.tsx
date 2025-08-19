import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { ProgramTabs } from "@/components/program/program-tabs"

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Scientific Program" subtitle="Three days of innovation, discussion, and discovery." />
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ProgramTabs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

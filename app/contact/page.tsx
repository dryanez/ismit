import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Get In Touch" subtitle="We're here to help with any questions you may have." />
        <section className="py-20">
          <div className="container mx-auto px-6">{/* Contact content will be added */}</div>
        </section>
      </main>
      <Footer />
    </>
  )
}

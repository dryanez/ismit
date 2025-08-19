import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/ui/page-header"
import { RegistrationForm } from "@/components/registration/registration-form"

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Register for iSMIT 2026"
          subtitle="Secure your place at the forefront of medical technology."
        />
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <RegistrationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

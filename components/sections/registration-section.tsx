import Link from "next/link"
import { Button } from "@/components/ui/button"

export function RegistrationSection() {
  return (
    <section id="registration" className="py-20 text-white bg-[rgba(29,169,201,1)]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Seats Are Limited. The Future Waits for No One.</h2>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-blue-200">
          Join the world's leading surgeons, engineers, and innovators. Register now to secure your place at the
          forefront of medical technology.
        </p>
        <p className="mt-6 font-bold text-2xl">Early-bird registration ends 31 January 2026</p>
        <Link href="/registration" className="mt-8 inline-block">
          <Button
            size="lg"
            className="bg-white text-blue-800 font-bold py-4 px-10 text-lg transition hover:bg-blue-100 shadow-xl"
          >
            Register Now
          </Button>
        </Link>
      </div>
    </section>
  )
}

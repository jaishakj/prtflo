// src/pages/Payments.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Payments() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Replace this section with your existing payment page content */}

        <section className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold">
              Support Me ❤️
            </h1>

            <p className="mb-10 text-muted-foreground">
              If you enjoy my work and would like to support me,
              you can make a contribution using UPI.
            </p>

            {/* Your Retro UI payment card will go here */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

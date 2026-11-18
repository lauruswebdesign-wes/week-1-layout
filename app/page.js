// app/page.jsx
import Button from "../components/Button";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center min-h-[70vh] max-w-3xl gap-6">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#00064C]">
        Be Found. Be First. Be the Solution.
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed">
        At Laurus Designs, we craft bold, user-centered websites that elevate
        your brand and turn first impressions into lasting client relationships.
      </p>

      <div className="pt-2">
        <Button text="Book Free Consultation" variant="primary" />
      </div>
    </section>
  );
}

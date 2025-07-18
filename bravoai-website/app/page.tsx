
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="text-center py-24 bg-gradient-to-br from-white to-blue-50">
        <h1 className="text-5xl font-bold leading-tight">
          AI-Backed Consultation <br />
          <span className="text-indigo-600">Across Industries</span>
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          From agriculture to real estate, BravoAI delivers intelligent solutions that help industries operate, optimize, and grow.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Discover Your Industry Solutions
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50">
            Schedule Consultation
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <p className="text-3xl font-bold text-indigo-600">15+</p>
            <p className="text-sm">Industries Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">98%</p>
            <p className="text-sm">Client Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">200+</p>
            <p className="text-sm">AI Solutions Deployed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-600">24/7</p>
            <p className="text-sm">Expert Support</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Transform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
         <Link href="/industries/agriculture">
  <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition cursor-pointer">
    <h3 className="font-semibold text-xl mb-2 text-green-700">Agriculture</h3>
    <p className="text-sm text-gray-700">
      Precision farming, crop optimization, and sustainable resource management using AI analytics.
    </p>
  </div>
</Link>

          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-blue-700">Manufacturing</h3>
            <p className="text-sm text-gray-700">
              Predictive maintenance, quality control, and production optimization through automation.
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-red-700">Healthcare</h3>
            <p className="text-sm text-gray-700">
              Diagnostic assistance, patient care improvement, and operational efficiency through AI.
            </p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2 text-purple-700">Real Estate</h3>
            <p className="text-sm text-gray-700">
              Market analysis, property valuation, and investment optimization using intelligent insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
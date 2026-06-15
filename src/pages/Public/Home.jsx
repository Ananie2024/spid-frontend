import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero py-28 md:py-40 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h2 className="h1 max-w-4xl mx-auto md:mx-0">
            Building the Future<br />
            <span className="text-[var(--accent)]">With Precision & Passion</span>
          </h2>
          <p className="text-xl md:text-2xl mt-6 max-w-2xl mx-auto md:mx-0 text-blue-100">
            Trusted construction partner delivering exceptional quality projects across Rwanda.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-5 justify-center md:justify-start">
            <Link to="/projects" className="btn-primary text-lg px-10 py-5">
              View Our Projects
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-10 py-5">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-[var(--bg-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[var(--text-heading)]">Our Foundation</h2>
            <p className="text-[var(--text-light)] mt-4 text-xl">The principles guiding every project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="card">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
              <div className="text-[var(--text-light)] leading-relaxed min-h-[160px]"></div>
            </div>

            <div className="card">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
              <div className="text-[var(--text-light)] leading-relaxed min-h-[160px]"></div>
            </div>

            <div className="card">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
              <div className="text-[var(--text-light)] leading-relaxed min-h-[160px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--primary)] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-blue-100 mb-10">Let's discuss your next project</p>
          <Link to="/contact" className="btn-primary text-xl px-14 py-7">
            Get In Touch Today <ArrowRight size={28} />
          </Link>
        </div>
      </section>
    </div>
  );
}
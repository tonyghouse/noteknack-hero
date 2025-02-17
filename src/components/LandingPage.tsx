import { Smartphone, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
      <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Smartphone className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">gh-Pages(ReactJs) Template</span>
          </Link>
          <nav className="hidden sm:flex space-x-4">
            <Link to="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
          <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Welcome to New App</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The revolutionary app that simplifies your life and boosts productivity.
            </p>
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Lightning Fast", description: "Experience unparalleled speed and performance." },
                {
                  icon: CheckCircle,
                  title: "Easy to Use",
                  description: "Intuitive interface designed for all skill levels.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Friendly",
                  description: "Access your data anytime, anywhere on any device.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users and transform your workflow today.
            </p>
            <Link
              to="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try New App for Free
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <span className="text-xl font-bold">New App</span>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link to="/" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
  }
  
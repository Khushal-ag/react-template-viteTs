import { useState } from "react";

import {
  CheckCircle,
  Clipboard,
  ClipboardCheck,
  Code,
  Copyright,
  Github,
  Sparkles,
  Zap,
} from "lucide-react";

export default function App() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = "bunx degit Khushal-ag/react-template-viteTs my-app";

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#212121]">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="from-blue-500/3 via-gray-500/2 to-gray-600/3 absolute left-0 top-0 h-full w-full bg-gradient-to-br"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-gray-500/5 blur-3xl"></div>
      </div>

      <main className="container relative z-10 mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-gray-600 shadow-lg">
              <img src="/vite.svg" alt="Vite" className="h-12 w-12" />
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-blue-400 via-gray-300 to-gray-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            React Template Vite
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            A modern, feature-packed React template to jumpstart your project
          </p>
        </header>

        {/* Feature Cards */}
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Code className="h-6 w-6" />}
            title="Modern Stack"
            description="Powered by Vite, TypeScript, and TailwindCSS"
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6" />}
            title="Pre-configured"
            description="Ready with ESLint, Prettier, and Lucide Icons"
          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="Production Ready"
            description="Start building right away with best practices built-in"
          />
        </div>

        {/* Get Started Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-8 text-2xl font-semibold text-white">
            Get Started Now
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 md:flex-row">
          <div className="group">
            <a
              href="https://github.com/Khushal-ag/react-template-viteTS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-gray-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-gray-800 hover:shadow-xl"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <div className="group w-full max-w-md">
            <div className="rounded-lg bg-gray-800 p-1">
              <button
                onClick={copyToClipboard}
                className="flex w-full items-center gap-2 rounded-md bg-gray-700 px-4 py-3 text-left font-mono text-xs text-gray-200 transition-colors duration-300 hover:bg-gray-600"
              >
                <span className="flex-shrink-0 text-orange-400">$</span>
                <span className="flex-shrink-0 text-gray-300">bunx</span>
                <span className="flex-shrink-0 text-blue-400">degit</span>
                <span className="flex-shrink-0 text-gray-200">
                  Khushal-ag/react-template-viteTs
                </span>
                <span className="flex-shrink-0 text-gray-200">my-app</span>
                <span className="ml-auto flex-shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {isCopied ?
                    <ClipboardCheck className="h-4 w-4 text-green-400" />
                  : <Clipboard className="h-4 w-4" />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <a
              href="https://github.com/Khushal-ag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              Khushal-ag@github
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-gray-700/30 bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

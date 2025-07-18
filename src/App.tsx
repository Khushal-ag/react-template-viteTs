import { useState } from "react";
import { Clipboard, ClipboardCheck, Copyright, Github, Sparkles, Code, Zap, CheckCircle } from "lucide-react";

export default function App() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = "pnpx degit Khushal-ag/react-template-viteTs <project-name>";

    try {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#212121] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/3 via-gray-500/2 to-gray-600/3"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-gray-600 flex items-center justify-center shadow-lg">
              <img src="/vite.svg" alt="Vite" className="h-12 w-12" />
            </div>
          </div>
          <h1 className="bg-gradient-to-r from-blue-400 via-gray-300 to-gray-400 bg-clip-text text-5xl font-bold text-transparent mb-4 md:text-6xl">
            React Template Vite
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern, feature-packed React template to jumpstart your project
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
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
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Get Started Now</h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          <div className="group">
            <a
              href="https://github.com/Khushal-ag/react-template-viteTS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-gray-700 hover:from-blue-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <div className="group w-full max-w-lg">
            <div className="bg-gray-800 rounded-lg p-1">
              <button
                onClick={copyToClipboard}
                className="flex w-full items-center gap-2 bg-gray-700 rounded-md px-4 py-3 text-left font-mono text-xs text-gray-200 hover:bg-gray-600 transition-colors duration-300"
              >
                <span className="text-orange-400 flex-shrink-0">$</span>
                <span className="text-gray-300 flex-shrink-0">pnpx</span>
                <span className="text-blue-400 flex-shrink-0">degit</span>
                <span className="text-gray-200 truncate">Khushal-ag/react-template-viteTs</span>
                <span className="text-gray-500 flex-shrink-0">&lt;project-name&gt;</span>
                <span className="ml-auto text-gray-400 transition-colors duration-300 group-hover:text-white flex-shrink-0">
                  {isCopied ? (
                    <ClipboardCheck className="h-4 w-4 text-green-400" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <a
              href="https://github.com/Khushal-ag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 shadow-lg">
    <div className="mb-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

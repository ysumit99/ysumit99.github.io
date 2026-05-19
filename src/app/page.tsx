import React from 'react';
import { Mail, ArrowRight, Server, Cloud, BookOpen, PenTool, BrainCircuit } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const PROJECTS = [
  {
    title: "AI RAG Assistant",
    description: "Production RAG pipeline — upload PDFs and chat with an AI that references your documents.",
    tech: ["Next.js 16", "Gemini 2.5", "Pinecone", "Vercel AI SDK"],
    link: "https://next-rag-assistant.vercel.app/",
    repo: "https://github.com/ysumit99/next-rag-assistant"
  },
  {
    title: "Real-Time Notification Engine",
    description: "Serverless event-driven architecture with fan-out worker queues and live SSE push updates.",
    tech: ["Next.js 16", "Upstash Redis", "QStash", "SSE"],
    link: "https://next-realtime-notifications.vercel.app/",
    repo: "https://github.com/ysumit99/next-realtime-notifications"
  },
  {
    title: "Distributed URL Shortener",
    description: "High-scale URL shortener with AP architecture, O(1) Redis lookups & edge redirects.",
    tech: ["Next.js", "Upstash Redis", "Vercel"],
    link: "https://url-shortener-phi-sooty.vercel.app/",
    repo: "https://github.com/ysumit99/url-shortener"
  },
  {
    title: "Staff Engineer Blog",
    description: "Personal blog covering distributed systems, AI engineering & the road to Staff Engineer.",
    tech: ["Next.js 16", "MDX", "Tailwind", "Vercel"],
    link: "https://sumityadav-dev.vercel.app/",
    repo: null
  }
];

const ARTICLES = [
  { title: "Building a Real-Time Notification System with SSE, Redis & Next.js", link: "https://sumityadav-dev.vercel.app/blog/realtime-notification-engine" },
  { title: "How I Built a Production RAG Pipeline with Next.js and Pinecone", link: "https://sumityadav-dev.vercel.app/blog/rag-pipeline-nextjs-pinecone" },
  { title: "SAGA Pattern — How I'd Design Uber's Booking Flow", link: "https://sumityadav-dev.vercel.app/blog/saga-pattern-uber-booking" },
  { title: "Scaling a Social Feed to 10 Million Users", link: "https://sumityadav-dev.vercel.app/blog/scaling-social-feed" },
  { title: "Message Queues Explained — SQS vs Kafka vs SNS", link: "https://sumityadav-dev.vercel.app/blog/message-queues-sqs-kafka-sns" },
  { title: "Consistent Hashing — Why Distributed Systems Can't Live Without It", link: "https://sumityadav-dev.vercel.app/blog/consistent-hashing" },
  { title: "CAP Theorem Explained with Real-World Examples", link: "https://sumityadav-dev.vercel.app/blog/cap-theorem-explained" }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Actively seeking Staff Engineer / Tech Lead roles
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Sumit Yadav
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-blue-400">
            Senior Software Engineer → Staff Engineer
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed">
            Full-Stack · Distributed Systems · AI Engineering<br/>
            Building scalable platforms with React, Next.js, Node.js, TypeScript, AWS, Vercel, and AI integrations.
          </p>
        </div>

        <blockquote className="border-l-4 border-blue-500 pl-4 py-1 text-slate-300 italic max-w-2xl">
          "I don't just write code — I architect systems that scale, lead teams that deliver, and solve problems that matter."
        </blockquote>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="mailto:ysumit99@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Let's Talk <Mail size={18} />
          </a>
          <a href="https://sumityadav-dev.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold border border-slate-800 transition-all">
            <BookOpen size={18} /> Blog
          </a>
          <a href="https://github.com/ysumit99" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold border border-slate-800 transition-all">
            <FaGithub size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sumityadav-dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-lg font-semibold border border-slate-800 transition-all">
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </header>

      {/* Core Competencies */}
      <section className="border-y border-slate-900 bg-slate-900/20">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-800 space-y-3">
              <Server className="text-blue-400" size={24} />
              <h3 className="font-semibold text-white">System Design & Architecture</h3>
              <p className="text-sm text-slate-400">Distributed systems, microservices, and performance & scalability engineering.</p>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-800 space-y-3">
              <BrainCircuit className="text-blue-400" size={24} />
              <h3 className="font-semibold text-white">AI & LLM Integrations</h3>
              <p className="text-sm text-slate-400">RAG pipelines, Vercel AI SDK, Gemini, vector databases, and agentic workflows.</p>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-800 space-y-3">
              <Cloud className="text-blue-400" size={24} />
              <h3 className="font-semibold text-white">Cloud-Native & DevOps</h3>
              <p className="text-sm text-slate-400">AWS (Multi-region, Lambda@Edge), CI/CD practices, Kafka, and Kubernetes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Engineering Projects</h2>
          <div className="h-1 w-12 bg-blue-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div key={i} className="p-6 bg-slate-900/40 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col h-full justify-between group">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    {project.title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-slate-950 text-slate-300 rounded-md border border-slate-800">{t}</span>
                  ))}
                </div>
              </div>
              {project.repo && (
                <div className="pt-6 mt-auto">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={16} /> View Source
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Writing */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-10">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technical Writing</h2>
              <div className="h-1 w-12 bg-blue-500 rounded"></div>
              <p className="text-slate-400 max-w-2xl">Deep technical breakdowns on distributed systems, AI engineering, and Staff-level architecture thinking.</p>
            </div>
            <a href="https://sumityadav-dev.vercel.app" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium">
              Read Blog <BookOpen size={18} />
            </a>
          </div>

          <div className="grid gap-3">
            {ARTICLES.map((article, i) => (
              <a key={i} href={article.link} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-900/80 transition-colors border border-transparent hover:border-slate-800 group">
                <PenTool size={16} className="text-slate-600 group-hover:text-blue-400 flex-shrink-0" />
                <span className="font-medium text-slate-300 group-hover:text-white">{article.title}</span>
              </a>
            ))}
          </div>
          
          <a href="https://sumityadav-dev.vercel.app" target="_blank" rel="noreferrer" className="md:hidden inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium pt-4">
            Read all posts <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-base font-bold text-white">Sumit Yadav</p>
            <p className="text-sm text-slate-500">Staff Engineer &amp; System Architect</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="mailto:ysumit99@gmail.com" className="text-slate-400 hover:text-white transition"><Mail size={20} /></a>
            <a href="https://github.com/ysumit99" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/sumityadav-dev/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit Yadav | AI • Distributed Systems • Modern Software Engineering",
  description:
    "Lead Software Engineer building intelligent, scalable software systems at the intersection of AI, distributed systems, and modern software engineering. Explore projects, architecture case studies, and technical articles.",
  keywords: [
    "Sumit Yadav",
    "Lead Software Engineer",
    "Software Engineer Portfolio",
    "AI Engineering",
    "Distributed Systems",
    "System Design",
    "Cloud Architecture",
    "Full Stack Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "Azure",
    "Redis",
    "Kafka",
    "RAG",
    "LLMs",
    "Vercel AI SDK",
    "Pinecone",
    "Technical Blog",
  ],
  authors: [{ name: "Sumit Yadav" }],
  creator: "Sumit Yadav",
  alternates: {
    canonical: "https://ysumit99.github.io/",
  },
  openGraph: {
    title: "Sumit Yadav | Building Intelligent, Scalable Software Systems",
    description:
      "Engineering portfolio featuring AI applications, distributed systems, cloud-native platforms, architecture case studies, and technical writing.",
    url: "https://ysumit99.github.io/",
    siteName: "Sumit Yadav Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Yadav | Building Intelligent, Scalable Software Systems",
    description:
      "AI engineering, distributed systems, cloud-native architecture, open-source projects, and technical writing.",
    creator: "@ysumit99",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}

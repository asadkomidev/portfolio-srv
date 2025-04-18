import {
  FaSquareXTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

export const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/asadkom",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/asadkom/",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/asadkomi",
    icon: FaSquareXTwitter,
  },
  {
    name: "Email",
    url: "mailto:asadkom@gmail.com",
    icon: FaEnvelope,
  },
] as const;

export const shippedProjects = [
  {
    name: "Jefto - Project Management Tool",
    description:
      "_A project management tool to help you manage your projects. Includes features like task management, time tracking, and workspace management.",
    sourceCode: undefined,
    liveDemo: "https://jefto.io",
  },
  {
    name: "TCN - SaaS Starter Kit",
    description:
      "_A SaaS starter kit, built with Turborepo, Convex, Next.js, Polar, Resend, Shadcn UI, TypeScript, and Tailwind CSS.",
    sourceCode: "https://github.com/asadkomidev/turbo-convex-starter",
    liveDemo: "https://turbo-convex-starter-web.vercel.app/",
  },
] as const;

export const projects = [
  {
    name: "Finvista - Budget Tracker",
    description:
      "_A budget tracker, that can help you manage your budget more efficiently.",
    sourceCode: undefined,
    liveDemo: "https://finance-pi-murex.vercel.app//",
  },
  {
    name: "FFVideo - Video Compressor",
    description:
      "_A tool that can help you compress your videos more efficiently. Built with FFmpeg, Next.js, TypeScript, and Tailwind CSS.",
    sourceCode: "https://github.com/asadkomidev/video-compressor",
    liveDemo: "https://video-compressor-alpha.vercel.app/",
  },
] as const;

export const currentFocus = [
  {
    name: "Debux - Error Reporter",
    description:
      "_A tool that can help you report, track, and debug errors more efficiently.",
    sourceCode: undefined,
    liveDemo: "https://debux.dev/",
  },
] as const;

export const archivedProjects = [
  {
    name: "Portfolio - Old",
    description: "_A personal website to showcase my projects and thoughts.",
    sourceCode: "https://github.com/asadkomidev/protfolio",
    liveDemo: "https://protfolio-one-steel.vercel.app/",
  },
] as const;

export const description =
  "Dedicated to transforming complex challenges into elegant software solutions. Expert in diverse technologies, driven by innovation.";

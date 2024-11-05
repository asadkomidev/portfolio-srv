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
    url: "https://x.com/asadkom",
    icon: FaSquareXTwitter,
  },
  {
    name: "Email",
    url: "mailto:asadkom@gmail.com",
    icon: FaEnvelope,
  },
] as const;

export const projects = [
  {
    name: "finance tracker",
    description:
      "A tool that can help you manage your finances more efficiently.",
    sourceCode: "https://github.com/asadkom/finance-tracker",
    liveDemo: "https://finance-tracker-asadkom.vercel.app/",
  },
  {
    name: "personal website",
    description: "A personal website to showcase my projects and thoughts.",
    sourceCode: undefined,
    liveDemo: "https://asadkom.com",
  },
] as const;

export const currentFocus = [
  {
    name: ".email agent",
    description:
      "Building a tool that can help you manage your email inbox more efficiently.",
    sourceCode: undefined,
    liveDemo: "/",
  },
  {
    name: ".personal website",
    description:
      "Building a personal website to showcase my projects and thoughts.",
    sourceCode: undefined,
    liveDemo: "/",
  },
] as const;

export const description =
  "Building beautiful and functional web applications with modern technologies.";

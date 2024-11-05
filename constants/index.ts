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
    url: "/projects/finance-tracker",
    description:
      "A tool that can help you manage your finances more efficiently.",
    link: "/projects/finance-tracker",
  },
  {
    name: "personal website",
    url: "/projects/personal-website",
    description: "A personal website to showcase my projects and thoughts.",
    link: "/projects/personal-website",
  },
] as const;

export const currentFocus = [
  {
    title: ".email agent",
    description:
      "Building a tool that can help you manage your email inbox more efficiently.",
    link: "/current/email-agent",
  },
  {
    title: ".personal website",
    description:
      "Building a personal website to showcase my projects and thoughts.",
    link: "/current/personal-website",
  },
] as const;

export const description =
  "Building beautiful and functional web applications with modern technologies.";

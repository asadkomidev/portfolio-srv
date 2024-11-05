import { FC } from "react";
import Link from "next/link";
import { socialLinks } from "@/constants";

export const Contacts: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 mt-2">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
};

const SocialLink: FC<{ link: (typeof socialLinks)[number] }> = ({ link }) => {
  const Icon = link.icon;
  return (
    <Link href={link.url} target="_blank" rel="noopener noreferrer">
      <Icon className="size-4" />
    </Link>
  );
};

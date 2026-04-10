import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function SocialLinks({
  size = 20,
  gap = 16,
}: {
  size: number;
  gap: number;
}) {
  return (
    <div style={{ gap: `${gap}px` }} className="flex gap-4 dark:text-white">
      <Link
        title="Github"
        href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github
          width={size}
          height={size}
          cursor={"pointer"}
          className="hover:text-primary-300"
        />
      </Link>
      <Link
        title="Gmail"
        href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-error-300"
      >
        <Mail width={size} height={size} cursor={"pointer"} />
      </Link>
      <Link
        title="Linkedin"
        href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary-200"
      >
        <Linkedin width={size} height={size} cursor={"pointer"} />
      </Link>
    </div>
  );
}

import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-8 p-4 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between bg-background">
      <p className="text-center sm:text-left">
        © {new Date().getFullYear()} Desenvolvido por{" "}
        <span className="font-semibold text-foreground">Thiago Moreira</span>
      </p>

        <div className="flex gap-4 mt-2 sm:mt-0">
        <a
          href="https://github.com/Thiagodsm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-silva-moreira/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          <LinkedInLogoIcon className="w-5 h-5" />
        </a>
      </div>

    </footer>
  )
}

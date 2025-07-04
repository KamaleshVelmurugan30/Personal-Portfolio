import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-bold text-xl mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Kamalesh V
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Software Developer
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/KamaleshVelmurugan30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/kamalesh-v-8421b1308"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kamaleshvelmurugan30@gmail.com"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} Made by Kamalesh V
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
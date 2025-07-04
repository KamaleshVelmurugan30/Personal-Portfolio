import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Rocket } from "lucide-react"

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-bg/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey and upcoming projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Section */}
          <Card className="border-2 border-dashed border-primary/30 bg-gradient-bg/20 hover:border-primary/50 transition-colors">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <div className="inline-flex p-6 bg-gradient-primary rounded-full text-white mb-4">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Exciting Projects Coming Soon!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  I'm currently working on exciting projects that will showcase my skills and creativity. 
                  Stay tuned for amazing web applications and software solutions!
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <a 
                    href="https://github.com/KamaleshVelmurugan30" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Code className="w-4 h-4 mr-2" />
                  See Progress
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Future Projects Preview */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="border-primary/10 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-primary rounded-full mb-4 w-3/4" />
                <h4 className="font-semibold text-lg mb-2">Web Applications</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Building responsive and interactive web applications using modern frameworks and best practices.
                </p>
                <div className="flex items-center text-sm text-primary">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  In Development
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-2 bg-gradient-secondary rounded-full mb-4 w-1/2" />
                <h4 className="font-semibold text-lg mb-2">Open Source</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contributing to open source projects and sharing knowledge with the developer community.
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Github className="w-4 h-4 mr-1" />
                  Planning Phase
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
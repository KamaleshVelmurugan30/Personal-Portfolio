import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-bg/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, background, and aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Hi there! 👋
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Kamalesh V, a Computer Science and Engineering student at R.M.K Engineering College, 
                currently in my second year. I'm a passionate developer who loves to code and learn, 
                with the goal of becoming a successful software developer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how things work behind the scenes. 
                Now, I'm actively building my skills in programming languages and web technologies, 
                always eager to take on new challenges and learn from every experience.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-soft transition-all duration-300 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Bachelor of Engineering in Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      R.M.K Engineering College (2024 – Present)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg text-white">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Current Role</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      Web Development Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Shadowfox
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Building solid foundations in software development, 
                      with a focus on creating meaningful and impactful solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
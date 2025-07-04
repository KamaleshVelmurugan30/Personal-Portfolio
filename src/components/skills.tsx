import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Globe } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "C"],
      color: "bg-gradient-primary"
    },
    {
      icon: Globe,
      title: "Web Technologies", 
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-gradient-secondary"
    },
    {
      icon: Palette,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub"],
      color: "bg-primary/20 text-primary"
    },
    {
      icon: Database,
      title: "Currently Learning",
      skills: ["React", "Node.js", "MongoDB"],
      color: "bg-accent/20 text-accent-foreground"
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="hover:shadow-soft transition-all duration-300 border-primary/10 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-lg mb-4 ${category.color}`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-primary/10 bg-gradient-bg/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently expanding my knowledge in modern web development frameworks and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export interface UseCase {
  title: string;
  friction: string;
  solution: string;
  value: string;
}

export interface DepartmentSection {
  department: string;
  icon: React.ElementType;
  color: string;
  useCases: UseCase[];
}

const UseCaseCard = ({ useCase }: { useCase: UseCase }) => (
  <div className="p-5 rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-colors">
    <div className="mb-3">
      <h4 className="font-semibold text-foreground text-sm leading-snug">{useCase.title}</h4>
    </div>

    <div className="space-y-3 text-sm">
      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span className="font-medium text-yellow-500/90 text-xs uppercase tracking-wide">Friction</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.friction}</p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <Lightbulb className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
          <span className="font-medium text-cyan-400/90 text-xs uppercase tracking-wide">KOGNIX AI</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.solution}</p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />
          <span className="font-medium text-green-400/90 text-xs uppercase tracking-wide">Value Delivered</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.value}</p>
      </div>
    </div>
  </div>
);

interface DepartmentUseCasesProps {
  title: string;
  highlightWord: string;
  subtitle: string;
  departments: DepartmentSection[];
}

export const DepartmentUseCases = ({ title, highlightWord, subtitle, departments }: DepartmentUseCasesProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            Comprehensive Use Cases
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {title} <span className="bg-gradient-accent bg-clip-text text-transparent">{highlightWord}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div>
          <Accordion type="multiple" className="space-y-4">
            {departments.map((dept, i) => (
              <AccordionItem key={i} value={`dept-${i}`} className="border border-border rounded-xl px-1 bg-card/20">
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className={`p-2 rounded-lg bg-muted/50 ${dept.color}`}>
                      <dept.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-base">{dept.department}</span>
                      <span className="text-muted-foreground text-sm ml-2">({dept.useCases.length} use cases)</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid gap-3">
                    {dept.useCases.map((uc, j) => (
                      <UseCaseCard key={j} useCase={uc} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

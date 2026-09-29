import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

export interface UseCase {
  title: string;
  friction: string;
  solution: string;
  value: string;
}

export interface DepartmentSection {
  department: string;
  icon: React.ElementType;
  /** Legacy tint class; no longer used for styling. */
  color?: string;
  useCases: UseCase[];
}

interface DepartmentUseCasesProps {
  title: string;
  highlightWord: string;
  subtitle: string;
  departments: DepartmentSection[];
}

const COLUMNS: { key: keyof Omit<UseCase, "title">; label: string }[] = [
  { key: "friction", label: "The friction" },
  { key: "solution", label: "With KOGNIX" },
  { key: "value", label: "Value delivered" },
];

/** Department tabs + expandable use-case rows (friction → solution → value). */
export const DepartmentUseCases = ({ title, highlightWord, subtitle, departments }: DepartmentUseCasesProps) => {
  const root = useRef<HTMLElement>(null);
  const [dept, setDept] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  useScrollMotion(root);

  const total = departments.reduce((n, d) => n + d.useCases.length, 0);
  const current = departments[dept];

  const selectDept = (i: number) => {
    setDept(i);
    setOpen(0);
  };

  return (
    <section ref={root} data-motion className="border-t border-border">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Use cases · {total} across {departments.length} departments
            </p>
            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              {title} {highlightWord}
            </h2>
          </div>
          <p data-reveal className="max-w-md text-muted-foreground lg:col-span-4 lg:col-start-9">
            {subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Department selector */}
          <div className="lg:col-span-4">
            <div
              role="tablist"
              aria-label="Departments"
              className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-border lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {departments.map((d, i) => {
                const selected = i === dept;
                return (
                  <button
                    key={d.department}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectDept(i)}
                    className={`group flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 text-left text-sm transition-colors lg:rounded-none lg:border-0 lg:border-b lg:border-border lg:px-0 lg:py-4 ${
                      selected
                        ? "border-foreground bg-foreground text-background lg:bg-transparent lg:text-foreground"
                        : "border-border text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <d.icon className={`hidden h-4 w-4 shrink-0 lg:block ${selected ? "text-primary" : ""}`} />
                    <span className="lg:flex-1 lg:text-base">{d.department}</span>
                    <span className="font-mono text-xs opacity-60">{d.useCases.length}</span>
                    <span
                      aria-hidden="true"
                      className={`hidden h-px bg-primary transition-all duration-300 lg:block ${selected ? "w-6" : "w-0"}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Use cases */}
          <div className="lg:col-span-8" role="tabpanel" aria-label={current.department}>
            <ol key={dept} className="border-t border-border animate-in fade-in slide-in-from-bottom-2 duration-300">
              {current.useCases.map((uc, i) => {
                const isOpen = open === i;
                return (
                  <li key={uc.title} className="border-b border-border">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-center gap-5 py-6 text-left"
                    >
                      <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`flex-1 text-lg font-medium tracking-tight transition-colors md:text-xl ${isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}>
                        {uc.title}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-45 border-primary bg-primary text-primary-foreground" : "border-border group-hover:border-foreground/40"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="grid gap-6 pb-8 pl-9 md:grid-cols-3">
                          {COLUMNS.map((col, c) => (
                            <div key={col.key} className={c === 1 ? "md:border-x md:border-border md:px-6" : ""}>
                              <p className={`font-mono text-[10px] uppercase tracking-[0.14em] ${c === 1 ? "text-primary" : "text-muted-foreground"}`}>
                                {col.label}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{uc[col.key]}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

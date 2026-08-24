import type { Project } from "@/types/project";

interface SystemFlowMiniProps {
  nodes: Project["systemFlow"];
}

export function SystemFlowMini({ nodes }: SystemFlowMiniProps) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="relative flex flex-col gap-0 py-1">
      {/* Vertical connector line */}
      <div 
        className="absolute left-[7px] top-2 bottom-2 w-px bg-border" 
        aria-hidden="true" 
      />

      <div className="flex flex-col">
        {nodes.map((node, i) => (
          <div key={i} className="group/node relative flex items-start gap-4 pl-5 py-2.5">
            {/* Node dot */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <div className="h-[14px] w-[14px] rounded-full border-2 border-border bg-card transition-colors duration-300 group-hover/node:border-primary group-hover/node:bg-primary/10" />
              <div className="absolute inset-1.5 rounded-full bg-muted-foreground/30 transition-colors duration-300 group-hover/node:bg-primary" />
            </div>
            
            {/* Node content */}
            <div className="flex flex-col">
              <p className="text-xs font-mono font-semibold text-foreground leading-tight">
                {node.label}
              </p>
              <p className="mt-0.5 text-[10px] font-mono text-muted-foreground leading-tight">
                {node.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
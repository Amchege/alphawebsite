"use client";

import { cn } from "@/lib/cn";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onFilterChange: (category: string) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onFilterChange,
}: ProjectFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onFilterChange(category)}
            className={cn(
              "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ArrowRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { twMerge } from "tailwind-merge";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1E293B] rounded-3xl overflow-hidden shadow-lg hover:shadow-[#6366F1]/10 transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-[#1A1A24]">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent opacity-60" />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <a
            href={`/projects/${project.slug}`}
            className="text-sm font-bold flex items-center gap-2 text-[#6366F1] group-hover:translate-x-1 transition-transform"
          >
            View Details <ArrowRight size={16} />
          </a>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              className="text-slate-400 hover:text-[#6366F1] transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.demoUrl}
              className="text-slate-400 hover:text-[#6366F1] transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "AI/Automation",
    "Tool",
    "UI/UX",
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          All Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl"
        >
          A comprehensive list of my work, ranging from complex full-stack
          applications to experimental AI tools and minimalist UI experiments.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={twMerge(
                "px-5 py-2.5 rounded-2xl text-sm font-bold transition-all border",
                activeCategory === cat
                  ? "bg-[#6366F1] text-white border-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-white dark:bg-[#111118] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-[#1E293B] hover:border-[#6366F1]/50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 bg-white dark:bg-[#111118] border border-slate-200 dark:border-[#1E293B] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 text-sm"
          />
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-[#111118] rounded-2xl text-slate-400 mb-6">
            <Filter size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">No projects found</h3>
          <p className="text-slate-500">
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
}

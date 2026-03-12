import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { projects } from "@/data/projects";
import { twMerge } from "tailwind-merge";

export default function ProjectDetailPage({ params }) {
  const { slug } = params || {};
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project)
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <a href="/projects" className="text-[#6366F1] font-bold">
          Back to All Projects
        </a>
      </div>
    );

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#6366F1] transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to All Projects
        </a>

        <div className="mb-12">
          <span className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] text-[10px] uppercase tracking-widest font-bold rounded-full border border-[#6366F1]/20 mb-6 inline-block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={project.demoUrl}
            className="px-8 py-4 bg-[#6366F1] text-white rounded-2xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
          >
            Live Demo <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            className="px-8 py-4 bg-slate-100 dark:bg-[#111118] border border-slate-200 dark:border-[#1E293B] rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-[#1A1A24] transition-all flex items-center gap-2"
          >
            View Repository <Github size={20} />
          </a>
        </div>

        <div className="aspect-video w-full rounded-[40px] overflow-hidden bg-slate-100 dark:bg-[#111118] border border-slate-200 dark:border-[#1E293B] mb-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#6366F1] rounded-full" />
              The Idea
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              {project.theIdea}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#6366F1] rounded-full" />
              Challenges & Solutions
            </h2>
            <div className="grid gap-6">
              {project.challenges.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-[#1E293B] p-8 rounded-3xl"
                >
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-lg font-bold">{item.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-green-500 mb-2">
                        The Solution
                      </h4>
                      <p className="text-lg text-slate-500 dark:text-slate-400">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#6366F1] rounded-full" />
              What I Learned
            </h2>
            <ul className="space-y-4">
              {project.whatILearned.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start text-lg text-slate-500 dark:text-slate-400"
                >
                  <span className="w-6 h-6 bg-[#6366F1]/10 text-[#6366F1] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight size={14} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-32 pt-12 border-t border-[#1E293B] flex items-center justify-between">
          <a href={`/projects/${prevProject.slug}`} className="group">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
              Previous Project
            </span>
            <span className="text-lg font-bold group-hover:text-[#6366F1] transition-colors flex items-center gap-2">
              <ArrowLeft size={18} /> {prevProject.title}
            </span>
          </a>
          <a
            href={`/projects/${nextProject.slug}`}
            className="group text-right"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">
              Next Project
            </span>
            <span className="text-lg font-bold group-hover:text-[#6366F1] transition-colors flex items-center gap-2 justify-end">
              {nextProject.title} <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { motion } from "motion/react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Printer,
} from "lucide-react";
import { resumeData } from "@/data/resume";

export default function CVPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 print:p-0 print:max-w-full">
      {/* Header Section with Name and Contact Info */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16 print:flex-row">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            {resumeData.personalInfo.name}
          </motion.h1>
          <p className="text-2xl text-[#6366F1] font-bold mb-8">
            {resumeData.personalInfo.role}
          </p>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <Mail size={18} /> {resumeData.personalInfo.email}
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} /> {resumeData.personalInfo.location}
            </div>
            <div className="flex items-center gap-3">
              <Github size={18} /> GitHub.com/Qasim-Alhardanee
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={18} /> LinkedIn.com/in/qasim-alhardanee
            </div>
          </div>
        </div>

        {/* 
          CV Download Actions
          
          Two options for getting the CV:
          1. Download PDF: Links to the PDF file (if available)
          2. Print to PDF: Uses browser's print dialog
          
          To add your CV PDF file:
          - Place your PDF in: /apps/web/public/Qasim-Alhardanee-CV.pdf
          - The download button will then download the actual PDF
          - If no PDF exists, users can still print this page to PDF
        */}
        <div className="flex flex-col gap-3 print:hidden">
          {/* Direct PDF Download Button */}
          <a
            href="/Qasim-Alhardanee-CV.pdf"
            download
            className="px-8 py-4 bg-[#6366F1] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
          >
            <Download size={20} /> Download PDF
          </a>

          {/* Print to PDF Button (fallback option) */}
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
          >
            <Printer size={20} /> Print to PDF
          </button>
        </div>
      </div>

      {/* CV Content Grid: Main content on left, Skills sidebar on right */}
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-[#1E293B] pb-2 uppercase tracking-widest text-slate-400">
              Professional Summary
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              {resumeData.personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 border-b border-[#1E293B] pb-2 uppercase tracking-widest text-slate-400">
              Work Experience
            </h2>
            <div className="space-y-12">
              {resumeData.experience.map((job, i) => (
                <div key={i}>
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <span className="text-sm font-bold text-[#6366F1]">
                      {job.duration}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-slate-400 mb-4">
                    {job.company}
                  </p>
                  <ul className="space-y-3">
                    {job.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-slate-500 dark:text-slate-400"
                      >
                        <span className="text-[#6366F1] mt-1.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 border-b border-[#1E293B] pb-2 uppercase tracking-widest text-slate-400">
              Education
            </h2>
            <div className="space-y-8">
              {resumeData.education.map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-wrap justify-between items-start"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-slate-400 font-medium">
                      {edu.institution}
                    </p>
                    {edu.status && (
                      <p className="text-xs text-[#6366F1] font-bold uppercase tracking-wider mt-2">
                        {edu.status}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-bold text-[#6366F1]">
                    {edu.duration}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-8 border-b border-[#1E293B] pb-2 uppercase tracking-widest text-slate-400">
              Technical Skills
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#6366F1] uppercase tracking-widest mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 dark:bg-[#111118] text-sm font-medium rounded-lg border border-slate-200 dark:border-[#1E293B]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#6366F1] uppercase tracking-widest mb-4">
                  AI & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...resumeData.skills.tools, ...resumeData.skills.ai].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 dark:bg-[#111118] text-sm font-medium rounded-lg border border-slate-200 dark:border-[#1E293B]"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 border-b border-[#1E293B] pb-2 uppercase tracking-widest text-slate-400">
              Languages
            </h2>
            <div className="space-y-4">
              {resumeData.skills.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex justify-between items-center"
                >
                  <span className="font-bold">{lang.name}</span>
                  <span className="text-sm text-slate-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body { background: white !important; color: black !important; }
          .dark { background: white !important; color: black !important; }
          h1, h2, h3, h4, p, span, li { color: black !important; }
          .text-[#6366F1] { color: #6366F1 !important; }
          .bg-[#6366F1] { background-color: #6366F1 !important; }
          .border-[#1E293B] { border-color: #eee !important; }
        }
      `}</style>
    </div>
  );
}

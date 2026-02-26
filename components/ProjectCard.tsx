'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`
        project-card
        relative overflow-hidden block bg-gray-200 min-h-[400px]
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: isHovered ? 'none' : 'pointer' }}
    >
      <Image
        src={project.hero}
        alt={project.name}
        fill
        className={`
          object-cover
          transition-all duration-700 ease-out
          ${isHovered ? 'scale-105 brightness-110' : 'scale-100'}
        `}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      <div
        className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
          flex items-end p-8 md:p-12
          transition-opacity duration-500 ease-out
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div
          className={`
            w-full
            transition-transform duration-500 ease-out
            ${isHovered ? 'translate-y-0' : 'translate-y-5'}
          `}
          style={{ transitionDelay: '0.1s' }}
        >
          <h2
            className="text-4xl md:text-5xl font-serif font-light text-white pb-3 inline-block relative"
            style={{ color: project.accent }}
          >
            {project.name}
            <span
              className={`
                absolute bottom-0 left-0 h-[2px] bg-current
                transition-all duration-600 ease-out
                ${isHovered ? 'w-full' : 'w-0'}
              `}
              style={{
                transitionDelay: '0.2s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </h2>
          <p className="text-sm md:text-base text-white/85 mt-3 font-light tracking-wide">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
}

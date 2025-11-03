'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack application leveraging OpenAI and LangGraph for intelligent content generation with a modern React frontend.',
      image: 'https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-125567.jpg?t=st=1762200204~exp=1762203804~hmac=933013bc180d2238af31a40439f5f8057adff565502088e4ce6b4891781e281d&w=2000',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostCSS', 'ESLint', 'Node.js', 'npm', 'Git', 'Vercel'],
      github: 'https://github.com/m-hunzala',
      demo: 'https://vesto-9b3c-5lfnjt5fd-m-hunzalas-projects.vercel.app/',
    },
    
    {
      title: 'E-Commerce Platform',
      description: 'A modern, full-stack e-commerce web application built with Next.js, TypeScript, and Tailwind CSS, featuring Stripe payment integration, Supabase backend, real-time inventory management, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80',
      tags: ['Next.js' , 'TypeScript' , 'React' , 'Tailwind CSS' , 'Stripe' , 'Supabase' , 'Vite'],
      github: 'https://github.com/m-hunzala',
      demo: 'https://digistore-murex.vercel.app/',
    },
    {
      title: 'Brand Identity System',
      description: 'A modern web project built with Next.js, TypeScript, and Tailwind CSS, powered by Supabase backend and enhanced through Vibe Coding with advanced Prompt & Context Engineering.',
      image: 'https://trendsetterzs.com/assets/product-17.webp',
      tags: ['Next.js' , 'TypeScript' , 'Tailwind CSS' , 'Supabase' , 'Vibe Coding' , 'Prompt' , 'Context Engineering'],
      github: 'https://github.com/m-hunzala',
      demo: 'https://trendsetterzs.com/',
    },
    // {
    //   title: 'Automation Workflow',
    //   description: 'n8n-powered automation system integrating multiple APIs for streamlined business processes and data synchronization.',
    //   image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['n8n', 'Python', 'REST APIs', 'Webhooks'],
    //   github: 'https://github.com/m-hunzala',
    //   demo: '#',
    // },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning web development, AI integration, and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-800/30 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

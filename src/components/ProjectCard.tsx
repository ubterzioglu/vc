import { motion } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, Linkedin } from "lucide-react";

const bgColors = [
    'bg-primary',
    'bg-secondary',
    'bg-tertiary',
    'bg-accent',
    'bg-highlight',
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -4,
                transition: { duration: 0.2 },
            }}
            className="group relative bg-card border-4 border-foreground hover:shadow-brutal transition-all h-full flex flex-col"
        >
            {/* Image Section */}
            <div className="aspect-video bg-muted border-b-4 border-foreground relative overflow-hidden group">
                {project.image_url ? (
                    <img
                        src={project.image_url}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className={`w-full h-full ${bgColors[index % bgColors.length]} flex items-center justify-center`}>
                        <span className="text-4xl font-black text-foreground/20 uppercase tracking-tighter">
                            {project.country === 'TR' ? 'TR' : 'GL'}
                        </span>
                    </div>
                )}

                {/* Country Badge */}
                <div className="absolute top-2 right-2 px-2 py-1 bg-background border-2 border-foreground text-xs font-bold uppercase">
                    {project.country === 'TR' ? '🇹🇷 Turkey' : '🌍 Global'}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                        {project.name}
                    </h3>
                    {project.motto && (
                        <p className="text-sm font-bold text-secondary uppercase tracking-tight">
                            {project.motto}
                        </p>
                    )}
                </div>

                {/* Description */}
                {project.description && (
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                        {project.description}
                    </p>
                )}

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t-2 border-muted mt-auto">
                    {project.project_url && (
                        <a
                            href={project.project_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-bold hover:text-primary transition-colors hover:underline"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Visit
                        </a>
                    )}

                    {!project.is_anonymous && project.linkedin_url && (
                        <a
                            href={project.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-bold hover:text-primary transition-colors hover:underline text-muted-foreground"
                        >
                            <Linkedin className="w-4 h-4" />
                            Creator
                        </a>
                    )}

                    {project.is_anonymous && (
                        <span className="text-xs font-bold text-muted-foreground italic ml-auto">
                            Anonymous Creator
                        </span>
                    )}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-primary" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;

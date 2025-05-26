
import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Shield, Lock, Eye } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl: string;
  category: ('security' | 'development' | 'research')[];
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      title: "Student Attendance Management Based on Facial Recognition",
      description: "A system that uses facial recognition to automate student attendance tracking.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      link: "#",
      imageUrl: "https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp",
      category: ["research","development"]
    },
    {
      title: "Real-Time Network Intrusion Detection System",
      description: "A system for detecting and responding to network intrusions in real-time.",
      technologies: ["JnetPCAP", "JAVA", "Networking"],
      link: "https://github.com/Baazza-Salah/Network-Intrusion-Detection-System",
      imageUrl: "https://learn.g2.com/hubfs/G2CM_FI634_Learn_Article_Images_%5BNetwork_traffic_analysis%5D_V1b.png",
      category: ["security"]
    },
    {
      title: "Behavioral Analysis to Prevent Internal Cyber Attacks",
      description: "A system that analyzes user behavior to detect and prevent internal cyber threats.",
      technologies: ["Machine Learning", "Python", "Data Analysis"],
      link: "https://github.com/Baazza-Salah/BLADE",
      imageUrl: "https://www.softactivity.com/wp-content/uploads/cost-of-insider-threat.jpg",
      category: ["security"]
    },
    {
      title: "Automated Attacks and Malware Analysis and Alerting",
      description: "A tool for analyzing malware and automating alerts for potential threats.",
      technologies: ["Python", "Malware Analysis", "Automation"],
      link: "#",
      imageUrl: "https://sectigostore.com/blog/wp-content/uploads/2020/09/malware-analysis-feature.jpg",
      category: ["security", "research"]
    },
    {
      title: "System Monitoring Using Nagios Core",
      description: "A monitoring system for tracking the health and performance of IT infrastructure.",
      technologies: ["Nagios", "Linux", "Networking"],
      link: "#",
      imageUrl: "https://mlfk3cv5yvnx.i.optimole.com/cb:HA53.300ea/w:930/h:485/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/elementor/thumbs/Guide-Exploring-IT-systems-monitoring--qvjtao4r49fexmx4w34hyndvme2rgahafa8zczw41e.png",
      category: ["security"]
    },
    {
      title: "Network and Cyberdefense: pfSense Architecture",
      description: "A network defense system using pfSense for firewall and VPN configurations.",
      technologies: ["pfSense", "Networking", "Cybersecurity"],
      link: "#",
      imageUrl: "https://roverba.com/wp-content/uploads/2023/07/securiser-son-reseau-informatique-par-firewall.jpeg",
      category: ["security"]
    },
    {
      title: "HR Management System",
      description: "A web-based system for managing HR operations such as employee records and payroll.",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      link: "https://github.com/Baazza-Salah/Vacation-Management",
      imageUrl: "https://www.ismartrecruit.com/upload/blog/main_image/HR_Manager_Skills1.webp",
      category: ["development"]
    },
    {
      title: "ChatApp",
      description: "A real-time chat application with user authentication and message encryption.",
      technologies: ["JAVA", "Socket.IO"],
      link: "https://github.com/Baazza-Salah/chatapp-java",
      imageUrl: "https://img.freepik.com/premium-vector/chat-lovers-people-chatting-using-mobile-application-social-network-online-dating-concept-vector-illustration_106788-3178.jpg",
      category: ["development"]
    },
    {
      title: "JobFinder Platform",
      description: "A platform for job seekers to find opportunities and employers to post job listings.",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      link: "https://github.com/Baazza-Salah/JobFinder",
      imageUrl: "https://www.michaelpage.com.hk/sites/michaelpage.com.hk/files/legacy/16977-tt2-js-article-img1.jpg",
      category: ["development"]
    },
    {
      title: "Bash Script for Easy Backup on Cloud",
      description: "A bash script to automate backups to cloud storage services.",
      technologies: ["Bash", "Linux", "Cloud Storage"],
      link: "https://github.com/Baazza-Salah/EasyBackup",
      imageUrl: "https://canto-wp-media.s3.amazonaws.com/app/uploads/2020/02/19192548/mega-file-upload-4.jpg",
      category: ["development"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'security': return <Shield className="w-4 h-4" />;
      case 'development': return <FolderOpen className="w-4 h-4" />;
      case 'research': return <Eye className="w-4 h-4" />;
      default: return <FolderOpen className="w-4 h-4" />;
    }
  };

  return (
    <Section id="projects" title="Projects" className="bg-cyber-navy/30">
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={cn(
            "px-4 py-2 rounded-md text-sm transition-colors",
            filter === 'all' 
              ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50" 
              : "bg-cyber-muted text-gray-300 hover:bg-cyber-blue/10"
          )}
        >
          All Projects
        </button>
        <button
          onClick={() => setFilter('security')}
          className={cn(
            "px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2",
            filter === 'security' 
              ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50" 
              : "bg-cyber-muted text-gray-300 hover:bg-cyber-blue/10"
          )}
        >
          <Shield className="w-4 h-4" />
          Security
        </button>
        <button
          onClick={() => setFilter('development')}
          className={cn(
            "px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2",
            filter === 'development' 
              ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50" 
              : "bg-cyber-muted text-gray-300 hover:bg-cyber-blue/10"
          )}
        >
          <FolderOpen className="w-4 h-4" />
          Development
        </button>
        <button
          onClick={() => setFilter('research')}
          className={cn(
            "px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2",
            filter === 'research' 
              ? "bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50" 
              : "bg-cyber-muted text-gray-300 hover:bg-cyber-blue/10"
          )}
        >
          <Eye className="w-4 h-4" />
          Research
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="group bg-cyber-muted border border-cyber-blue/20 rounded-lg overflow-hidden hover:border-cyber-blue/40 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cyber-blue/10 group-hover:bg-cyber-blue/5 transition-colors"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-cyber-navy/80 px-2 py-1 rounded flex items-center gap-1 text-xs">
                {project.category.map((cat, i) => (
                  <React.Fragment key={i}>
                    {getCategoryIcon(cat)}
                    <span className="capitalize">{cat}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-cyber-blue">{project.title}</h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-cyber-navy px-2 py-1 rounded text-xs text-cyber-blue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award, FileText, FileImage, ExternalLink, Github, Calendar, MapPin, Grid3X3, Eye } from 'lucide-react';
import NavigationTabs from '@/components/NavigationTabs';
import CommunitySection from '@/components/CommunitySection';
import MemoryImagesSection from '@/components/MemoryImagesSection';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample data - replace with your actual projects, achievements, and certificates
  const projects = [
    {
      id: 1,
      title: "Nit Delhi Website",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/images/nitdelhi.png", // Make sure this image exists in the public/images folder
      technologies: ["React", "Node.js", "MongoDB", "Wordpress"],
      githubUrl: "#",
      liveUrl: "https://nitdelhi.ac.in/",
      date: "2024"
    },
    {
      id: 2,
      title: "Khalsa College of Eng and Tech Website", 
      description: "Collaborative task management with real-time updates",
      image: "kcet.png",
      technologies: ["wordpress", "Firebase", "Html", "CSS", "JavaScript"  ],
      githubUrl: "https://wwww.kcet.ac.in/",
      liveUrl: "https://www.kcet.ac.in/",
      date: "2022"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "Flask"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Innovation Award",
      organization: "Tech Conference 2024",
      date: "March 2024",
      description: "Recognized for outstanding innovation in web development",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "Hackathon Winner",
      organization: "CodeFest 2023",
      date: "November 2023",
      description: "First place in 48-hour coding competition",
      location: "New York, NY"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "Ongoing",
      description: "Active contributor to major open source projects",
      location: "Remote"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      credentialId: "AWS-12345"
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      credentialId: "META-67890"
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      credentialId: "GCP-54321"
    }
  ];

  // New grid posts data
  const gridPosts = [
    {
      id: 1,
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      category: "Design",
      views: "1.2k"
    },
    {
      id: 2,
      title: "Mobile App",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
      category: "Development",
      views: "856"
    },
    {
      id: 3,
      title: "Data Analytics",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      category: "Analytics",
      views: "2.1k"
    },
    {
      id: 4,
      title: "AI Project",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      category: "AI/ML",
      views: "3.4k"
    },
    {
      id: 5,
      title: "E-commerce",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      category: "Web App",
      views: "945"
    },
    {
      id: 6,
      title: "Portfolio Site",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      category: "Design",
      views: "678"
    },
    {
      id: 7,
      title: "Dashboard",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      category: "UI/UX",
      views: "1.8k"
    },
    {
      id: 8,
      title: "API Service",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      category: "Backend",
      views: "1.1k"
    },
    {
      id: 9,
      title: "Chat App",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      category: "Real-time",
      views: "2.7k"
    },
    {
      id: 10,
      title: "Blockchain",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      category: "Web3",
      views: "4.2k"
    },
    {
      id: 11,
      title: "Game Dev",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      category: "Gaming",
      views: "1.5k"
    },
    {
      id: 12,
      title: "Cloud App",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      category: "Cloud",
      views: "987"
    },
    {
      id: 13,
      title: "IoT System",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      category: "IoT",
      views: "743"
    },
    {
      id: 14,
      title: "Security Tool",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      category: "Security",
      views: "1.3k"
    },
    {
      id: 15,
      title: "AR Experience",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      category: "AR/VR",
      views: "2.9k"
    },
    {
      id: 16,
      title: "DevOps Tool",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      category: "DevOps",
      views: "1.6k"
    }
  ];

  // New 4x4 certificate grid data
  const certificateGrid = [
    {
      id: 1,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      credentialId: "AWS-12345",
      category: "Cloud Computing",
      views: "2.3k"
    },
    {
      id: 2,
      title: "React Developer",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      credentialId: "META-67890",
      category: "Frontend",
      views: "1.8k"
    },
    {
      id: 3,
      title: "Google Cloud Pro",
      issuer: "Google Cloud",
      date: "2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      credentialId: "GCP-54321",
      category: "Cloud Platform",
      views: "1.5k"
    },
    {
      id: 4,
      title: "Docker Certified",
      issuer: "Docker Inc",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      credentialId: "DOCK-98765",
      category: "DevOps",
      views: "1.2k"
    },
    {
      id: 5,
      title: "Kubernetes Admin",
      issuer: "CNCF",
      date: "2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      credentialId: "K8S-11111",
      category: "Container Orchestration",
      views: "2.1k"
    },
    {
      id: 6,
      title: "MongoDB Developer",
      issuer: "MongoDB Inc",
      date: "2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      credentialId: "MONGO-22222",
      category: "Database",
      views: "967"
    },
    {
      id: 7,
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      credentialId: "AZ-33333",
      category: "Cloud Services",
      views: "1.4k"
    },
    {
      id: 8,
      title: "Python Expert",
      issuer: "Python Institute",
      date: "2023",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      credentialId: "PY-44444",
      category: "Programming",
      views: "1.9k"
    },
    {
      id: 9,
      title: "Cybersecurity",
      issuer: "CompTIA",
      date: "2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      credentialId: "SEC-55555",
      category: "Security",
      views: "2.7k"
    },
    {
      id: 10,
      title: "Machine Learning",
      issuer: "Stanford",
      date: "2023",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      credentialId: "ML-66666",
      category: "AI/ML",
      views: "3.2k"
    },
    {
      id: 11,
      title: "Blockchain Dev",
      issuer: "Ethereum",
      date: "2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      credentialId: "ETH-77777",
      category: "Web3",
      views: "2.8k"
    },
    {
      id: 12,
      title: "UI/UX Design",
      issuer: "Adobe",
      date: "2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      credentialId: "ADO-88888",
      category: "Design",
      views: "1.6k"
    },
    {
      id: 13,
      title: "Digital Marketing",
      issuer: "Google",
      date: "2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      credentialId: "GM-99999",
      category: "Marketing",
      views: "1.1k"
    },
    {
      id: 14,
      title: "Data Science",
      issuer: "IBM",
      date: "2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      credentialId: "IBM-00000",
      category: "Data Analytics",
      views: "2.4k"
    },
    {
      id: 15,
      title: "Agile Scrum",
      issuer: "Scrum Alliance",
      date: "2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      credentialId: "SCRUM-12121",
      category: "Project Management",
      views: "1.3k"
    },
    {
      id: 16,
      title: "Node.js Expert",
      issuer: "OpenJS Foundation",
      date: "2023",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      credentialId: "NODE-34343",
      category: "Backend",
      views: "1.7k"
    }
  ];

  // Projects Section Component
  const ProjectsSection = () => (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my most impactful and innovative development projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <Badge variant="outline" className="text-sm">{project.date}</Badge>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Grid Posts Section Component
  const GridPostsSection = () => (
    <div className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Grid3X3 className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Project Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my diverse portfolio through an interactive 4x4 grid showcase
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gridPosts.map((post, index) => (
            <Dialog key={post.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="aspect-square relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-1">{post.title}</h3>
                        <div className="flex items-center justify-between text-xs">
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <div className="p-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-lg mb-6"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{post.title}</h3>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <p className="text-gray-600">
                      This is a detailed view of the {post.title.toLowerCase()} project. 
                      Click the external link to view more details or visit the live demo.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );

  // Certificate Grid Section Component  
  const CertificateGridSection = () => (
    <div className="py-20 px-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 relative">
      {/* Floating elements for innovation */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-emerald-300/50 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-teal-300/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-cyan-300/50 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-emerald-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Certificate Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and credentials showcased in an interactive 4x4 grid
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {certificateGrid.map((cert, index) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="aspect-square relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-1 truncate">{cert.title}</h3>
                        <p className="text-xs opacity-90 mb-2 truncate">{cert.issuer}</p>
                        <div className="flex items-center justify-between text-xs">
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            {cert.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{cert.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-emerald-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{cert.title}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full rounded-lg mb-6 shadow-lg"
                  />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Category</p>
                      <p className="text-gray-600">{cert.category}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Issued</p>
                      <p className="text-gray-600">{cert.date}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Views</p>
                      <p className="text-gray-600">{cert.views}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Credential ID</p>
                      <p className="text-gray-600 text-xs">{cert.credentialId}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-3">
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
                      <FileImage className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );

  // Achievements Section Component
  const AchievementsSection = () => (
    <div className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milestones and recognitions that mark my professional journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={achievement.id} className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{achievement.location}</span>
                  </div>
                </div>
                <Badge variant="outline" className="mt-4">
                  {achievement.organization}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Certificates Section Component
  const CertificatesSection = () => (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Certificates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verified credentials and certifications in cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Dialog key={certificate.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{certificate.title}</h3>
                      <Badge variant="outline" className="text-sm">{certificate.date}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{certificate.issuer}</p>
                    <p className="text-sm text-gray-500">ID: {certificate.credentialId}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="p-4">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-6 text-center space-y-2">
                    <h3 className="text-2xl font-bold">{certificate.title}</h3>
                    <p className="text-lg text-gray-600">{certificate.issuer}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <span>Issued: {certificate.date}</span>
                      <span>ID: {certificate.credentialId}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-yellow-200/30 to-red-200/30 rounded-full blur-lg animate-pulse"></div>
      </div>

      {/* Hero Section with Enhanced Design */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/20 transform rotate-45"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Portfolio Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Discover my journey through innovative projects, remarkable achievements, and professional certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Badge variant="secondary" className="text-lg px-6 py-2 hover:scale-105 transition-transform">Projects</Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 hover:scale-105 transition-transform">Achievements</Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 hover:scale-105 transition-transform">Certificates</Badge>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Navigation Tabs with all sections */}
      <NavigationTabs
        projectsSection={<ProjectsSection />}
        gridPostsSection={<GridPostsSection />}
        certificateGridSection={<CertificateGridSection />}
        achievementsSection={<AchievementsSection />}
        certificatesSection={<CertificatesSection />}
        communitySection={<CommunitySection />}
        memoryImagesSection={<MemoryImagesSection />}
      />

      {/* Enhanced Call to Action with Innovation Structure */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        {/* Innovative geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-spin"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white/30 transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 transform rotate-12 animate-pulse"></div>
          </div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Ready to bring your next project to life? Let's collaborate and build something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-lg">
              Get In Touch
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
              View Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

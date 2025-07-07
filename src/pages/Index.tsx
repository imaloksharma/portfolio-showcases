import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award, FileText, FileImage, ExternalLink, Github, Calendar, MapPin, Grid3X3, Eye } from 'lucide-react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample data - replace with your actual projects, achievements, and certificates
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Portfolio Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover my journey through innovative projects, remarkable achievements, and professional certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-6 py-2">Projects</Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">Achievements</Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">Certificates</Badge>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
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
      </section>

      {/* New 4x4 Grid Posts Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
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
          
          {/* 4x4 Grid Layout */}
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
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
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
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4">
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
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to bring your next project to life? Let's collaborate and build something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors">
              Get In Touch
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              View Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

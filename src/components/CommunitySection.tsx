
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Clock, MapPin } from 'lucide-react';

const CommunitySection = () => {
  const communityWork = [
    {
      id: 1,
      organization: "Code for Good",
      role: "Lead Developer",
      type: "Volunteer",
      description: "Building tech solutions for non-profit organizations to maximize their impact",
      duration: "2 years",
      location: "Remote",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      skills: ["React", "Node.js", "MongoDB", "Project Management"],
      impact: "Helped 15+ NGOs digitize their operations"
    },
    {
      id: 2,
      organization: "Tech Mentorship Alliance",
      role: "Senior Mentor",
      type: "Team Member",
      description: "Mentoring junior developers and guiding them through their career journey",
      duration: "1.5 years",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      skills: ["Mentoring", "Career Guidance", "Technical Training", "Leadership"],
      impact: "Mentored 50+ developers, 80% got promoted"
    },
    {
      id: 3,
      organization: "Open Source Collective",
      role: "Core Contributor",
      type: "Team Member",
      description: "Contributing to open source projects and maintaining community libraries",
      duration: "3 years",
      location: "Global",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
      skills: ["Open Source", "Git", "Code Review", "Documentation"],
      impact: "500+ contributions, 10k+ stars across projects"
    },
    {
      id: 4,
      organization: "Local Coding Bootcamp",
      role: "Workshop Instructor",
      type: "Volunteer",
      description: "Teaching web development fundamentals to career changers and students",
      duration: "2 years",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop",
      skills: ["Teaching", "Curriculum Design", "JavaScript", "HTML/CSS"],
      impact: "Trained 200+ students, 90% job placement rate"
    },
    {
      id: 5,
      organization: "Environmental Tech Initiative",
      role: "Tech Lead",
      type: "Team Member",
      description: "Developing sustainable technology solutions for environmental conservation",
      duration: "1 year",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      skills: ["Sustainability", "IoT", "Data Analysis", "Team Leadership"],
      impact: "Reduced energy consumption by 30% in pilot programs"
    },
    {
      id: 6,
      organization: "Diversity in Tech",
      role: "Program Coordinator",
      type: "Volunteer",
      description: "Organizing events and programs to increase diversity in the tech industry",
      duration: "2.5 years",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      skills: ["Event Management", "Community Building", "Public Speaking", "Networking"],
      impact: "Organized 25+ events, connected 1000+ professionals"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 relative">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-indigo-300/50 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-300/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-300/50 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-indigo-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Community & Volunteer Work
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contributing to the community through volunteer work, mentorship, and collaborative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityWork.map((work, index) => (
            <Card key={work.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={work.image}
                  alt={work.organization}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={work.type === "Volunteer" ? "secondary" : "default"}
                    className="bg-white/90 backdrop-blur-sm"
                  >
                    {work.type}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-black/70 text-white border-white/30">
                    <Heart className="w-3 h-3 mr-1" />
                    {work.impact}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{work.organization}</h3>
                  <p className="text-indigo-600 font-semibold">{work.role}</p>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{work.description}</p>
                
                <div className="space-y-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{work.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{work.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {work.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
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
};

export default CommunitySection;


import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Camera, MapPin, Calendar, Eye, Heart } from 'lucide-react';

const MemoryImagesSection = () => {
  const memoryImages = [
    {
      id: 1,
      title: "Tech Conference 2024",
      location: "San Francisco, CA",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      description: "Amazing keynote about AI and future of technology",
      likes: "127",
      category: "Professional"
    },
    {
      id: 2,
      title: "Team Building Retreat",
      location: "Lake Tahoe, CA",
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      description: "Great bonding experience with the development team",
      likes: "89",
      category: "Team"
    },
    {
      id: 3,
      title: "Hackathon Victory",
      location: "New York, NY",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
      description: "Won first place with our innovative solution",
      likes: "234",
      category: "Achievement"
    },
    {
      id: 4,
      title: "Open Source Summit",
      location: "Austin, TX",
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop",
      description: "Contributing to the open source community",
      likes: "156",
      category: "Community"
    },
    {
      id: 5,
      title: "Mentorship Program",
      location: "Remote",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=400&fit=crop",
      description: "Helping junior developers grow their skills",
      likes: "98",
      category: "Mentorship"
    },
    {
      id: 6,
      title: "Startup Pitch Event",
      location: "Silicon Valley, CA",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=400&fit=crop",
      description: "Presenting our innovative tech solution",
      likes: "267",
      category: "Professional"
    },
    {
      id: 7,
      title: "Code Workshop",
      location: "Portland, OR",
      date: "September 2023",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop",
      description: "Teaching web development to local students",
      likes: "145",
      category: "Education"
    },
    {
      id: 8,
      title: "Tech Meetup",
      location: "Seattle, WA",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop",
      description: "Networking with fellow developers",
      likes: "78",
      category: "Networking"
    },
    {
      id: 9,
      title: "Innovation Lab",
      location: "Boston, MA",
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      description: "Exploring cutting-edge technologies",
      likes: "189",
      category: "Innovation"
    },
    {
      id: 10,
      title: "Community Outreach",
      location: "Denver, CO",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
      description: "Volunteering to teach coding to underserved communities",
      likes: "312",
      category: "Volunteer"
    },
    {
      id: 11,
      title: "AI Conference",
      location: "Miami, FL",
      date: "May 2023",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      description: "Learning about the latest in artificial intelligence",
      likes: "201",
      category: "Learning"
    },
    {
      id: 12,
      title: "Developer Awards",
      location: "Chicago, IL",
      date: "April 2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
      description: "Receiving recognition for outstanding contribution",
      likes: "456",
      category: "Recognition"
    },
    {
      id: 13,
      title: "Tech Podcast Recording",
      location: "Los Angeles, CA",
      date: "March 2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
      description: "Sharing insights on modern web development",
      likes: "167",
      category: "Media"
    },
    {
      id: 14,
      title: "Collaborative Project",
      location: "Phoenix, AZ",
      date: "February 2023",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
      description: "Working on a cross-functional team project",
      likes: "123",
      category: "Collaboration"
    },
    {
      id: 15,
      title: "Tech Expo 2023",
      location: "Las Vegas, NV",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      description: "Showcasing our latest technological innovations",
      likes: "289",
      category: "Exhibition"
    },
    {
      id: 16,
      title: "Year-End Celebration",
      location: "San Diego, CA",
      date: "December 2022",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      description: "Celebrating achievements and looking forward to new challenges",
      likes: "345",
      category: "Celebration"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 relative">
      {/* Creative floating elements */}
      <div className="absolute top-16 left-16 w-12 h-12 bg-rose-300/30 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-24 w-8 h-8 bg-pink-300/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-24 left-12 w-16 h-16 bg-fuchsia-300/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-16 w-6 h-6 bg-rose-400/50 rounded-full animate-bounce"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-rose-600 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Memory Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments from my professional journey and personal experiences
          </p>
        </div>
        
        {/* 4x4 Memory Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {memoryImages.map((memory, index) => (
            <Dialog key={memory.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="aspect-square relative">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-1 truncate">{memory.title}</h3>
                        <p className="text-xs opacity-90 mb-2 truncate">{memory.location}</p>
                        <div className="flex items-center justify-between text-xs">
                          <Badge variant="secondary" className="text-xs px-2 py-1">
                            {memory.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3 fill-current" />
                            <span>{memory.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-rose-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {memory.date}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{memory.title}</h3>
                      <p className="text-gray-600">{memory.description}</p>
                    </div>
                  </div>
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full rounded-lg mb-6 shadow-lg"
                  />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">{memory.location}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Date</p>
                      <p className="text-gray-600">{memory.date}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Category</p>
                      <p className="text-gray-600">{memory.category}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-800">Likes</p>
                      <p className="text-gray-600">{memory.likes}</p>
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
};

export default MemoryImagesSection;

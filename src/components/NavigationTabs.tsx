
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Users, Award, FileText, Camera, Briefcase, Menu, Home, ExternalLink } from 'lucide-react';

interface NavigationTabsProps {
  aboutSection: React.ReactNode;
  projectsSection: React.ReactNode;
  gridPostsSection: React.ReactNode;
  certificateGridSection: React.ReactNode;
  achievementsSection: React.ReactNode;
  certificatesSection: React.ReactNode;
  communitySection: React.ReactNode;
  memoryImagesSection: React.ReactNode;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  aboutSection,
  projectsSection,
  gridPostsSection,
  certificateGridSection,
  achievementsSection,
  certificatesSection,
  communitySection,
  memoryImagesSection
}) => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { value: "about", label: "About Me", icon: Users },
    { value: "projects", label: "Projects", icon: Briefcase },
    { value: "gallery", label: "Gallery", icon: Award },
    { value: "certificates", label: "Certificates", icon: FileText },
    { value: "achievements", label: "Achievements", icon: Award },
    { value: "community", label: "Community", icon: Users },
    { value: "memories", label: "Memories", icon: Camera },
    { value: "certs-detail", label: "Certifications", icon: FileText },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-8 md:py-20 px-2 md:px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore my professional journey through different aspects of my work and experiences
          </p>
        </div>

        {/* Home Button */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Button 
            onClick={scrollToTop}
            variant="outline" 
            className="mr-4 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Button>
          <Button 
            asChild
            variant="default" 
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <a href="https://www.alokkumarsharma.in/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Visit Main Site</span>
              <span className="sm:hidden">Site</span>
            </a>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile Navigation */}
          <div className="block md:hidden mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between p-4 h-auto">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const CurrentIcon = tabs.find(tab => tab.value === activeTab)?.icon;
                      return CurrentIcon ? <CurrentIcon className="w-4 h-4" /> : null;
                    })()}
                    <span>{tabs.find(tab => tab.value === activeTab)?.label}</span>
                  </div>
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[200px]">
                {tabs.map((tab) => (
                  <DropdownMenuItem 
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className="flex items-center gap-2 p-3"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Navigation */}
          <TabsList className="hidden md:grid w-full grid-cols-4 lg:grid-cols-8 mb-12 h-auto p-2 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl gap-1">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="flex items-center gap-1 lg:gap-2 py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <tab.icon className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden lg:inline">{tab.label}</span>
                <span className="lg:hidden text-xs">{tab.label.slice(0, 4)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="about" className="mt-0">
            {aboutSection}
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            {projectsSection}
          </TabsContent>

          <TabsContent value="gallery" className="mt-0">
            {gridPostsSection}
          </TabsContent>

          <TabsContent value="certificates" className="mt-0">
            {certificateGridSection}
          </TabsContent>

          <TabsContent value="achievements" className="mt-0">
            {achievementsSection}
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            {communitySection}
          </TabsContent>

          <TabsContent value="memories" className="mt-0">
            {memoryImagesSection}
          </TabsContent>

          <TabsContent value="certs-detail" className="mt-0">
            {certificatesSection}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationTabs;

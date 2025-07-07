
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Award, FileText, Camera, Briefcase } from 'lucide-react';

interface NavigationTabsProps {
  projectsSection: React.ReactNode;
  gridPostsSection: React.ReactNode;
  certificateGridSection: React.ReactNode;
  achievementsSection: React.ReactNode;
  certificatesSection: React.ReactNode;
  communitySection: React.ReactNode;
  memoryImagesSection: React.ReactNode;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  projectsSection,
  gridPostsSection,
  certificateGridSection,
  achievementsSection,
  certificatesSection,
  communitySection,
  memoryImagesSection
}) => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my professional journey through different aspects of my work and experiences
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-12 h-auto p-2 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl">
            <TabsTrigger value="projects" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <Award className="w-4 h-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <FileText className="w-4 h-4" />
              Certificates
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <Award className="w-4 h-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <Users className="w-4 h-4" />
              Community
            </TabsTrigger>
            <TabsTrigger value="memories" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <Camera className="w-4 h-4" />
              Memories
            </TabsTrigger>
            <TabsTrigger value="certs-detail" className="flex items-center gap-2 py-3 px-4 text-sm font-medium">
              <FileText className="w-4 h-4" />
              Certifications
            </TabsTrigger>
          </TabsList>

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

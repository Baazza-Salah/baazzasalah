import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, User, MapPin, Link as LinkIcon, Star, ExternalLink } from 'lucide-react';

// Shared types with ExperienceSection
interface Achievement {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  location?: string;
  organizer?: string;
  skills: string[];
  certification?: string;
  imageUrl: string;
  type: 'language' | 'design' | 'activity';
  link?: string;
  gallery?: string[];
}

const AchievementDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [achievement, setAchievement] = useState<Achievement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll import the data from a shared location
    import('@/data/achievements').then(module => {
      const found = module.achievements.find((a: Achievement) => a.id === id);
      setAchievement(found || null);
      setLoading(false);
    }).catch(error => {
      console.error("Error loading achievement data:", error);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-navy flex items-center justify-center">
        <div className="text-cyber-green text-xl">Loading...</div>
      </div>
    );
  }

  if (!achievement) {
    return (
      <div className="min-h-screen bg-cyber-navy flex flex-col items-center justify-center p-4">
        <div className="text-cyber-red text-xl mb-4">Achievement not found</div>
        <Link to="/" className="text-cyber-green hover:text-cyber-bright-green transition-colors">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-navy">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <Link to="/#experience" className="inline-flex items-center text-cyber-green hover:text-cyber-bright-green mb-8 transition-all hover:translate-x-1">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Achievements
        </Link>

        <div className="bg-cyber-dark border border-cyber-green/30 rounded-lg overflow-hidden">
          {/* Hero Image */}
          <div className="h-64 md:h-80 relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-green/10"></div>
            <img 
              src={achievement.imageUrl} 
              alt={achievement.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-cyber-navy/80 px-3 py-2 rounded-md">
              <div className="text-cyber-green font-bold">
                {achievement.type === 'activity' ? 'Activity' : 
                 achievement.type === 'language' ? 'Programming' : 'Design'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-cyber-green mb-4">{achievement.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-cyber-green mt-0.5 mr-3" />
                  <div>
                    <div className="text-gray-400 text-sm">Date</div>
                    <div className="text-white">{achievement.date}</div>
                  </div>
                </div>
                
                {achievement.organizer && (
                  <div className="flex items-start">
                    <User className="h-5 w-5 text-cyber-green mt-0.5 mr-3" />
                    <div>
                      <div className="text-gray-400 text-sm">Organizer</div>
                      <div className="text-white">{achievement.organizer}</div>
                    </div>
                  </div>
                )}
                
                {achievement.location && (
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyber-green mt-0.5 mr-3" />
                    <div>
                      <div className="text-gray-400 text-sm">Location</div>
                      <div className="text-white">{achievement.location}</div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                {achievement.certification && (
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-cyber-green mt-0.5 mr-3" />
                    <div>
                      <div className="text-gray-400 text-sm">Certification</div>
                      <div className="text-white">{achievement.certification}</div>
                    </div>
                  </div>
                )}
                
                {achievement.link && (
                  <div className="flex items-start">
                    <LinkIcon className="h-5 w-5 text-cyber-green mt-0.5 mr-3" />
                    <div>
                      <div className="text-gray-400 text-sm">External Link</div>
                      <a 
                        href={achievement.link} 
                        className="text-cyber-blue hover:text-cyber-bright-green flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cyber-green mb-4">Description</h2>
              <div className="text-gray-300 space-y-4">
                <p>{achievement.description}</p>
                {achievement.longDescription && (
                  <p>{achievement.longDescription}</p>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-cyber-green mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-cyber-navy px-3 py-1.5 rounded text-sm text-cyber-green border border-cyber-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {achievement.gallery && achievement.gallery.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-cyber-green mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievement.gallery.map((image, i) => (
                    <div key={i} className="border border-cyber-green/20 rounded-md overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Gallery image ${i+1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetail;

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Settings, Calendar, Megaphone } from 'lucide-react';

const Team = () => {
  const [activeTeam, setActiveTeam] = useState('admin');

  const teams = {
    admin: {
      name: "Admin Team",
      icon: <Users className="w-8 h-8" />,
      color: "martial-gradient",
      description: "Leadership and strategic management of Dragon Fist operations",
      roles: [
        {
          title: "President",
          name: "Vatanesh Sharma",
          image: "src/assets/team/President Vatanesh Sharma.jpg",
          responsibilities: ["Overall club leadership", "Strategic planning", "University liaison", "Major decision making"]
        },
        {
          title: "Vice President", 
          name: "Ramya",
          image: "/team/vice-president.jpg",
          responsibilities: ["Support president", "Event oversight", "Member coordination", "Policy implementation"]
        },
        {
          title: "Secretary",
          name: "Srilekha", 
          image: "/team/secretary.jpg",
          responsibilities: ["Meeting minutes", "Documentation", "Communication", "Record keeping"]
        },
        {
          title: "Assistant Secretary",
          name: "Abhishek Bharadwaj", 
          image: "/team/secretary.jpg",
          responsibilities: ["Meeting minutes", "Documentation", "Communication", "Record keeping"]
        },
        {
          title: "Club Manager",
          name: "Sai Ganesh", 
          image: "/team/secretary.jpg",
          responsibilities: ["Meeting minutes", "Communication", "Record keeping"]
        },
        {
          title: "Communication incharge",
          name: "Anchal",
          image: "/team/treasurer.jpg",
          responsibilities: ["Financial management", "Budget planning", "Expense tracking", "Fundraising"]
        }
      ]
    },
    technical: {
      name: "Technical Team",
      icon: <Settings className="w-8 h-8" />,
      color: "gold-gradient",
      description: "Training expertise and martial arts instruction",
      roles: [
        {
          title: "Lead ( Training & Skill Development)",
          name: "Divye Prakash",
          image: "/team/head-instructor.jpg",
          responsibilities: ["Training curriculum", "Belt assessments", "Technique instruction", "Safety protocols","Technical troubleshooting"]
        },
        {
          title: "Co-Lead(Training & Skill Development)",
          name: "Rushika Ramadugu", 
          image: "/team/assistant-instructor.jpg",
          responsibilities: ["Training support", "Beginner classes", "Equipment management", "Skill development","Tech support","Digital platforms"]
        },
        {
          title: "Lead(Event Tech & Digital Ops)",
          name: "Thamminana Vipul",
          image: "assets/team/Documentation(Lead)THAMMINANA VIPUL 23BCE9595.jpg",
          responsibilities: ["Safety measures", "First aid", "Equipment inspection", "Risk assessment"," Documentation"]
        },
        {
          title: "Co-lead (Event Tech & Digital Ops)",
          name: "Dikshith",
          image: "assets/team/Documentation(Co-lead)DIKSHITH PATHEPUR 23BCE8340.JPG",
          responsibilities: ["Event tech setup","Live streaming","Digital operations"]
        },
      ]
    },

    creative: {
      name: "Creative Team",
      icon: <Settings className="w-8 h-8" />,
      color: "gold-gradient",
      description: "Design, Branding, Photography, Videography, Media Editing, Event Support, Innovation & Aesthetics",
      roles: [
        {
          title: "Lead (Photography & Videography)",
          name: "Jasiyah Sheik",
          image: "/team/head-instructor.jpg",
          responsibilities: ["Event coverage","Media storage","Video editing","Reels","Creative highlights"]
        },
        {
          title: "Lead (Media & Documentation)",
          name: "Varshitha", 
          image: "/team/assistant-instructor.jpg",
          responsibilities: ["Ensures photos","Videos","Fresh ideas","Digital art","Aesthetics"]
        },
        {
          title: "Co-lead(Social Media & Promotions)",
          name: "Sampreeti",
          image: "assets/team/Documentation(Lead)THAMMINANA VIPUL 23BCE9595.jpg",
          responsibilities: ["Manages Instagram", "Posters","Reels","Promotions","Content creation"]
        },
        {
          title: "Co-lead(Design & Branding)",
          name: "Isha",
          image: "assets/team/Documentation(Co-lead)DIKSHITH PATHEPUR 23BCE8340.JPG",
          responsibilities: ["Graphics", "Club logo","Visual identity"]
        },
      ]
    },

    events: {
      name: "Events Team",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-accent text-accent-foreground",
      description: "Competition and event organization specialists",
      roles: [
        {
          title: "Events Manager (Lead)",
          name: "Mritunjay Sharma",
          image: "/team/events-manager.jpg",
          responsibilities: ["Event planning", "Competition organization", "Venue coordination", "Schedule management"]
        },
        {
          title: "Events Manager (Lead)",
          name: "Krishna Teja",
          image: "/team/events-manager.jpg",
          responsibilities: ["Event planning", "Competition organization", "Venue coordination", "Schedule management"]
        },
        {
          title: "Events Manager (Co-Lead)",
          name: "Jampana Manogna",
          image: "assets/team/MANOGHNA-24BAP7003 - JAMPANA MANOGHNA 24BAP7003.jpg",
          responsibilities: ["Tournament setup", "Match scheduling", "Referee coordination", "Awards ceremony"]
        },
        {
          title: "Events Manager (Co-Lead)",
          name: "Veerendra",
          image: "/team/workshop-organizer.jpg",
          responsibilities: ["Training workshops", "Guest instructors", "Skill sessions", "Educational programs"]
        }
      ]
    },
    outreach: {
      name: "Market Outreach",
      icon: <Megaphone className="w-8 h-8" />,
      color: "bg-primary text-primary-foreground",
      description: "Marketing, promotion and community engagement",
      roles: [
        {
          title: "PR Manager",
          name: "Santhosh Kumar KJ",
          image: "assets/team/Lead Outreach and Marketing SANTOSH KUMAR KJ .jpg",
          responsibilities: ["Social media", "Public relations", "Brand management", "Community engagement"]
        },
        {
          title: "Marketing Lead",
          name: "Neeha",
          image: "assets/team/Outreach and Marketing (Colead) Department  BAR NEEHA ANJUM 23BEC7366.jpg",
          responsibilities: ["Promotional campaigns", "Recruitment drives", "Sponsorship", "Partnership development"]
        },
        {
          title: "Content Creator",
          name: "Queeny",
          image: "assets/team/IMG_20230803_191026 - Queeny Vempa.jpg",
          responsibilities: ["Photography/videography", "Content creation", "Website management", "Digital presence"]
        }
      ]
    }
  };

  const teamButtons = [
    { key: 'admin', label: 'Admin', icon: <Users className="w-5 h-5" /> },
    { key: 'technical', label: 'Technical', icon: <Settings className="w-5 h-5" /> },
    { key: 'events', label: 'Events', icon: <Calendar className="w-5 h-5" /> },
    { key: 'outreach', label: 'Outreach', icon: <Megaphone className="w-5 h-5" /> }
  ];

  const currentTeam = teams[activeTeam as keyof typeof teams];

  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-martial font-bold mb-6">
            <span className="text-dragon">OUR TEAM</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Meet the dedicated warriors behind Dragon Fist - organized into specialized teams that drive our club's mission forward.
          </p>
        </div>
      </section>

      {/* Team Navigation */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {teamButtons.map((team) => (
              <Button
                key={team.key}
                onClick={() => setActiveTeam(team.key)}
                variant={activeTeam === team.key ? "default" : "outline"}
                className={`font-martial font-semibold transition-power px-6 py-3 ${
                  activeTeam === team.key 
                    ? 'martial-gradient text-white dragon-shadow' 
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {team.icon}
                <span className="ml-2">{team.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Team Display */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Card className="bg-card border-border overflow-hidden martial-hover">
            <CardContent className="p-0">
              {/* Team Header */}
              <div className="p-8 border-b border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${currentTeam.color}`}>
                    {currentTeam.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-martial font-bold text-dragon">
                      {currentTeam.name}
                    </h2>
                    <p className="text-muted-foreground font-inter mt-2">
                      {currentTeam.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Badge className={currentTeam.color}>
                      {currentTeam.roles.length} Positions
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Roles Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {currentTeam.roles.map((role, index) => (
                    <div 
                      key={index}
                      className="group bg-muted/30 p-6 rounded-lg martial-hover border border-border/50"
                    >
                      {/* Member Image */}
            <div className="mb-4 relative overflow-hidden rounded-md aspect-square">
                        <img
                          src={role.image || "/placeholder.svg"}
                          alt={`${role.title} - ${role.name}`}
                          loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-martial font-semibold text-foreground mb-2">
                            {role.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {role.name}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-martial font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {role.responsibilities.map((responsibility, idx) => (
                            <li 
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-dragon text-white border-none dragon-shadow">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-martial font-bold mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto font-inter">
                We're always looking for passionate martial artists to join our leadership team. 
                Contact us to learn about available positions and how you can contribute.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Team;
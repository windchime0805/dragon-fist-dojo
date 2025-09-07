import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Settings, Calendar, Megaphone } from 'lucide-react';

const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Admin Team",
      icon: <Users className="w-8 h-8" />,
      color: "martial-gradient",
      roles: [
        {
          title: "Club President",
          name: "To be assigned",
          responsibilities: ["Overall club leadership", "Strategic planning", "University liaison", "Major decision making"]
        },
        {
          title: "Vice President", 
          name: "To be assigned",
          responsibilities: ["Support president", "Event oversight", "Member coordination", "Policy implementation"]
        },
        {
          title: "Secretary",
          name: "To be assigned", 
          responsibilities: ["Meeting minutes", "Documentation", "Communication", "Record keeping"]
        },
        {
          title: "Treasurer",
          name: "To be assigned",
          responsibilities: ["Financial management", "Budget planning", "Expense tracking", "Fundraising"]
        }
      ]
    },
    {
      id: 2,
      name: "Technical Team",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-secondary text-secondary-foreground",
      roles: [
        {
          title: "Head Instructor",
          name: "To be assigned",
          responsibilities: ["Training curriculum", "Belt assessments", "Technique instruction", "Safety protocols"]
        },
        {
          title: "Assistant Instructor",
          name: "To be assigned", 
          responsibilities: ["Training support", "Beginner classes", "Equipment management", "Skill development"]
        },
        {
          title: "Safety Coordinator",
          name: "To be assigned",
          responsibilities: ["Safety measures", "First aid", "Equipment inspection", "Risk assessment"]
        }
      ]
    },
    {
      id: 3,
      name: "Events Team",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-accent text-accent-foreground",
      roles: [
        {
          title: "Events Manager",
          name: "To be assigned",
          responsibilities: ["Event planning", "Competition organization", "Venue coordination", "Schedule management"]
        },
        {
          title: "Competition Coordinator",
          name: "To be assigned",
          responsibilities: ["Tournament setup", "Match scheduling", "Referee coordination", "Awards ceremony"]
        },
        {
          title: "Workshop Organizer",
          name: "To be assigned",
          responsibilities: ["Training workshops", "Guest instructors", "Skill sessions", "Educational programs"]
        }
      ]
    },
    {
      id: 4,
      name: "Market Outreach",
      icon: <Megaphone className="w-8 h-8" />,
      color: "bg-primary text-primary-foreground",
      roles: [
        {
          title: "PR Manager",
          name: "To be assigned",
          responsibilities: ["Social media", "Public relations", "Brand management", "Community engagement"]
        },
        {
          title: "Marketing Lead",
          name: "To be assigned",
          responsibilities: ["Promotional campaigns", "Recruitment drives", "Sponsorship", "Partnership development"]
        },
        {
          title: "Content Creator",
          name: "To be assigned",
          responsibilities: ["Photography/videography", "Content creation", "Website management", "Digital presence"]
        }
      ]
    }
  ];

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

      {/* Teams Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {teams.map((team) => (
              <Card key={team.id} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  {/* Team Header */}
                  <div className="p-8 border-b border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${team.color}`}>
                        {team.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-martial font-bold text-dragon">
                          {team.name}
                        </h2>
                        <Badge className={team.color}>
                          {team.roles.length} Positions
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Roles Grid */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {team.roles.map((role, index) => (
                        <div 
                          key={index}
                          className="bg-muted/30 p-6 rounded-lg martial-hover"
                        >
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
                            <h4 className="text-sm font-martial font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-1">
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
            ))}
          </div>
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
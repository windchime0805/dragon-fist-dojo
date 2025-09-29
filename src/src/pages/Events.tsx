import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Users, Trophy } from 'lucide-react';

const Events = () => {
  // Sample events data - user can edit this later
  const events = [
    {
      id: 1,
      title: "Dragon Strike Championship",
      date: "March 15, 2024",
      location: "VIT-AP Sports Complex",
      type: "Competition",
      participants: 120,
      description: "Annual inter-university martial arts championship featuring karate, taekwondo, and kung fu categories.",
      status: "completed"
    },
    {
      id: 2,
      title: "Martial Arts Workshop",
      date: "February 20, 2024",
      location: "Gymnasium Hall A",
      type: "Workshop",
      participants: 85,
      description: "Intensive training workshop covering basic techniques and self-defense for beginners.",
      status: "completed"
    },
    {
      id: 3,
      title: "Belt Grading Ceremony",
      date: "January 10, 2024", 
      location: "Main Auditorium",
      type: "Ceremony",
      participants: 45,
      description: "Quarterly belt promotion ceremony recognizing students' progress and achievements.",
      status: "completed"
    },
    {
      id: 4,
      title: "Sparring Tournament",
      date: "December 8, 2023",
      location: "Outdoor Arena",
      type: "Tournament",
      participants: 95,
      description: "Competitive sparring matches across different weight categories and skill levels.",
      status: "completed"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'competition':
        return 'martial-gradient';
      case 'workshop':
        return 'bg-secondary text-secondary-foreground';
      case 'ceremony':
        return 'bg-accent text-accent-foreground';
      case 'tournament':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-martial font-bold mb-6">
            <span className="text-dragon">EVENTS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Discover our martial arts events, competitions, and training sessions that build character, discipline, and warrior spirit.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:gap-12">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className={`bg-card border-border martial-hover ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:flex overflow-hidden`}
              >
                <CardContent className="p-0 flex-1">
                  <div className="p-8 h-full flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-martial font-bold mb-4 text-dragon">
                      {event.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 font-inter leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-secondary" />
                        {event.participants} Participants
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Trophy className="w-4 h-4 mr-2 text-accent" />
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <div className="flex-1 min-h-[300px] bg-gradient-dragon opacity-20 flex items-center justify-center">
                  <div className="text-6xl text-white/30">
                    {event.type === 'Competition' && '🏆'}
                    {event.type === 'Workshop' && '🥋'}
                    {event.type === 'Ceremony' && '🏅'}
                    {event.type === 'Tournament' && '⚔️'}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
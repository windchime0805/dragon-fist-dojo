import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Trophy, Users, Zap, Calendar, Target } from 'lucide-react';
import dragonLogo from '@/assets/dragon-fist-logo.png';

const Index = () => {
  // Sample past events for preview
  const recentEvents = [
    {
      title: "Dragon Strike Championship",
      date: "March 2024",
      type: "Competition",
      participants: 120
    },
    {
      title: "Martial Arts Workshop", 
      date: "February 2024",
      type: "Training",
      participants: 85
    },
    {
      title: "Belt Grading Ceremony",
      date: "January 2024", 
      type: "Ceremony",
      participants: 45
    }
  ];

  const clubStats = [
    { icon: <Users className="w-8 h-8" />, label: "Active Members", value: "150+" },
    { icon: <Trophy className="w-8 h-8" />, label: "Championships Won", value: "12" },
    { icon: <Target className="w-8 h-8" />, label: "Training Hours", value: "500+" },
    { icon: <Shield className="w-8 h-8" />, label: "Years Active", value: "5" }
  ];

  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-dragon opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 dragon-glow">
            <img 
              src={dragonLogo} 
              alt="Dragon Fist Martial Arts" 
              className="h-24 w-24 mx-auto mb-6 object-contain"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-martial font-black mb-6">
            <span className="text-dragon">DRAGON</span>
            <br />
            <span className="text-foreground">FIST</span>
          </h1>
          
          <div className="mb-8">
            <Badge className="martial-gradient text-white text-lg py-2 px-6 font-martial">
              VIT-AP University Martial Arts Club
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 font-inter leading-relaxed">
            Forge your warrior spirit through ancient martial arts disciplines. 
            Build strength, discipline, and character in our elite combat sports community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="martial-gradient text-white font-martial font-semibold dragon-shadow martial-hover">
                Join Our Dojo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-martial font-semibold">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clubStats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center martial-hover">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-martial font-bold text-dragon mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-martial font-bold mb-8">
                <span className="text-dragon">ABOUT</span>
                <br />
                <span className="text-foreground">DRAGON FIST</span>
              </h2>
              
              <div className="space-y-6 font-inter text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  Dragon Fist Martial Arts is VIT-AP University's premier combat sports club, 
                  dedicated to teaching traditional and modern martial arts disciplines while 
                  fostering personal growth, discipline, and warrior spirit.
                </p>
                
                <p className="text-muted-foreground">
                  Our club offers comprehensive training in multiple martial arts forms, 
                  from traditional karate and kung fu to modern mixed martial arts techniques. 
                  We believe in developing not just physical strength, but mental resilience 
                  and moral character.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-medium">Expert Training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-medium">Self Defense</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="font-medium">Competitions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">Community</span>
                  </div>
                </div>
              </div>
              
              <Link to="/team" className="inline-block mt-8">
                <Button className="martial-gradient text-white font-martial font-semibold dragon-shadow">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-dragon rounded-2xl p-12 text-white text-center dragon-shadow">
                <h3 className="text-3xl font-martial font-bold mb-6">
                  Train with the Best
                </h3>
                <div className="space-y-4 font-inter">
                  <div className="flex items-center justify-between">
                    <span>Karate</span>
                    <Badge className="bg-white/20 text-white">Expert Level</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Kung Fu</span>
                    <Badge className="bg-white/20 text-white">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Taekwondo</span>
                    <Badge className="bg-white/20 text-white">Professional</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>MMA</span>
                    <Badge className="bg-white/20 text-white">Competition</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Preview */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-martial font-bold mb-6">
              <span className="text-dragon">RECENT</span>{" "}
              <span className="text-foreground">EVENTS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              From intense competitions to skill-building workshops, Dragon Fist hosts events 
              that challenge and inspire our martial arts community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentEvents.map((event, index) => (
              <Card key={index} className="bg-card border-border martial-hover">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="martial-gradient text-white">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-martial font-bold mb-4 text-dragon">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.participants} Participants
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-martial font-semibold">
                View All Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-dragon text-white border-none dragon-shadow overflow-hidden">
            <CardContent className="p-16 text-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-martial font-bold mb-6">
                  Begin Your Martial Arts Journey
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 font-inter">
                  Whether you're a beginner or experienced fighter, Dragon Fist welcomes all 
                  who seek to develop their martial arts skills and inner strength.
                </p>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-martial font-semibold dragon-shadow"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
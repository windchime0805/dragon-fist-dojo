import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, User, Clock, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-martial font-bold mb-6">
            <span className="text-dragon">CONTACT US</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Ready to begin your martial arts journey? Get in touch with Dragon Fist and join our warrior community.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email Card */}
              <Card className="bg-card border-border martial-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 martial-gradient rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-martial font-semibold mb-2 text-dragon">
                        Email Address
                      </h3>
                      <p className="text-muted-foreground mb-3 font-inter">
                        Reach out to us for inquiries, membership, or general information
                      </p>
                      <a 
                        href="mailto:dragonfist@vitap.ac.in" 
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        dragonfist@vitap.ac.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Faculty Coordinator Card */}
              <Card className="bg-card border-border martial-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <User className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-martial font-semibold mb-2 text-dragon">
                        Faculty Coordinator
                      </h3>
                      <p className="text-muted-foreground mb-3 font-inter">
                        Academic supervision and guidance for club activities
                      </p>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">
                          Dr. [Faculty Name]
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Department of [Department Name]
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            +91 [Faculty Contact]
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-card border-border martial-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-martial font-semibold mb-2 text-dragon">
                        Location
                      </h3>
                      <p className="text-muted-foreground mb-3 font-inter">
                        Find us on the VIT-AP University campus
                      </p>
                      <div className="space-y-1 text-sm">
                        <p className="font-medium text-foreground">
                          VIT-AP University
                        </p>
                        <p className="text-muted-foreground">
                          G Konduru Village, Amaravati
                        </p>
                        <p className="text-muted-foreground">
                          Andhra Pradesh - 522237, India
                        </p>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open('https://maps.google.com/?q=VIT-AP+University', '_blank')}
                      >
                        View on Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Training Schedule Card */}
              <Card className="bg-card border-border martial-hover">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-martial font-semibold mb-2 text-dragon">
                        Training Schedule
                      </h3>
                      <p className="text-muted-foreground mb-4 font-inter">
                        Regular training sessions and practice times
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday</span>
                          <span className="text-muted-foreground">6:00 PM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday</span>
                          <span className="text-muted-foreground">4:00 PM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday</span>
                          <span className="text-muted-foreground">Special Events</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Join Us CTA */}
            <div className="flex flex-col justify-center">
              <Card className="bg-gradient-dragon text-white border-none dragon-shadow">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-martial font-bold mb-6">
                    Ready to Start Your Journey?
                  </h2>
                  <div className="space-y-4 font-inter">
                    <p className="text-lg opacity-90">
                      Join Dragon Fist Martial Arts and become part of VIT-AP's most dynamic combat sports community.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Expert instruction in multiple martial arts disciplines</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Regular competitions and tournaments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Leadership and character development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Supportive community of martial artists</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-primary hover:bg-white/90 font-martial font-semibold"
                      onClick={() => window.location.href = 'mailto:dragonfist@vitap.ac.in?subject=Membership Inquiry'}
                    >
                      Send Email
                    </Button>
                    <p className="text-sm opacity-75 text-center">
                      No experience necessary • All skill levels welcome
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
import Header from "@/components/header";
import Hero from "@/components/hero";
import Staff from "@/components/staff";
import Services from "@/components/services";
import Menu from "@/components/menu";
import Drinks from "@/components/drinks";
import Information from "@/components/information";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Decorative Background Section */}
      <div className="relative py-8 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400')`
          }}
        ></div>
        <div className="relative z-10 text-center">
          <div className="container mx-auto px-4">
            <div className="w-32 h-1 bg-gradient-to-r from-star-golden to-orange-400 mx-auto"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <Staff />
        <Services />
      </div>
      
      {/* Another Decorative Section */}
      <div className="relative py-6 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=300')`
          }}
        ></div>
      </div>
      
      <div className="bg-white">
        <Menu />
        <Drinks />
      </div>
      
      {/* Final Decorative Section */}
      <div className="relative py-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="text-center">
          <div className="w-24 h-1 bg-star-golden mx-auto"></div>
        </div>
      </div>
      
      <div className="bg-gray-50">
        <Information />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

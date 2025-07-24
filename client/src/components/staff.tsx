export default function Staff() {
  return (
    <section id="staff" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-star-deep-blue mb-4">Staff Introduction</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-star-blue text-white px-6 py-3 rounded-full inline-block">
              <span className="font-bold">日本のみなさん はじめまして。</span>
            </div>
            <p className="text-gray-600 italic text-lg">It all began one snowy day in Jessica's kitchen....</p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                ナマステ（こんにちは）。私は、店長のギミレ・タラと申します。私は、日本に来る前に、インドとネパールで15年ほど料理の勉強をしてきました。今から12年前、小さいころから、憧れていた日本に来てからは、名古屋、横浜、東京で日本語を勉強しながら、働いてきました。埼玉県川口市のこの地にご縁をいただき、インドネパール料理のお店を出すことになりました。本格的なインド、ネパールの料理をこの地域の皆さんに十分に楽しんでいただけるようこれからも、日々精進していきます。どうぞ、よろしくお願いします。
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
                alt="Restaurant owner Ghimire Tara-san in traditional attire" 
                className="w-80 h-80 object-cover rounded-full shadow-2xl" 
              />
              <div className="absolute -top-4 -right-4 bg-star-blue text-white px-4 py-2 rounded-full">
                <div className="text-center">
                  <i className="fas fa-star text-star-golden"></i>
                  <div className="text-sm font-bold">INDIAN NEPALI</div>
                  <div className="text-xs">Restaurant & Bar</div>
                  <div className="text-lg font-bold">スター</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Video Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-playfair font-bold text-center mb-8 text-star-deep-blue">Our Kitchen Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Kitchen staff preparing traditional dishes" 
                className="w-full h-64 object-cover rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Traditional Indian chefs in kitchen" 
                className="w-full h-64 object-cover rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fas fa-play text-white text-4xl"></i>
              </div>
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
                <p className="text-sm">私たちも、日本の皆様に愛していただけるよう心を込めて料理しています。どうぞよろしくお願いします。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

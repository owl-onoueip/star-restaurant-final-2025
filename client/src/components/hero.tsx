export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Hero with Background Image */}
      <div className="relative min-h-[60vh] bg-gray-50">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-star-blue px-6 py-3 rounded-full mb-8 shadow-lg">
              <i className="fas fa-star text-star-golden mr-2"></i>
              <span className="font-bold text-lg text-white">INDIAN NEPALI</span>
              <i className="fas fa-star text-star-golden ml-2"></i>
            </div>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-star-deep-blue">Restaurant & Bar</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-gray-800 font-medium">東川口の本格インドカレー・ネパール料理のSTARです。</p>
              <p className="text-lg md:text-xl text-gray-700 mb-8">本場のスパイス料理をお楽しみください。</p>
              <p className="text-lg md:text-xl text-gray-600 italic">It is a star (STAR) of authentic Indian curry and Nepalese cuisine in Higashikawaguchi.</p>
              <p className="text-lg md:text-xl text-gray-600 italic">Please enjoy authentic spice dishes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Collage */}
      <div className="bg-gradient-to-b from-blue-600 to-star-blue py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {/* Row 1 */}
            <div className="col-span-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Traditional Indian curry dishes" 
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Tandoori chicken" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Fresh naan bread" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Basmati rice" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Indian spices and herbs" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Row 2 */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Butter chicken curry" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Golden samosas" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="col-span-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Traditional Indian thali" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Dal lentil curry" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Row 3 */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Chicken biryani" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="col-span-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Indian restaurant interior" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Mango lassi drink" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Crispy papadum" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Row 4 */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Palak paneer curry" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Garlic naan bread" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            <div className="col-span-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Curry and rice combination" 
                className="w-full h-32 md:h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
          
          <div className="text-center text-white mt-8">
            <p className="text-xl font-medium">Shops offering delicious Indian curry</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-star-deep-blue mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">本格的なインド・ネパール料理を心を込めてご提供いたします</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-star-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-star-golden transition-colors">
              <i className="fas fa-utensils text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-star-deep-blue mb-4">Dine-In Experience</h3>
            <p className="text-gray-600">本格的な雰囲気の中で、ゆっくりとお食事をお楽しみいただけます。</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-star-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-star-golden transition-colors">
              <i className="fas fa-glass-cheers text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-star-deep-blue mb-4">Bar & Beverages</h3>
            <p className="text-gray-600">インド・ネパール料理に合うお酒や飲み物を豊富に取り揃えております。</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-star-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-star-golden transition-colors">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-star-deep-blue mb-4">Party & Events</h3>
            <p className="text-gray-600">パーティーや特別なイベントにも対応いたします。お気軽にご相談ください。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

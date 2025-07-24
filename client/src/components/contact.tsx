export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-star-blue to-star-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">Contact</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto mb-6"></div>
          <p className="text-xl">お気軽にお問い合わせください</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-star-deep-blue text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">住所</h3>
                <p className="text-blue-100">
                  〒333-0801<br />
                  埼玉県川口市東川口<br />
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-phone text-star-deep-blue text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">電話番号</h3>
                <p className="text-blue-100 text-2xl font-bold">048-XXX-XXXX</p>
                <p className="text-blue-200 text-sm">お電話でのご予約承ります</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-train text-star-deep-blue text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">アクセス</h3>
                <p className="text-blue-100">
                  JR武蔵野線 東川口駅より徒歩5分<br />
                  駐車場完備
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg p-2">
              <div className="w-full h-80 bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <i className="fas fa-map text-4xl mb-4"></i>
                  <p className="text-lg font-medium">Google Map</p>
                  <p className="text-sm">東川口駅周辺地図</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12 pt-8 border-t border-blue-400">
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <i className="fab fa-facebook text-star-deep-blue text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <i className="fab fa-instagram text-star-deep-blue text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-star-golden rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <i className="fab fa-twitter text-star-deep-blue text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

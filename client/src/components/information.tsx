export default function Information() {
  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-star-deep-blue mb-4">Information</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-star-deep-blue mb-4 flex items-center">
                <i className="fas fa-clock text-star-golden mr-3"></i>
                営業時間
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">平日・土日祝</span>
                    <span>11:30 - 15:00 / 17:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">定休日</span>
                    <span className="text-star-red">火曜日</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-star-deep-blue mb-4 flex items-center">
                <i className="fas fa-utensils text-star-golden mr-3"></i>
                料理の特徴
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>本場のスパイスを使用</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>辛さ調整可能</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>ベジタリアン対応</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>ハラル対応</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-star-deep-blue mb-4 flex items-center">
                <i className="fas fa-credit-card text-star-golden mr-3"></i>
                お支払い方法
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <i className="fas fa-money-bill text-green-500 mr-2"></i>現金
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-credit-card text-blue-500 mr-2"></i>クレジットカード
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-mobile-alt text-purple-500 mr-2"></i>電子マネー
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-qrcode text-red-500 mr-2"></i>QR決済
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-star-deep-blue mb-4 flex items-center">
                <i className="fas fa-star text-star-golden mr-3"></i>
                おすすめ
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">スペシャルバターチキン</span>
                    <span className="bg-star-golden text-black px-2 py-1 rounded text-xs font-bold">人気No.1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">タンドリーミックス</span>
                    <span className="bg-star-blue text-white px-2 py-1 rounded text-xs font-bold">おすすめ</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">モモ（ネパール餃子）</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">NEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

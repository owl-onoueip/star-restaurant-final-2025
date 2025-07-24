export default function Drinks() {
  const drinkItems = [
    {
      id: 'mango-lassi',
      name: 'マンゴーラッシー',
      description: '濃厚なマンゴーの甘さが楽しめる',
      price: 450,
      icon: 'fas fa-glass-whiskey',
      color: 'bg-orange-500'
    },
    {
      id: 'chai',
      name: 'チャイ',
      description: 'スパイスの効いた本格インド茶',
      price: 380,
      icon: 'fas fa-leaf',
      color: 'bg-green-500'
    },
    {
      id: 'beer',
      name: '生ビール',
      description: 'スパイシー料理との相性抜群',
      price: 580,
      icon: 'fas fa-beer',
      color: 'bg-yellow-500'
    },
    {
      id: 'wine',
      name: 'グラスワイン',
      description: 'カレーに合う厳選ワイン',
      price: 650,
      icon: 'fas fa-wine-glass',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="drinks" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-star-deep-blue mb-4">Drink Menu</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">インド・ネパール料理に合うお飲み物</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drinkItems.map(drink => (
            <div key={drink.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${drink.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${drink.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-bold text-lg text-star-deep-blue mb-2">{drink.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{drink.description}</p>
              <div className="text-star-golden font-bold text-xl">¥{drink.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

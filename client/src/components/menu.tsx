import { useState } from 'react';
import { menuItems, menuCategories, type MenuItem } from '@/data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('salads');

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-star-deep-blue mb-4">Food Menu</h2>
          <div className="w-24 h-1 bg-star-golden mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">A la Carte | Curry | Rice | Nan | Set | Party</p>
          <p className="text-lg text-gray-500 mt-2">メニューはすべて税込価格です。</p>
        </div>

        {/* Menu Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 rounded-full transition-colors text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-star-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-star-golden hover:text-black'
              }`}
            >
              {category.displayName}
            </button>
          ))}
        </div>

        {/* Menu Items Display */}
        <div className="mb-8">
          <h3 className="text-3xl font-playfair font-bold text-center text-star-deep-blue mb-8">
            {menuCategories.find(cat => cat.id === activeCategory)?.displayName}
          </h3>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item: MenuItem) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg text-star-deep-blue mb-2">{item.name}</h4>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    )}
                    <div className="text-star-golden font-bold text-xl">¥{item.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">このカテゴリーにはまだメニューがありません。</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-star-deep-blue px-4 py-2 rounded">
              <h3 className="text-star-golden text-2xl font-playfair font-bold">STAR</h3>
              <p className="text-star-golden text-xs italic">Restaurant & Bar</p>
            </div>
          </div>
          <p className="text-gray-400 mb-2">東川口の本格インドカレー・ネパール料理</p>
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-gray-500 text-sm">
              Copyright © 2024 Star Restaurant & Bar. All Rights Reserved.<br />
              Shops offering delicious Indian curry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

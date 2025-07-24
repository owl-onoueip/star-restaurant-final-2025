import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const menuItems = [
    { id: 'home', label: 'HOME', bgColor: 'bg-green-600' },
    { id: 'staff', label: 'STAFF', bgColor: 'bg-star-golden' },
    { id: 'services', label: 'SERVICES', bgColor: 'bg-star-golden' },
    { id: 'menu', label: 'FOOD MENU', bgColor: 'bg-green-600' },
    { id: 'drinks', label: 'DRINK MENU', bgColor: 'bg-star-golden' },
    { id: 'info', label: 'INFORMATION', bgColor: 'bg-star-golden' },
    { id: 'contact', label: 'CONTACT', bgColor: 'bg-star-golden' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-5">
          <div className="text-center">
            <h1 className="text-star-golden text-4xl font-playfair font-bold tracking-wide">STAR</h1>
            <p className="text-star-golden text-base italic font-light tracking-widest">Restaurant & Bar</p>
          </div>
        </div>
        
        {/* Desktop Navigation - Shows on medium screens and larger */}
        <nav className="hidden md:block">
          <div className="flex justify-center">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="bg-star-golden hover:bg-green-600 text-black hover:text-white px-4 lg:px-6 py-3 font-bold text-sm lg:text-base transition-all duration-300 border-r border-black last:border-r-0"
                style={{ minWidth: '120px' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger Button - Shows on small screens only */}
        <div className="md:hidden flex justify-center pb-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-star-golden hover:bg-green-600 text-black hover:text-white px-6 py-3 rounded font-bold flex items-center space-x-2 transition-all duration-300"
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
            <span>MENU</span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Shows on small screens only */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-black border-t border-gray-700">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full bg-star-golden hover:bg-green-600 text-black hover:text-white px-6 py-3 font-bold text-base transition-all duration-300 border-b border-black last:border-b-0 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

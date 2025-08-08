import { useState } from 'react';
import { Header } from './components/Header';
import { RecipeTabs } from './components/RecipeTabs';
import { ContentSection } from './components/ContentSection';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'recipes' | string>('home');

  const handleRecipesClick = () => {
    setCurrentView('recipes');
  };

  const handleMenuClick = (section: string) => {
    setCurrentView(section);
  };

  const handleHomeClick = () => {
    setCurrentView('home');
  };

  const renderContent = () => {
    if (currentView === 'recipes') {
      return <RecipeTabs />;
    } else if (currentView === 'home') {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h2 className="text-3xl mb-6 text-blue-800">Bem-vindos ao nosso site de receitas!</h2>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto leading-relaxed">
              Descubra os sabores autênticos da gastronomia de Pessoa. 
              Navegue pelo nosso menu para conhecer mais sobre nossa cultura culinária 
              e experimente nossas receitas tradicionais.
            </p>
          </div>
        </div>
      );
    } else {
      return <ContentSection section={currentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header 
        onRecipesClick={handleRecipesClick} 
        onMenuClick={handleMenuClick}
        onHomeClick={handleHomeClick}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Receitas da Gastronomia do Pessoa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
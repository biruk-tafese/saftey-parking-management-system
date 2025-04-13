import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext.jsx';
import { ThemeContext } from './contexts/ThemeContext.jsx';
import { LanguageContext } from './contexts/LanguageContext.jsx';

const MainComponent = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <h1>{language === 'en' ? 'Welcome!' : 'እንኳን ወደ ድረ-ገጹ መጡ!'}</h1>
            <p>{isAuthenticated ? (language === 'en' ? 'You are logged in.' : 'እቅፍ ነህ/ነሽ ይደር ልኝ ነው.') : (language === 'en' ? 'You are not logged in.' : 'አልተገናኙም.')}</p>
            <button className='p-2 bg-purple-400 text-2xl' onClick={isAuthenticated ? logout : login}>
                {isAuthenticated ? (language === 'en' ? 'Logout' : 'ውጣ') : (language === 'en' ? 'Login' : 'ግባ')}
            </button>
            <button onClick={toggleTheme}>
                {theme === 'light' ? (language === 'en' ? 'Switch to Dark Theme' : 'ወደ ጨለማ ቅርጸ ተንቀሳቃሽ ይሂዱ') : (language === 'en' ? 'Switch to Light Theme' : 'ወደ ብርሃን ቅርጸ ተንቀሳቃሽ ይሂዱ')}
            </button>
            <button onClick={toggleLanguage}>
                {language === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ይሂዱ'}
            </button>
        </div>
    );
};

export default MainComponent;
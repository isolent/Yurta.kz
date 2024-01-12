// В NavBar.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

import './NavBar.css';

function NavBar() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Очистить подписку при размонтировании компонента
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null); // Очищаем состояние пользователя после выхода
      navigate('/'); // Перенаправляем на главную страницу
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/apartment-list">Apartments</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="#" onClick={handleLogout}>LogOut</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;


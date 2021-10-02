import Header from './Header';
import Content from './Content';

import { useTheme } from '../contexts/ThemeContext';
import Users from './Users/Users';

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi ratione
          provident ullam earum est odio modi? Ex dolore iure ipsum magnam doloremque velit veniam,
          a at, dolor nisi veritatis!
        </p>
      </Header>

      <Content />

      <Users />
    </div>
  );
}

export default Container;

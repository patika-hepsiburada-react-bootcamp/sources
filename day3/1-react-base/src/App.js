import './App.css';
import Users from './components/Users';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <Paragraph
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
        numberOfLines={4}
      />

      <Users title="Users" list={[{ name: 'Ayşe' }, { name: 'Fatma' }, { name: 'Murat' }]} />
    </div>
  );
}

export default App;

import './App.css';
import  Counter  from './components/Counter';
import ListForm from './components/ListForm';
import List from './components/list';

function App() {
  return (
    <div className='App'>
        <Counter />
       
        <List />
        <ListForm />
        
    </div>
  );
}

export default App;

import './App.css';
import Answers from './component/Answers/Answers';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <PostList/>        
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>

        <PostList></PostList>

        <PostList/>        

      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Post from './component/Post';
import {useDispatch, useSelector} from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  const addPost = (text) => {
    console.log(text);
    dispatch({type: 'ADD_POST', payload: text});

  }

  return (
    <>
   <Post addPost={addPost}/>
   <div>
      {
        posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        })
      }
   </div>
   </>
  );
}

export default App;

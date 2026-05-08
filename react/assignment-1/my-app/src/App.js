
import './App.css';
import Strikethrough from "./components/StrikeThrough"
import Imagesview from "./components/ImagesView"
import AlertMessage from './components/AlertMessage';
function App() {
  return (
     <div class="App">
      <Strikethrough text="React is not widely used"/>
      <Imagesview />
      <AlertMessage/>
     </div>
  );
}

export default App;

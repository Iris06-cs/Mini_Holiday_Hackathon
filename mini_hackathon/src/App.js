import treeImage from "./image/tree_1280.png";
import Calendar from "./components/Calendar";
import Collection from "./components/Collection";
function App() {
  return (
    <main>
      <div className="main-xmas-tree">
        <img src={treeImage} alt="xmas-tree" />
      </div>
      <Calendar />
      <Collection />
    </main>
  );
}

export default App;

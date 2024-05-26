import { AppDialog } from "./common/components/Dialog";

function App() {
  return (
    <div className="App">
      <AppDialog type="success" title="Error" description="Are you sure ?" />
    </div>
  );
}

export default App;

import { ImageEngineProvider, Image } from "@imageengine/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a href="//inageengine.io">ImageEngine</a>
        </p>
        <ImageEngineProvider deliveryAddress="https://try.imgeng.in">
        <Image src="/https://cdn.imageengine.io/images/phone-bg/bg-02.jpg"></Image>
      </ImageEngineProvider>
      </header>
    </div>
  );
}

export default App;

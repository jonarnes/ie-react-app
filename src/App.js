import { ImageEngineProvider, Image } from "@imageengine/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ImageEngine + React</p>
        <ImageEngineProvider deliveryAddress="https://try.imgeng.in">
        <Image src="/https://imageengine.io/images/phone-bg/bg-02.jpg"></Image>
      </ImageEngineProvider>
      </header>
    </div>
  );
}

export default App;

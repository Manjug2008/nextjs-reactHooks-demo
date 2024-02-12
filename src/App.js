
import './App.css';
import { UseCallBackComponent } from './Components/UseCallBackComponent/UseCallBackComponent';
import { UseContextComponent } from './Components/UseContextComponent/UseContextComponent';
import { UseEffectComponent } from './Components/UseEffectComponent/UseEffectComponent';
import { UseImperativeHandlerComponent } from './Components/UseImperativeHandleComponent/UseImperativeHandleComponent';
import { UseLayoutEffectComponent } from './Components/UseLayoutEffectComponent/UseLayoutEffectComponent';
import { UseMemoComponent } from './Components/UseMemoComponent/UseMemoComponent';
import { UseReducerComponent } from './Components/UseReducerComponent/UseReducerComponent';
import { UsRefDifferenceComponent } from './Components/UseRefComponent/UsRefDifferenceComponent';
import { UseRefComponent } from './Components/UseRefComponent/UseRefComponent';
import { UseRefForwarderComponent } from './Components/UseRefComponent/UseRefForwarder';
import { UseStateComponent } from './Components/useStateComponent/UseStateComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>hello world</h1>
          {/* <UseStateComponent/> */}
          {/* <UseReducerComponent/> */}
          {/* <UseEffectComponent/> */}
          {/* <UseRefComponent/> */}
          {/* <UsRefDifferenceComponent/> */}
          {/* <UseRefForwarderComponent /> */}
          {/* <UseLayoutEffectComponent/> */}
          {/* <UseImperativeHandlerComponent/> */}
          {/* <UseContextComponent/> */}
          {/* <UseMemoComponent/> */}
          <UseCallBackComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;

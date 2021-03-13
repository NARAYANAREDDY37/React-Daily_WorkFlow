import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import InLine from './components/InLine'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'


function App() {
  return (
    <div className="App">
      <Table/>
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <InLine/> */}
      {/* <StyleSheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* ----------------function component---------------- */}
      {/* <Greet name= 'Narayana' heroName= 'Batman'>
      </Greet>
      <Greet name= 'Venkata reddy' heroName= 'Superman'>
        <button>Action</button>
      </Greet>
      <Greet name= 'Vasu reddy' heroName= 'Thanos'/> */}

      {/* ----------------class component---------------- */}
      {/* <Welcome name= 'Alex' heroName= 'BruceLee'>

      </Welcome>
      <Welcome name= 'Johan' heroName= 'Ranger'>

      </Welcome>
      <Welcome name= 'Clement' heroName= 'Bluestar'>

      </Welcome> */}
      {/* <Hello/> */}
    </div>
    
  );
}


export default App;

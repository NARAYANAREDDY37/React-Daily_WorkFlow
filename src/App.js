import "./App.css";
/* import './appStyles.css'
import logo from './logo.svg';
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
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import ForwRefParentInput from './components/ForwRefParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary' */
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import RenderPropsCounter from "./components/RenderPropsCounter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Narayana">
        <ComponentC />
      </UserProvider>

      {/* <RenderPropsCounter render = {(count, incrementCount) =>(
        <ClickCounterTwo count= {count} incrementCount = {incrementCount}/>
        )}
      />

      <RenderPropsCounter render = {(count, incrementCount) =>(
        <HoverCounterTwo count= {count} incrementCount = {incrementCount}/>
        )}
      /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render ={(isLoggedIn) => isLoggedIn ? 'Narayana' : 'Guest'}/> */}
      {/* <ClickCounter name='George'/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
        <Hero heroName = 'Batman' />
        <Hero heroName = 'Super Man' />
        <Hero heroName = 'Joker' />
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <ForwRefParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <PureComp/> */}
      {/* <Table/> */}
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

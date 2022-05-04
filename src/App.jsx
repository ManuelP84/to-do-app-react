import './App.css'
import StoreProvider from './components/StoreProvider';
import ListOfToDo from './components/ListOfToDo';
import Form from './components/Form';

function App() {

  return (
    <StoreProvider>
      <h1>Hello from my app</h1>
      <ListOfToDo />
      <Form />
    </StoreProvider>
  )
}

export default App

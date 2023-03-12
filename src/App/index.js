import React from 'react';
// import { TodoProvider } from '../TodoContext';
// import { AppUI } from './AppUI';


function App() {
  const state = React.useState('Estoy en estado');

  return(
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch state={state}/>
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
      <TodoCreateButton />
    </React.Fragment>
  );
}

function TodoHeader({ children }) {
  return(
    <header>
      {children}
    </header>
  );
}

function TodoList ({ children }) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
};

function TodoCounter () {
  return (
    <h2>Todo Counter</h2>
  );
};

function TodoSearch () {
  return (
    <input placeholder='Todo Search'></input>
  );
};

function TodoItem ({ state }) {
  return (
    <p>Todo Item: {state}</p>
  );
};

function TodoCreateButton () {
  return (
    <button>Nuevo TODO</button>
  );
};


// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;

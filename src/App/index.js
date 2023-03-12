import React from 'react';
// import { TodoProvider } from '../TodoContext';
// import { AppUI } from './AppUI';


function App() {
  const state = React.useState('Estoy en estado');

  return(
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
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
    <p>Todo Counter</p>
  );
};

function TodoSearch () {
  return (
    <p>Todo Search</p>
  );
};

function TodoCreateButton () {
  return (
    <button>Nuevo TODO</button>
  );
};

function TodoItem ({ state }) {
  return (
    <p>Todo Item: {state}</p>
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

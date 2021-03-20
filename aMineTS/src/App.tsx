import './App.css';

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

function App() {

  // 泛型
  function identity<T>(arg: T): T {
    return arg;
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = { 
    firstName: "Jane", 
    lastName: "User" 
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>{ greeter(user) }</div>
        <div>{ identity(user).firstName + ' + ' + identity(user).lastName}</div>
      </header>
    </div>
  );
}

export default App;

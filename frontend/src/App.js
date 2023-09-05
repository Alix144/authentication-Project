import './App.css';

function App() {
  return (
    <div className="App">
      <form action="" style={{border: '1px solid blue', width: '300px'}}>
        <h1>Login</h1>
        <label htmlFor="">name</label>
        <input type="text" />

        <label htmlFor="">password</label>
        <input type="password" />

        <button type='submit'>submit</button>
      </form>

      <form action="">
        <h1>Register</h1>
        <label htmlFor="">name</label>
        <input type="text" />

        <label htmlFor="">password</label>
        <input type="password" />

        <button type='submit'>submit</button>
      </form>


    </div>
  );
}

export default App;

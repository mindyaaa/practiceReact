import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';


function App() {
  const handleClick = () => alert("hi");
  return (
    <>
      <button 
      onClick={handleClick}>안뇽</button>
      <Avatar
      isNew={true}
      image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
      />

      <Profile 
      name='Linda' 
      image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' 
      title='Engineer'
      isNew={true}
       />
      <Profile 
      name='Amy' 
      image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' 
      title='Engineer' />

      <Profile 
      name='Rosie' 
      image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80' 
      title='Engineer'
       />
    </>
  );
}

export default App;
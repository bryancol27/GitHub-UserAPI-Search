import { useState, useEffect } from "react";
import { Container } from "@mui/system";

//components
import Searcher from "./components/Searcher";
import UserCard from "./containers/userCard";

//service fetch User
import { gettingUser } from './services/users';

function App() {

  const [ inputUser, setUser ] = useState('octocat');
  const [ currentUser, setCurrentUser ] = useState('');
  const [ notFound, setNotFound ] = useState(false)

  useEffect(() => {
    const getDataUser = async() => {
      let data = await gettingUser(inputUser);

      if(currentUser.login == 'octocat'){
        localStorage.setItem('octocat', JSON.stringify(currentUser))
      }

      if(data.message == 'Not Found'){
        const { octocat } = localStorage;
        data = JSON.parse(octocat)
        setNotFound(true);
      }else{
        setNotFound(false);
      }
        
      setCurrentUser(data);
    };

    getDataUser()

  }, [inputUser])

  return (
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher 
        inputUser={inputUser} 
        setUser={setUser}
        notFound={notFound}/>

      <UserCard
        currentUser={currentUser}
      />
    </Container>
  )
}

export default App

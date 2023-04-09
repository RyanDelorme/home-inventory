import { useState } from 'react';

function Home() {

  const [message, setMessage] = useState('Welcome!');
  const [button, setButton] = useState('français?');

  const changeLanguage = () => {
    if(message === 'Welcome!') {
      setMessage('Bienvenue!');
      setButton('english?');
    } else {
      setMessage('Welcome!');
      setButton('français?');
    }
  }

  return (
    <>
      { message }<br/><br/>
      <button onClick={ changeLanguage }>{ button }</button>

    </>
  );
}

export default Home;

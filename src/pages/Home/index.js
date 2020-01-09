import React,{useState} from 'react';
import Button from '../../components/Button'
import './style.scss';

function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="home-body">
      Contador: {counter}
      <Button onClick={() => setCounter(counter+1)} titulo="Botão"/>
    </div>
  );
}

export default Home;

import * as React from 'react';
import {useNavigate} from "react-router-dom"


const Home = (props) => {

const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/my-react-app/src/pages/sensor1page.jsx")} style={{padding:'32px 16px'}} >
      Sensor 1
    </button>
  )
}

export default Home;
import { useState } from 'react'
import '../styles/App.css'
import CarCard from '../components/CarCard'
import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();
  const goToNotFound = (path) => {
    console.log(path);
    return navigate('/not-found');
  }

  function goToPage(path) {
    return navigate('/' + path);
  }

  return (
    <>
      <CarCard
        carImg='https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6QpcEUSu%258BgymCzGoajsEwhaxFH8dFMR6%258sMex58EP8nESW323U8iJZ2GP1iPsFmlKmjXKQo4gto6ZohJwkQjfDrhJDVougpBoV60KZOvWTQZB1aifSs%251BDYsHqZ8CQfUSkBpIAYC890lPomKSv6XR8Y4WDOgP3akKUnw1CYTEeqpFiLRZmhbgmFpq6QfiIpggyxc7qr7RsWmwZ76HnaXm1eQzX2cQ8'
        brandName='Porsche'
        brandLogo='https://murrugadesign.files.wordpress.com/2013/03/logo-porsche.jpg?w=834'
        model='911 Carrera'
        year='2024'
        price='460.000,000'>
      </CarCard>
      <button onClick={goToNotFound('not-found')}>Not Found</button>
    </>
  )
}

export default App

import React from 'react';
import vaccine from '../assets/vaccination.jpg';
  
const Home = () => {
  return (
    <div
      style={{
        background: 'rgb(235,237,237)',
        background: 'linear-gradient(90deg, rgba(235,237,237,1) 0%, rgba(212,232,232,1) 100%)',
        display: 'flex',
        // justifyContent: 'Left',
        // alignItems: 'Left',
        height: '100vh'
      }}
    >
      <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: 20,
        marginTop: 50
        }}>
        <div
        style={{
          borderStyle: 'dashed',
          borderWidth: '5px',
          borderRight: 'none',
          marginLeft: 120,
          marginBottom: 205,
          borderColor: '#0c676e'
        }}>
          <h3
          style={{
            color: '#4abbc3',
            paddingLeft: 50,
            paddingTop: 40,
            fontSize: 30,
          }}>Welcome to Vaccine Clinic</h3>
          <p
          style={{
            color: '#02373b',
            paddingLeft: 50,
            paddingRight: 10,
            paddingTop: 20,
            fontColor: '#02373b',
            fontSize: 45,
            fontWeight: 'bold',
          }}>It's time to get vaccinated!
          </p>
          <p
          style={{
            color: '#0c676e',
            paddingLeft: 50,
            paddingRight: 10,
            paddingTop: 5,
            fontSize: 20,
            alignItems: 'justify'
          }}>We are a non-profit organization that provides free vaccines to children in need. We are dedicated to helping children in need get the vaccines they need to stay healthy.
          </p>
          <a href="/listpatients">
            <button type="button" style={{
              backgroundColor: '#4abbc3',
              color: 'white',
              marginLeft: 50,
              marginTop: 20,
              marginBottom: 20,
              fontSize: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              border: 'none',
              borderRadius: 10,
              }}>See the patients</button>
          </a>
        </div>
        <div
        style={{
          marginRight: 20
        }}>
        <img src={vaccine} alt="vaccine" style={{ width: '70%', height: '70%' }} />
        </div>
      </div>

    </div>
  );
};
  
export default Home;
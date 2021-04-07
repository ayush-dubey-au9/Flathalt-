import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Amenities from './components/Amenities';
import MultipleImageComponent from './components/imageUpload';
import Keydetails from './components/keydetails';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <hr style={{ width: "80%", borderTop: "0.5px solid #B0B0B0" }} />
      <MultipleImageComponent/>
      <Keydetails/>
      <Amenities/>
    </div>
  );
}

export default App;

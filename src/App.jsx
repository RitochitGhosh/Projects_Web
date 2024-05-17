import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import './styles/App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My CV</h1>
      </header>
      <main>
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </main>
    </div>
  );
}

export default App;

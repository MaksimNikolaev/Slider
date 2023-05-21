import { useState } from 'react';
import { Background } from '../../pages/Background/background';
import { Home } from '../../pages/Home/home';
import { Template } from '../../pages/Template/template';
import style from './App-style.module.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [sliderPhoto, setSliderPhoto] = useState<string[]>([]);

  return (
    <div className={style.container}>
      <Routes>
        <Route
          path="/"
          element={
            <Home sliderPhoto={sliderPhoto} setSliderPhoto={setSliderPhoto} />
          }
        />
        <Route
          path="/template"
          element={
            <Template
              sliderPhoto={sliderPhoto}
              setSliderPhoto={setSliderPhoto}
            />
          }
        />
        <Route
          path="/background"
          element={
            <Background
              sliderPhoto={sliderPhoto}
              setSliderPhoto={setSliderPhoto}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

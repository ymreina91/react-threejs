import React from 'react';
import {ThreeProvider} from "./context/ThreeContext.tsx";
import './App.css';
import Scene3D from "./components/Scene3D.tsx";

const App: React.FC = () => {
    return (
        <>
            <ThreeProvider>
                <Scene3D/>
            </ThreeProvider>
        </>
    );
};

export default App;
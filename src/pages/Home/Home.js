import Cube from './components/Cube';
import Chest from './components/Chest';
import Character from './components/Character';
import Bubble from './components/Bubble';
import { useState } from 'react';

export default function Home() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <Cube />
            <Chest />
            <Bubble display={display} setDisplay={setDisplay} />
            <Character setDisplay={setDisplay} />
        </>
    );
}
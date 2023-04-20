//import { useContext } from 'react';
import { enemyColorMap } from '../../../gameContext/constants.js';
import './Enemy.css';

const Enemy = ({ enemy }) => {
    //const game = useContext()[0];

    return <>
        <div className='enemy' style={{background: enemyColorMap[enemy.type]}}>
            <span className='enemyText'>{enemy.type}</span>
        </div>
    </>;
};

export default Enemy;
import React from 'react';

import { Character } from '../model/models';


interface CharacterProps {
    data: Character
}


const CharacterComponent: React.FC<CharacterProps> = (props) => {

    return (
        <div className='character'>
            <div className='name'>{props.data.name}</div>
            <div className='imageContainer'>
                <img src={props.data.image.url}></img>
            </div>

        </div>
    )




    // return <div className="character">{(() => {

    //     return props.data.name;

    // })()}

    // </div>;
};

export default CharacterComponent;




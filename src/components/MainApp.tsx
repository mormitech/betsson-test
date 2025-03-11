import React, { useState } from 'react';

import data from '../assets/mock-data.json';
import { Character } from '../model/models';
import CharacterComponent from '../components/Character';
import { parse } from 'path';
import SearchComponent from './Search';

const MainApp: React.FC = () => {

    //console.warn(data);


    const [searchValue, setSearchValue] = useState('');



    const parsedData: Character[] = data.characters;


    function searchValueChanged(searchValue: any) {

        setSearchValue(searchValue);





    }


    return (<div className="mainApp">

        <SearchComponent placeholder='test' onChange={searchValueChanged}></SearchComponent>
        <div className='charactersContainer'>


            {(() => {

                const components = [];

                //console.warn(searchValue);

                for (const character of parsedData) {
                    if (searchValue !== "" && searchValue !== undefined) {
                        if (character.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            components.push(<CharacterComponent data={character}></CharacterComponent>);
                        }
                    }
                    else {
                        components.push(<CharacterComponent data={character}></CharacterComponent>);
                    }



                }

                return components;

            })()}
        </div>
    </div>);
};

export default MainApp;
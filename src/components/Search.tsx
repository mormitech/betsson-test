import React from 'react';

import { Character } from '../model/models';


interface Props {
    placeholder: string,
    onChange: (searchValue: string) => void
}


const SearchComponent: React.FC<Props> = (props) => {

    function searchValueChanged(x: any) {
        const input: HTMLInputElement = x.target;

        if (props.onChange) {
            props.onChange(input.value);
        }

    }

    return <div className='searchComponent'><input placeholder={props.placeholder} onChange={searchValueChanged}></input></div>;
};

export default SearchComponent;




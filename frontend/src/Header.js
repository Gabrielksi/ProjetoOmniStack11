import React from 'react';

export default function Header(propriedades){
    return(
        <header>
            <h1>{propriedades.title}</h1>
        </header>
    );
}
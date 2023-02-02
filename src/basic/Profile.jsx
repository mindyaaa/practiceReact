import React from 'react';
import Avatar from './Avatar';

export default function Profile({image, name, title, isNew}) {
    return (
        <div className='profile'>
            <Avatar isNew={isNew} image={image} />
             <h2>{name}</h2>
             <h3>{title}</h3>
        </div>
    );
}


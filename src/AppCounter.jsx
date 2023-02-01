import React, {useState} from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);

    return (
        <div>
            <div className='counterBanner'>
                Total Count : {totalCount} {totalCount > 10 ? '🔥' : '❄️'}
            </div>
            <Counter setTotalCount={setTotalCount} totalCount={totalCount} />
            <Counter setTotalCount={setTotalCount} totalCount={totalCount} />
        </div>
    );
}


import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'what is your name',
        content: 'it is a frontend framework'
    },
    {
        title: 'who are you',
        content: 'I am batman'
    },
    {
        title: 'that is not true',
        content: 'yes it is '
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The shade of blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>

            {/* <Accordion items={items} />
            <Search /> */}
            <Dropdown
                onSelectedChange={setSelected}
                selected={selected}
                options={options} />
        </div>
    );
};
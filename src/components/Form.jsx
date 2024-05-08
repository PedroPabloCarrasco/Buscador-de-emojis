import React, { useState } from 'react';

const Form = ({ setValueEmoji }) => {
    const [value, setValue] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setValueEmoji(value);
        console.log(value);
    };

    return (
        <section className='form'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Algun emoji' onChange={e => setValue(e.target.value)} />
            </form>
        </section>
    );
};

export default Form;

import React, { useState } from 'react';

const BookingForm = (props) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>

                            <input type='date' id= 'book-date' value={date} onChange={handleChange} required/>
                        </div>
                        
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value=''>Select Time</option>
                                {
                                    Array.isArray(props.availableTimes.availableTimes) && props.availableTimes.availableTimes.map(availableTimes =>{
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input type='number' id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                                <option value=''>Select Occasion</option>
                                <option value='birthday'>Birthday</option>
                                <option value='anniversary'>Anniversary</option>
                                <option value='engagement'>Engagement</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On Click' type={"submit"} value={"Book the Table"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
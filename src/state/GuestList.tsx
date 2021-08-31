import {useState} from 'react';

const GuestList: React.FC = () => {

    const [guest, setGuest] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuest('');
        if(guest === '') return; 
        setGuests([...guests, guest]);
    }

    return (
        <div>
            <h3> Guests List</h3>
            <ol>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ol>
            <input value={guest} onChange={e=>setGuest(e.target.value)}/>
            <button onClick={onClick}> Click to add</button>
        </div>
    );
}

export default GuestList;
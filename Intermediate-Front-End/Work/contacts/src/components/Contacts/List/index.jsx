import { useState } from 'react';

function List({ contacts }) {

    // filter
    const [filterText, setFilterText] = useState('');

    // filtreleme işlemi yaptık
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        )
    });

    return (
        <div>

            <input placeholder="Filter Contact" value={filterText} onChange={(event) => setFilterText(event.target.value)} />

            <ul className="list">

                {
                    // input içerisindeki değerleri listeliyor
                    filtered.map((contacts, i) => <li key={i} className="userList">
                        <span>{contacts.fullname}</span>
                        <span>{contacts.phone_number}</span>
                    </li>)
                }
            </ul>
        </div>
    )
}
export default List
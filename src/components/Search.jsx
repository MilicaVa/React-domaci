import { useState } from 'react'
import Muzeji from './Muzeji';

function Search() {

    const muzejiPocetni = [
        { muzej_id: 1, naziv: 'Narodni muzej1', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 2, naziv: 'Narodni muzej2', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 3, naziv: 'Narodni muzej3', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 4, naziv: 'Narodni muzej4', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 5, naziv: 'Narodni muzej5', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 6, naziv: 'Narodni muzej6', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 7, naziv: 'Narodni muzej7', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 8, naziv: 'Narodni muzej8', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 9, naziv: 'Narodni muzej9', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 10, naziv: 'Narodni muzej10', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 11, naziv: 'Narodni muzej11', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 12, naziv: 'Narodni muzej12', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 13, naziv: 'Narodni muzej13', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 14, naziv: 'Narodni muzej14', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 15, naziv: 'Narodni muzej15', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' }
    ];

    const [searchvalue, setSearchvalue] = useState('')
    const [muzeji, setMuzeji] = useState(muzejiPocetni)

    function handleSearch(e) {
        setSearchvalue(e.target.value)
    }

    function search() {
        const niz = []

        for (let i = 0; i < muzejiPocetni.length; i++) {
            if (muzejiPocetni[i].naziv.includes(searchvalue))
                niz.push(muzejiPocetni[i])
        }

        setMuzeji(niz)
    }


    return (
        <div>

            <div className="searchfields">
                <input type="text" id="inputsearch" onChange={handleSearch} />
                <button onClick={search} className="btn btn-primary">Search</button>
            </div>

            <Muzeji muzeji={muzeji} />

        </div>
    )
}

export default Search;
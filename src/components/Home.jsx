import Muzeji from "./Muzeji";
import { useState } from 'react'
import Navigacija from "./Navigacija";


function Home() {

    const muzejiPocetni = [
        { muzej_id: 1, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 2, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 3, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 4, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 5, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 6, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 7, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 8, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 9, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 10, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 11, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 12, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 13, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 14, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { muzej_id: 15, naziv: 'Narodni muzej', adresa: 'Adresa', grad: 'Grad', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' }
    ];


    const [muzeji, setMuzeji] = useState(muzejiPocetni.slice(0, 5))

    function paginacija(id) {
        const niz = []

        if (id == 1) {
            for (let i = 0; i < muzejiPocetni.length; i++) {
                if (muzejiPocetni[i].muzej_id >= 1 && muzejiPocetni[i].muzej_id <= 5)
                    niz.push(muzejiPocetni[i])
            }
        }

        if (id == 2) {
            for (let i = 0; i < muzejiPocetni.length; i++) {
                if (muzejiPocetni[i].muzej_id > 5 && muzejiPocetni[i].muzej_id <= 10)
                    niz.push(muzejiPocetni[i])
            }
        }

        if (id == 3) {
            for (let i = 0; i < muzejiPocetni.length; i++) {
                if (muzejiPocetni[i].muzej_id > 10 && muzejiPocetni[i].muzej_id <= 15)
                    niz.push(muzejiPocetni[i])
            }
        }

        setMuzeji(niz)
    }


    return (
        <div>
            <Navigacija />

            <Muzeji muzeji={muzeji} />

            <div className="spanpaginate">
                <span onClick={() => paginacija(1)}>1 &nbsp;</span>
                <span onClick={() => paginacija(2)}>2 &nbsp;</span>
                <span onClick={() => paginacija(3)}>3 &nbsp;</span>
            </div>


        </div>
    )
}

export default Home;
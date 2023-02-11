function Muzeji(props) {

    var muzeji = props.muzeji

    return (
        <div className="muzejitbl">
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Naziv</th>
                        <th>Adresa</th>
                        <th>Grad</th>
                        <th>Email</th>
                        <th>Sajt</th>
                    </tr>
                </thead>


                <tbody>
                    {muzeji.map(m => {
                        return (
                            <tr key={m.muzej_id}>
                                <td>{m.muzej_id}</td>
                                <td>{m.naziv}</td>
                                <td>{m.adresa}</td>
                                <td>{m.grad}</td>
                                <td>{m.email}</td>
                                <td>{m.sajt}</td>
                            </tr>
                        );
                    })}
                </tbody>


            </table>
        </div>
    )
}

export default Muzeji;
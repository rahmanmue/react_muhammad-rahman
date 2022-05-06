import { useEffect, useState } from "react";
import "./Home.css";

const PassengerEdit = (props) => {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      nama: state.nama,
      umur: state.umur,
      jenisKelamin: state.jenisKelamin,
    };
    // console.log("newDt: ", newData);
    props.editPengunjung(newData);
    setState({
      nama: "",
      umur: "",
      jenisKelamin: "Pria",
    });
  };

  return (
    <div>
      <div onSubmit={handleSubmit}>
        <p>Edit Nama</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama ..."
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Edit Umur</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur ..."
          value={state.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Edit Jenis Kelamin</p>
        <select
          onChange={onChange}
          name="jenisKelamin"
          defaultValue={props.myValue}
        >
          <option value="Pria">Pria</option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PassengerEdit;

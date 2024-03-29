import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
      <td className="removeBorder" onClick={() => props.onGetId(id)}>
        <button>Edit</button>
      </td>
    </tr>
  );
};

export default ListItem;

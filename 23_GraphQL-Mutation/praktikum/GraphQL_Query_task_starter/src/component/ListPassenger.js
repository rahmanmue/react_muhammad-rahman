import ListItem from "./ListItem";
const ListPassenger = (props) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={props.hapusPengunjung}
              onGetId={props.onGetId}
              editPengunjung={props.editPengunjung}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;

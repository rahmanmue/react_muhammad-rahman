import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
const getData = gql`
  query MyQuery {
    task22_pengunjung {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

const getDataById = gql`
  query MyQuery($_eq: Int!) {
    task22_pengunjung(where: { id: { _eq: $_eq } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const [list, setList] = useState();
  // const [list, setList] = useState([
  //   {
  //     id: 1,
  //     jenisKelamin: "Wanita",
  //     nama: "Lala",
  //     umur: 21,
  //   },
  //   {
  //     id: 2,
  //     jenisKelamin: "Pria",
  //     nama: "Ivan",
  //     umur: 25,
  //   },
  //   {
  //     id: 3,
  //     jenisKelamin: "Pria",
  //     nama: "Yoga",
  //     umur: 22,
  //   },
  //   {
  //     id: 4,
  //     jenisKelamin: "Wanita",
  //     nama: "Ria",
  //     umur: 19,
  //   },
  //   {
  //     id: 5,
  //     jenisKelamin: "Pria",
  //     nama: "Fahmi",
  //     umur: 25,
  //   },
  // ]);

  //   const { data } = useQuery(getData);

  const [getData, { data }] = useLazyQuery(getDataById);

  useEffect(() => {
    if (data) {
      setList(data?.task22_pengunjung);
    }
  }, [data]);

  const hapusPengunjung = (id) => {
    setList([
      ...list.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setList([...list, newData]);
  };

  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    if (e.target) {
      setValue(e.target.value);
    }
  };

  const onGetData = () => {
    getData({
      variables: {
        _eq: value,
      },
    });

    setList(data?.task22_pengunjung);
  };

  return (
    <div>
      <Header />
      <ListPassenger data={list || []} hapusPengunjung={hapusPengunjung} />
      <input
        value={value}
        onChange={onChangeValue}
        type="number"
        placeholder="Masukan Id"
      />
      <button onClick={onGetData}>Get Data</button>
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
};

export default Home;

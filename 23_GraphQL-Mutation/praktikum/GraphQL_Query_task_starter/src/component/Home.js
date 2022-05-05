import { useEffect, useState } from "react";
import PassengerInput from "./PassengerInput";
import PassengerEdit from "./PassengerEdit";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useMutation } from "@apollo/client";

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

const updateData = gql`
  mutation MyMutation(
    $id: Int_comparison_exp = {}
    $_set: task22_pengunjung_set_input = {}
  ) {
    update_task22_pengunjung(where: { id: $id }, _set: $_set) {
      affected_rows
    }
  }
`;

const deleteData = gql`
  mutation MyMutation($_eq: Int!) {
    delete_task22_pengunjung(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const insertData = gql`
  mutation MyMutation($object: task22_pengunjung_insert_input = {}) {
    insert_task22_pengunjung_one(object: $object) {
      nama
      umur
      jenisKelamin
    }
  }
`;

const Home = () => {
  const [list, setList] = useState();

  const { data: respond, refetch } = useQuery(getData);
  // const [getDataId, { data }] = useLazyQuery(getDataById);
  const [update, { loading: loadingUpdate }] = useMutation(updateData, {
    refetchQueries: [getData],
  });

  const [deleteWhereId, { loading: loadingDelete }] = useMutation(deleteData, {
    refetchQueries: [getData],
  });
  const [insertOneData, { loading: loadingInsert }] = useMutation(insertData, {
    refetchQueries: [getData],
  });
  // console.log(respond);

  // useEffect(() => {
  //   if (data) {
  //     setList(data?.task22_pengunjung);
  //   } else {
  //     setList(respond?.task22_pengunjung);
  //   }

  // }, [data, respond]);
  useEffect(() => {
    if (respond) {
      setList(respond?.task22_pengunjung);
    }
  }, [respond]);

  const hapusPengunjung = (id) => {
    // setList([
    //   ...list.filter((item) => {
    //     return item.id !== id;
    //   }),
    // ]);

    deleteWhereId({
      variables: {
        _eq: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    // const newData = {
    //   id: uuidv4(),
    //   ...newUser,
    // };
    // setList([...list, newData]);

    insertOneData({
      variables: {
        object: {
          ...newUser,
        },
      },
    });
  };

  const [edit, setEdit] = useState(false);
  const [valueId, setValueId] = useState();
  const editPengunjung = async (data) => {
    await update({
      variables: {
        id: {
          _eq: valueId,
        },
        _set: data,
      },
    });
    setEdit(false);
    // setList(respond?.task22_pengunjung);
  };

  // const [value, setValue] = useState("");
  // const onChangeValue = (e) => {
  //   if (e.target) {
  //     setValue(e.target.value);
  //   }
  // };

  // const onGetData = (value) => {
  //   getDataId({
  //     variables: {
  //       _eq: value,
  //     },
  //   });

  //   setList(data?.task22_pengunjung);
  //   setEdit(true);
  //   setValueId(value);
  // };

  const onGetId = (value) => {
    setEdit(true);
    setValueId(value);
  };

  return (
    <div>
      <Header />
      <ListPassenger
        data={list || []}
        hapusPengunjung={hapusPengunjung}
        onGetId={onGetId}
        editPengunjung={editPengunjung}
      />
      {/* <input
        value={value}
        onChange={onChangeValue}
        type="number"
        placeholder="Masukan Id"
      />
      <button onClick={onGetData}>Get Data</button> */}
      {/* <button onClick={ediT}>Edit Nih</button> */}

      {edit ? (
        <PassengerEdit editPengunjung={editPengunjung} data={list || []} />
      ) : (
        <PassengerInput tambahPengunjung={tambahPengunjung} myValue={"Pria"} />
      )}
    </div>
  );
};

export default Home;

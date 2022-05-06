import { useEffect, useState } from "react";
import PassengerInput from "./PassengerInput";
import PassengerEdit from "./PassengerEdit";
import ListPassenger from "./ListPassenger";
import Header from "./Header";

// hooks graphql
import useUpdateData from "../hooks/useUpdateData";
import useDeleteData from "../hooks/useDeleteData";
import useInsertData from "../hooks/useInsertData";
import useSubscribeData from "../hooks/useSubscribeData";
import useGetData from "../hooks/useGetData";

const Home = () => {
  const [list, setList] = useState();

  // const { data: respond, error } = useSubscription(SubscriptionData);
  // const [update, { loading: loadingUpdate }] = useMutation(updateData, {
  //   refetchQueries: [getData],
  // });
  // const [deleteWhereId, { loading: loadingDelete }] = useMutation(deleteData, {
  //   refetchQueries: [getData],
  // });
  // const [insertOneData, { loading: loadingInsert }] = useMutation(insertData, {
  //   refetchQueries: [getData],
  // });

  const { update, loadingUpdate } = useUpdateData();
  const { deleteWhereId, loadingDelete } = useDeleteData();
  const { insertOneData, loadingInsert } = useInsertData();

  // Dua Cara Subscription
  // const { respond, loading, error } = useSubscribeData();
  const { respond, loadingGetData, subscribeData } = useGetData();

  useEffect(() => {
    subscribeData();
  }, []);

  // useEffect(() => {
  //   if (respond) {
  //     setList(respond ? respond : []);
  //   }
  // }, []);

  const hapusPengunjung = (id) => {
    deleteWhereId({
      variables: {
        _eq: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
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
  };

  const onGetId = (value) => {
    setEdit(true);
    setValueId(value);
  };

  return (
    <div>
      <Header />
      <ListPassenger
        data={respond}
        hapusPengunjung={hapusPengunjung}
        onGetId={onGetId}
        editPengunjung={editPengunjung}
      />

      {edit ? (
        <PassengerEdit editPengunjung={editPengunjung} data={list || []} />
      ) : (
        <PassengerInput tambahPengunjung={tambahPengunjung} myValue={"Pria"} />
      )}
    </div>
  );
};

export default Home;

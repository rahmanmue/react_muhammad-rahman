import { useQuery } from "@apollo/client";
import { getData } from "../graphql/query";
import { SubscriptionData } from "../graphql/subscribe";

export default function useGetData() {
  const { data: respond, loadingGetData, subscribeToMore } = useQuery(getData);

  const subscribeData = () => {
    subscribeToMore({
      document: SubscriptionData,
      //prev yaitu data sebelumnya yang diambil dari data usequery
      updateQuery: (prev, { subscriptionData: { data: respond } }) => {
        console.log(respond.task22_pengunjung);
        return respond;
      },
    });
  };

  return {
    respond: respond ? respond.task22_pengunjung : [],
    loadingGetData,
    subscribeData,
  };
}

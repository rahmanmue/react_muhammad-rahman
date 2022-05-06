import { useSubscription } from "@apollo/client";
import { SubscriptionData } from "../graphql/subscribe";

export default function useSubscribeData() {
  const { data: respond, loading, error } = useSubscription(SubscriptionData);

  return {
    respond,
    loading,
    error,
  };
}

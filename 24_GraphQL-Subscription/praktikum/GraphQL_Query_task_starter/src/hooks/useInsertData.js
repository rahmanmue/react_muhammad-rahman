import { useMutation } from "@apollo/client";
import { getData } from "../graphql/query";
import { insertData } from "../graphql/mutation";

export default function useUpdateData() {
  const [insertOneData, { loading: loadingInsert }] = useMutation(insertData, {
    refetchQueries: [getData],
  });

  return {
    insertOneData,
    loadingInsert,
  };
}

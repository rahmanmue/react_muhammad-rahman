import { useMutation } from "@apollo/client";
import { getData } from "../graphql/query";
import { deleteData } from "../graphql/mutation";

export default function useUpdateData() {
  const [deleteWhereId, { loading: loadingDelete }] = useMutation(deleteData, {
    refetchQueries: [getData],
  });

  return {
    deleteWhereId,
    loadingDelete,
  };
}

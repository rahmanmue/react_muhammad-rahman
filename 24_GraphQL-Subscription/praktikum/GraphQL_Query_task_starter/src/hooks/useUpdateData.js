import { useMutation } from "@apollo/client";
import { getData } from "../graphql/query";
import { updateData } from "../graphql/mutation";

export default function useUpdateData() {
  const [update, { loading: loadingUpdate }] = useMutation(updateData, {
    refetchQueries: [getData],
  });

  return {
    update,
    loadingUpdate,
  };
}

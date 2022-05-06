import { gql } from "@apollo/client";

export const updateData = gql`
  mutation MyMutation(
    $id: Int_comparison_exp = {}
    $_set: task22_pengunjung_set_input = {}
  ) {
    update_task22_pengunjung(where: { id: $id }, _set: $_set) {
      affected_rows
    }
  }
`;

export const deleteData = gql`
  mutation MyMutation($_eq: Int!) {
    delete_task22_pengunjung(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

export const insertData = gql`
  mutation MyMutation($object: task22_pengunjung_insert_input = {}) {
    insert_task22_pengunjung_one(object: $object) {
      nama
      umur
      jenisKelamin
    }
  }
`;

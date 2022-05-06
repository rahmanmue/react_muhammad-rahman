import { gql } from "@apollo/client";

export const getData = gql`
  query MyQuery {
    task22_pengunjung {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const getDataById = gql`
  query MyQuery($_eq: Int!) {
    task22_pengunjung(where: { id: { _eq: $_eq } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;

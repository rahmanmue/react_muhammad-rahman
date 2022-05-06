import { gql } from "@apollo/client";

export const SubscriptionData = gql`
  subscription MySubscription {
    task22_pengunjung {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

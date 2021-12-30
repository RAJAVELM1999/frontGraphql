import gql from 'graphql-tag';

export const getLevelsQuery = () => {
    return gql`
        query {
          getAll {
              id
              name
              type
              identifier
          }
        }
      `;
};
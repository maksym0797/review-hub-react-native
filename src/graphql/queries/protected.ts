import {gql} from '@apollo/client';

export const TEST_PROTECTED = gql`
  query TestProtected {
    protected {
      protected
    }
  }
`;

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Client = {
  __typename?: 'Client';
  email: Scalars['String']['output'];
  events: Array<Maybe<Events>>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type Events = {
  __typename?: 'Events';
  id: Scalars['ID']['output'];
  startDateTime: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findClientById?: Maybe<Client>;
  queryClientList: Array<Maybe<Client>>;
};


export type QueryFindClientByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RetrieveClientsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type RetrieveClientsQuery = { __typename?: 'Query', findClientById?: { __typename?: 'Client', id: string, firstName: string, lastName: string, email: string, events: Array<{ __typename?: 'Events', id: string, startDateTime: string, title: string } | null> } | null, queryClientList: Array<{ __typename?: 'Client', id: string, firstName: string, lastName: string, email: string, events: Array<{ __typename?: 'Events', id: string, title: string, startDateTime: string } | null> } | null> };


export const RetrieveClientsDocument = gql`
    query RetrieveClients($id: String) {
  findClientById(id: $id) {
    id
    firstName
    lastName
    email
    events {
      id
      startDateTime
      title
    }
  }
  queryClientList {
    id
    firstName
    lastName
    email
    events {
      id
      title
      startDateTime
    }
  }
}
    `;

/**
 * __useRetrieveClientsQuery__
 *
 * To run a query within a React component, call `useRetrieveClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRetrieveClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRetrieveClientsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRetrieveClientsQuery(baseOptions?: Apollo.QueryHookOptions<RetrieveClientsQuery, RetrieveClientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RetrieveClientsQuery, RetrieveClientsQueryVariables>(RetrieveClientsDocument, options);
      }
export function useRetrieveClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RetrieveClientsQuery, RetrieveClientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RetrieveClientsQuery, RetrieveClientsQueryVariables>(RetrieveClientsDocument, options);
        }
export type RetrieveClientsQueryHookResult = ReturnType<typeof useRetrieveClientsQuery>;
export type RetrieveClientsLazyQueryHookResult = ReturnType<typeof useRetrieveClientsLazyQuery>;
export type RetrieveClientsQueryResult = Apollo.QueryResult<RetrieveClientsQuery, RetrieveClientsQueryVariables>;
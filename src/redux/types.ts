import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export interface Nodes<T> {
  nodes: T[]
}
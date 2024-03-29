/**
 * Generated by orval v6.24.0 🍺
 * Do not edit manually.
 * Test service
 * OpenAPI spec version: 0.0.1
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { useTestMutator } from '.././testMutator';



/**
 * This is a test endpoint
 * @summary Testing orval
 */
export const useTestHook = () => {
        const test = useTestMutator<string>();

        return (
    
 signal?: AbortSignal
) => {
        return test(
          {url: `/api/test`, method: 'GET', signal
    },
          );
        }
      }
    

export const getTestQueryKey = () => {
    return [`/api/test`] as const;
    }

    
export const useTestQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useTestHook>>>, TError = unknown>( options?: { query?:UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useTestHook>>>, TError, TData>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTestQueryKey();

  const test =  useTestHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useTestHook>>>> = ({ signal }) => test(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useTestHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type TestQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useTestHook>>>>
export type TestQueryError = unknown

/**
 * @summary Testing orval
 */
export const useTest = <TData = Awaited<ReturnType<ReturnType<typeof useTestHook>>>, TError = unknown>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useTestHook>>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = useTestQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




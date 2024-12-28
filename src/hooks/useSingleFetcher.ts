import { ICommonProps } from '@/interfaces'
import { API } from '@/utils'
import {
  QueryFunction,
  QueryKey,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
  useSuspenseQuery,
  useQuery,
  UseQueryResult,
  useSuspenseQueries,
  useQueries
} from '@tanstack/react-query'
import { AxiosError, AxiosRequestConfig } from 'axios'

type TParams = Record<string, string>

type PropType<TData, TError> = {
  keyName: QueryKey
  url: string
  params?: TParams
  pathParams?: TParams
  baseURL?: string
  /**
   * When using these props, the `useQuery` hook is used and `Suspense no longer works`, so you must use isLoading and isError and refetch.
   */
  enabled?: boolean
  initialData?: TData
  headers?: AxiosRequestConfig['headers']
  options?: Omit<UseSuspenseQueryOptions<TData, TError>, 'queryKey' | 'queryFn' | 'enabled' | 'initialData'>
}

type TReturn<TData, TError> =
  | UseQueryResult<ICommonProps<TData>, TError>
  | UseSuspenseQueryResult<ICommonProps<TData>, TError>

type TGenericReturn<TData, TError> = TData extends Array<TData> ? Array<TReturn<TData, TError>> : TReturn<TData, TError>

const useSingleFetcher = <TData, TError = AxiosError<ICommonProps>>(
  props: PropType<ICommonProps<TData>, TError> | Array<PropType<ICommonProps<TData>, TError>>
): TGenericReturn<TData, TError> => {
  if (Array.isArray(props)) {
    const hasUseEnabledOption = props.some(({ enabled }) => typeof enabled !== 'undefined')

    if (hasUseEnabledOption) {
      return useQueries({
        queries: props.map(item => makeQueryOption<TData, TError>(item))
      })
    }

    return useSuspenseQueries({
      queries: props.map(item => makeQueryOption<TData, TError>(item))
    })
  }

  if (typeof props.enabled !== 'undefined') {
    return useQuery<ICommonProps<TData>, TError>(makeQueryOption<TData, TError>(props)) as TGenericReturn<TData, TError>
  }

  return useSuspenseQuery<ICommonProps<TData>, TError>(makeQueryOption<TData, TError>(props)) as TGenericReturn<
    TData,
    TError
  >
}

const makeQueryOption = <TData, TError>(props: PropType<ICommonProps<TData>, TError>) => {
  const {
    keyName: queryKey,
    url,
    params = {},
    pathParams = {},
    baseURL,
    enabled = true,
    initialData,
    headers = {},
    options
  } = props

  const queryFn: QueryFunction<ICommonProps<TData>, QueryKey, number> = async () => {
    const config: AxiosRequestConfig = {}
    config['baseURL'] = baseURL ?? undefined
    config['params'] = params
    config['pathParams'] = pathParams
    config['headers'] = headers

    const { data } = await API.get<ICommonProps<TData>>(url, config)

    return data
  }

  return {
    queryKey,
    queryFn,
    enabled,
    initialData,
    ...options
  }
}

export default useSingleFetcher

import { ICommonProps } from '@/interfaces'
import { DehydratedState, QueryClient, QueryFunction, QueryKey, dehydrate } from '@tanstack/react-query'
import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { cookies } from 'next/headers'
import { getQueryClient } from 'src/providers/reactQueryProvider/helper'
import API from './interceptor'

type TParams = Record<string, any>

type DefaultPropType = {
  keyName: QueryKey
  url: string
  pathParams?: TParams
  headers?: AxiosRequestHeaders
  baseURL?: string
  params?: TParams
}

type TPrefetchInfinite = DefaultPropType & {
  type: 'prefetchInfiniteQuery'
  initialPageParam: number
  page?: number
  pageSize?: number
  preFetchType: 'ssr' | 'other'
}

type TPrefetchQuery = DefaultPropType & {
  type: 'prefetchQuery'
  preFetchType: 'ssr' | 'isr'
}

type PropType = TPrefetchQuery | TPrefetchInfinite

const ssrPreFetcher = async <TData, TError = AxiosError<ICommonProps>>(props: Array<PropType> | PropType) => {
  const queryClient = getQueryClient()

  if (Array.isArray(props)) {
    props.forEach(async item => await preFetchHandler<TData, TError>({ ...item, queryClient }))
  } else {
    await preFetchHandler<TData, TError>({ ...props, queryClient })
  }

  const dehydratedState = serializingProps(dehydrate(queryClient))

  return { dehydratedState }
}

export default ssrPreFetcher

const preFetchHandler = async <TData, TError = AxiosError<ICommonProps>>(
  props: PropType & { queryClient: QueryClient }
) => {
  const { type, keyName: queryKey, url, baseURL, headers, params, pathParams, queryClient, preFetchType } = props

  const queryCookieProps = preFetchType === 'ssr' ? { Cookie: (await cookies()).toString() } : {}

  if (type === 'prefetchQuery') {
    const queryFn: QueryFunction<ICommonProps<TData>, QueryKey, number> = async () => {
      const config: AxiosRequestConfig = {}
      config['baseURL'] = baseURL ?? undefined
      config['params'] = params
      config['pathParams'] = pathParams
      config['withCredentials'] = true
      config['headers'] = {
        ...config.headers,
        ...headers,
        ...queryCookieProps
      }

      const { data } = await API.get<ICommonProps<TData>>(url, config)

      return data
    }

    void queryClient.prefetchQuery<ICommonProps<TData>, TError>({
      queryKey,
      queryFn
    })
  }

  // if (type === 'prefetchInfiniteQuery') {
  //   const { initialPageParam, page, pageSize } = props

  //   const queryFn: QueryFunction<ICommonProps<TData>, QueryKey, number> = async ({ pageParam }) => {
  //     const pagingParams = { pageSize, page: pageParam || page }

  //     const config: AxiosRequestConfig = {}

  //     const _params = { ...params, ...pagingParams }
  //     config['baseURL'] = baseURL
  //     config['params'] = _params
  //     config['pathParams'] = pathParams
  //     config['withCredentials'] = true
  //     config['headers'] = {
  //       ...config.headers,
  //       ...headers,
  //       ...queryCookieProps
  //     }

  //     const { data } = await API.get<ICommonProps<TData>>(url, config)

  //     return data
  //   }

  //   void queryClient.prefetchInfiniteQuery<
  //     ICommonProps<TData>,
  //     TError,
  //     InfiniteData<ICommonProps<TData>, number>,
  //     QueryKey,
  //     number
  //   >({
  //     queryKey,
  //     queryFn,
  //     initialPageParam,
  //     getNextPageParam: ({ totalCount = 10, page = 1, pageSize = 10 }) => {
  //       return totalCount <= page * pageSize ? initialPageParam : page + 1
  //     }
  //   })
  // }
}

const serializingProps = (dehydratedState: DehydratedState) => {
  const { queries, ...mutations } = dehydratedState
  const newQueries = queries.map(query => {
    if (query.state.status === 'error') {
      return {
        state: {
          ...query.state,
          status: 'error',
          // statusCode: query.state.error?.response?.status || 500,
          error: JSON.stringify(query.state.error),
          data: null,
          fetchFailureReason: JSON.stringify(query.state.fetchFailureReason)
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash
      }
    } else {
      return query
    }
  })

  return { queries: newQueries, ...mutations }
}

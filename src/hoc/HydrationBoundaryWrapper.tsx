import { FC, ReactNode } from 'react'
import { HydrationBoundary } from '@tanstack/react-query'
import ssrPreFetcher from '@/utils/ssrPreFetcher'

interface IHydrationBoundaryWrap {
  children: ReactNode
  ssrPreFetcherProps: Parameters<typeof ssrPreFetcher>[0]
}

const HydrationBoundaryWrapper: FC<IHydrationBoundaryWrap> = ({ children, ssrPreFetcherProps }) => {
  const { dehydratedState } = ssrPreFetcher(ssrPreFetcherProps)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}

export default HydrationBoundaryWrapper

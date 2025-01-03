'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from 'src/providers/reactQueryProvider/helper'

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

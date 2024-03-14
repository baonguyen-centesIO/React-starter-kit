import { fetchExample } from '@/api'
import { useQuery } from '@tanstack/react-query'

export const useExampleQuery = ({ keys, params }: { keys: unknown; params?: object }) =>
  useQuery({
    queryKey: ['example', keys],
    queryFn: () => fetchExample(params),
    staleTime: 3 * 60 * 1000
  })

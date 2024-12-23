import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictPropsWithChildren } from '@/types/common';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
  },
});

const QueryProvider = ({ children }: StrictPropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;

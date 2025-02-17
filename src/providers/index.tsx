import { Suspense } from 'react';
import { StrictPropsWithChildren } from '@/types/common';
import QueryProvider from './QueryProvider';

const Providers = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <Suspense>{children}</Suspense>
    </QueryProvider>
  );
};

export default Providers;

import { StrictPropsWithChildren } from '@/types/common';
import QueryProvider from './QueryProvider';

const Providers = ({ children }: StrictPropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;

import { StrictPropsWithChildren } from "@/types/common";
import QueryProvider from "./QueryProvider";
import { Suspense } from "react";

const Providers = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <Suspense>{children}</Suspense>
    </QueryProvider>
  );
};

export default Providers;

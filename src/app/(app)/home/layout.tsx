import { Aside } from "@/features/aside";
import { ReactNode } from "react";
import * as BaseLayout from "@/components/BaseLayout";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <BaseLayout.Root withAside>
      <BaseLayout.Content>{children}</BaseLayout.Content>
      <BaseLayout.Aside>
        <Aside />
      </BaseLayout.Aside>
    </BaseLayout.Root>
  );
}

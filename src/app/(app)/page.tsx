"use client";

import * as UI from "@/components";
import { IconCirclePerson } from "@intentui/icons";
import { api } from "@trpc/index";
export default function Home() {
  const trpcs = api.hello.world.useQuery();

  if (trpcs.isLoading) {
    return <UI.Loader size={"lg"}/>;
  }
  return (
    <div>
      <UI.Select aria-label="Design software" placeholder="Select a software">
        <UI.Select.Trigger>Pilih Negara</UI.Select.Trigger>
        <UI.Select.List items={trpcs.data?.user}>
          {(item) => {
            return (
              <UI.Select.Option textValue={item.id as string} id={item.id}>
                {item.name}
              </UI.Select.Option>
            );
          }}
        </UI.Select.List>
      </UI.Select>
    </div>
  );
}

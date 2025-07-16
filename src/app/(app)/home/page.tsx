import { Metadata } from "next";
import Client from "./Client";

export default function Page() {
  return (
    <>
      <Client />
    </>
  );
}
export const metadata: Metadata = {
  title: "Home",
};

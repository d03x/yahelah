import { Avatar, Button } from "@/components";
import { IconSearch } from "@intentui/icons";

export const NavRight = () => {
  return (
    <>
      <Button intent="plain" size={"md"}>
        <IconSearch width={28} height={28} />
      </Button>
      <Avatar size="md" />
      <Button intent="primary" type="button" size="sm">
        New Post
      </Button>
    </>
  );
};

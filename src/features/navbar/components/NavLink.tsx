import { LinkProps } from "@/components/ui/link";
import Link from "next/link";
import { FunctionComponent, ReactNode, SVGProps } from "react";

export default function NavLink({
  children,
  href,
  icon: Icon,
  ...props
}: {
  children: ReactNode;
  href: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  props?: LinkProps;
}) {
  return (
    <Link
      className="flex group py-2 px-3 active:bg-sidebar-accent rounded-lg items-center justify-start"
      href={href}
      {...props}
    >
      {Icon && <Icon className="w-5 mr-2  h-5 aspect-square" />}
      <span>{children}</span>
    </Link>
  );
}

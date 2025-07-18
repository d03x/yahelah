import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, FunctionComponent, ReactNode, SVGProps } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
} & ComponentProps<typeof Link>;

export default function NavLink({
  children,
  href,
  icon: Icon,
  className,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-auto py-2 px-3 hover:bg-hovered-background active:bg-pressed-background transition-all active:scale-[0.98] hover:text-secondary-foreground items-center  text-md justify-start",
        className && className
      )}
      {...props}
    >
      {Icon && (
        <Icon className="w-5 h-5 mr-2 aspect-square group-hover:scale-110" />
      )}
      <span className="text-text">{children}</span>
    </Link>
  );
}

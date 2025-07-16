"use client";
import { IconVerifiedFill } from "@intentui/icons";
import { FunctionComponent, ReactNode, SVGProps } from "react";
type WithChildren = {
  children: ReactNode;
};
import CountUP from "react-countup";
const Post = (props: WithChildren) => {
  return <Root>{props.children}</Root>;
};
type HeaderProps = {
  author: {
    name: string;
    nickname?: string;
    isVerifiedBadge?: boolean;
  };
};

const Header = (props: HeaderProps) => {
  return (
    <header className="bg-white flex items-center py-2 px-3">
      <div className="flex items-start">
        <div className="h-9 w-9 bg-gray-100 aspec-square rounded-full"></div>
        <div className="ml-2  flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground flex items-center justify-start">
              {props.author.name}{" "}
              {props.author.isVerifiedBadge && (
                <IconVerifiedFill className="ml-1" />
              )}{" "}
            </span>
            <button className="text-xs font-semibold text-primary">Follow</button>
          </div>
          <div className="text-xs flex items-center justify-start gap-1 text-muted-foreground">
            <span className="text-secondary-foreground">@{props.author.nickname}</span>
            &bull; <span>18h</span>
          </div>
        </div>
      </div>
    </header>
  );
};
const Body = (props: WithChildren) => {
  return <div className="px-3 mb-2">{props.children}</div>;
};

const Action = ({
  count,
  icon: Icon,
}: {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  count?: number;
}) => {
  return (
    <button className="cursor-pointer group hover:bg-secondary py-3 h-full flex items-center justify-center flex-1">
      <Icon className="w-6 h-6 group-hover:text-destructive aspect-square" />
      {count && (
        <span className="lg:text-sm text-xs ml-1 text-muted-foreground font-semibold">
          {count}
        </span>
      )}
    </button>
  );
};

const Footer = (props: { children: ReactNode }) => {
  return (
    <div className="flex border-y">
      <div className="flex-1">
        <div className="flex items-center">{props.children}</div>
      </div>
    </div>
  );
};

const Root = (props: WithChildren) => {
  return <div className="overflow-hidden">{props.children}</div>;
};

Post.Header = Header;
Post.Footer = Footer;
Post.Body = Body;
Post.Action = Action;

export { Post };

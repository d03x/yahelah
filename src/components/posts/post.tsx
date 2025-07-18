"use client";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { IconVerifiedFill } from "@intentui/icons";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  FunctionComponent,
  ReactNode,
  SVGProps,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
type WithChildren = {
  children: ReactNode;
};
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
    <header className="flex items-center pb-2 pt-3 px-3">
      <div className="flex items-start">
        <div className="h-9 object-cover w-9 ring-2 ring-secondary bg-gray-50 overflow-hidden aspect-square rounded-full">
          <Image
            className="rounded-full aspect-square object-cover"
            width={36}
            height={36}
            src={faker.image.avatarGitHub()}
            alt="avatar"
          />
        </div>
        <div className="ml-2  flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-content-tint-strong font-semibold text-name  flex items-center justify-start">
              {props.author.name}
              {props.author.isVerifiedBadge && (
                <svg
                  height={15}
                  width={15}
                  className="ml-1 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.0315 12C2.0312 11.8662 2.00492 11.7325 1.95265 11.6065L1.23121 9.85975C1.07879 9.49188 1.00006 9.09699 1 8.69879C0.999936 8.30038 1.07838 7.90585 1.23084 7.53776C1.3833 7.16967 1.6068 6.83523 1.88856 6.55355C2.17025 6.27194 2.50465 6.04858 2.87267 5.89623L4.6166 5.17384C4.86916 5.06941 5.0706 4.86887 5.17575 4.61659L5.8983 2.87214C6.20608 2.12905 6.79645 1.53866 7.53953 1.23085C8.28261 0.923049 9.11753 0.923048 9.86061 1.23085L11.6037 1.9529C11.8567 2.05733 12.141 2.0572 12.3938 1.95231L12.3958 1.95149L14.1404 1.23192C14.8832 0.924529 15.7183 0.924429 16.4611 1.23209C17.204 1.53984 17.7943 2.13006 18.1021 2.87295L18.8073 4.57552C18.8136 4.58896 18.8196 4.60259 18.8253 4.61641C18.9298 4.86924 19.1304 5.07024 19.383 5.1753L21.1279 5.8981C21.871 6.20591 22.4614 6.7963 22.7692 7.53939C23.0769 8.28247 23.0769 9.11739 22.7692 9.86048L22.0468 11.6045C21.9943 11.7311 21.9681 11.8661 21.9681 12.0003C21.9681 12.1345 21.9943 12.2689 22.0468 12.3955L22.7692 14.1395C23.0769 14.8826 23.0769 15.7175 22.7692 16.4606C22.4614 17.2037 21.871 17.7941 21.1279 18.1019L19.383 18.8247C19.1304 18.9298 18.9298 19.1308 18.8253 19.3836C18.8196 19.3974 18.8136 19.411 18.8073 19.4245L18.1021 21.127C17.7943 21.8699 17.204 22.4602 16.4611 22.7679C15.7183 23.0756 14.8832 23.0755 14.1404 22.7681L12.3958 22.0485L12.3938 22.0477C12.141 21.9428 11.8567 21.9427 11.6037 22.0471L9.86061 22.7691C9.11753 23.077 8.28261 23.077 7.53953 22.7691C6.79645 22.4613 6.20608 21.8709 5.8983 21.1279L5.17575 19.3834C5.0706 19.1311 4.86916 18.9306 4.6166 18.8262L2.87267 18.1038C2.50465 17.9514 2.17025 17.7281 1.88856 17.4465C1.6068 17.1648 1.3833 16.8303 1.23084 16.4622C1.07838 16.0941 0.999936 15.6996 1 15.3012C1.00006 14.903 1.07879 14.5081 1.23121 14.1402L1.95265 12.3935C2.00492 12.2675 2.0312 12.1338 2.0315 12ZM16.2071 10.2071C16.5976 9.81658 16.5976 9.18342 16.2071 8.79289C15.8166 8.40237 15.1834 8.40237 14.7929 8.79289L11 12.5858L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L16.2071 10.2071Z"
                    fill="currentColor"
                  />
                </svg>
              )}{" "}
            </span>
            <button className="text-xs font-semibold text-content-blue">
              Follow
            </button>
          </div>
          <div className="text-nickname  flex items-center justify-start gap-1 text-content-fg-tertiary">
            <span>@{props.author.nickname}</span>
            &bull; <span>18h</span>
          </div>
        </div>
      </div>
    </header>
  );
};
const Body = (props: WithChildren) => {
  return <div className="px-3  ml-11">{props.children}</div>;
};

const Action = ({
  count,
  onClick,
  icon: Icon,
}: {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  count?: number;
  onClick?: () => void;
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="hover:bg-hovered-background active:bg-pressed-background active:scale-95 select-none flex items-center cursor-pointer p-2 rounded-full"
      >
        <Icon className="w-5 h-5 group-hover:text-content-red aspect-square" />
        {count && (
          <span className="group-hover:text-content-red text-xs ml-1 text-muted-foreground">
            {count}
          </span>
        )}
      </div>
    </>
  );
};

const Footer = (props: { children: ReactNode }) => {
  return (
    <div className="flex  py-2 pr-2 ml-11">
      <div className="flex-1">
        <div className="flex items-center">{props.children}</div>
      </div>
    </div>
  );
};

const Root = (props: WithChildren) => {
  return (
    <div
      className={cn(
        "overflow-hidden hover:bg-hovered-background select-none cursor-pointer transition-all duration-75 border-content-panel-border border-b   bg-content-panel"
      )}
    >
      {props.children}
    </div>
  );
};



Post.Header = Header;
Post.Footer = Footer;
Post.Body = Body;
Post.Action = Action;
export { Post };

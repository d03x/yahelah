"use client";
import * as Nav from "@components/navbar";
import {  IconListBullets } from "@intentui/icons";
import CreatePost from "@/features/create-post/components/CreatePost";
import { Posts } from "@/features/posts";
export default function Client() {
  return (
    <>
      <Nav.Root>
        <Nav.Inner>
          <div className="px-3">Home</div>
        </Nav.Inner>
        <Nav.Outer>
          <IconListBullets className="h-5 w-5" />
        </Nav.Outer>
      </Nav.Root>
      <div className="">
        <CreatePost />
        <Posts />
      </div>
    </>
  );
}

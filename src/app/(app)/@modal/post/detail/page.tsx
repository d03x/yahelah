"use client";
import { ComposeModal } from "@/features/create-post";
import React from "react";

export default function PostDetail() {
  return (
    <ComposeModal.Root>
      <ComposeModal.Header>DA</ComposeModal.Header>
      <ComposeModal.Body>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quis
        eaque veritatis. Odit reiciendis quia, officia maxime dignissimos nemo
        ratione, eum rerum rem reprehenderit omnis adipisci numquam perferendis
        mollitia est.
      </ComposeModal.Body>
      <ComposeModal.Footer>DAN</ComposeModal.Footer>
    </ComposeModal.Root>
  );
}

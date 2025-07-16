"use client";
import { ComposeModal } from "@/features/create-post";
import React from "react";

export default function CreateTextPostModal() {
  return (
    <ComposeModal.Root>
      <ComposeModal.Header />
      <ComposeModal.Body>Create Text Post</ComposeModal.Body>
      <ComposeModal.Footer />
    </ComposeModal.Root>
  );
}

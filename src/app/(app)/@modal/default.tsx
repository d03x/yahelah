"use client";
import React from "react";
import { createPortal } from "react-dom";

export default function CreateTextPostModal() {
  return createPortal(" ", document.body);
}

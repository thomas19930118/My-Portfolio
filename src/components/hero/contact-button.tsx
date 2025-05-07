"use client";

import { type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "../contact/contact-form";

export default function ContactButton({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-center">Contact Me</DialogTitle>
          <DialogDescription className="text-center">
            Let&apos;s connect and discuss your project
          </DialogDescription>
        </DialogHeader>

        <div className="content mx-auto grid grid-cols-1 gap-y-4">
          <div className="mb-4">
            <ContactForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { type ReactNode } from "react";
import { SiGithub, SiLinkedin, SiUpwork, SiWhatsapp } from "react-icons/si";
import { MailIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { EMAIL, GITHUB_URL, LINKED_IN_URL, UPWORK_URL, WHATSAPP_URL } from "@/data/personal";
import SimpleTooltip from "../ui/simple-tooltip";
import { motion } from "framer-motion";

const iconContactList = {
  email: <MailIcon className="h-6 w-6" />,
  whatsapp: <SiWhatsapp className="h-6 w-6 text-green-600" />,
  linkedin: <SiLinkedin className="h-7 w-7 text-blue-700" />,
  github: <SiGithub className="h-6 w-6" />,
  upwork: <SiUpwork className="h-6 w-6 text-green-500" />,
};

const contactItems = [
  {
    type: "email",
    link: `mailto:${EMAIL}`,
    value: EMAIL
  },
  {
    type: "github",
    link: GITHUB_URL,
    value: "GitHub Profile"
  },
  {
    type: "linkedin",
    link: LINKED_IN_URL,
    value: "LinkedIn Profile"
  },
  {
    type: "upwork",
    link: UPWORK_URL,
    value: "Upwork Profile"
  },
  {
    type: "whatsapp",
    link: WHATSAPP_URL,
    value: "WhatsApp Chat"
  }
];

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
          {contactItems.map((item, index) => (
            <SimpleTooltip key={`contact-${index}`} title={item.type}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-lg bg-background p-4 text-foreground shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-accent"
                >
                  <div className="flex w-10 items-center justify-center">
                    {iconContactList[item.type as keyof typeof iconContactList]}
                  </div>
                  <p className="text-base">{item.value}</p>
                </a>
              </motion.div>
            </SimpleTooltip>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { Menu } from "@/lib/shopify/types";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import Search from "./search";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((s) => !s);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      {/* SINGLE TOGGLE BUTTON - fixed & high z so it remains interactable above everything */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        className="fixed top-4 left-4 z-[9999] flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 bg-white text-black transition-colors md:hidden dark:border-neutral-700 dark:bg-black dark:text-white"
      >
        {isOpen ? <XMarkIcon className="h-5" /> : <Bars3Icon className="h-5" />}
      </button>

      <Transition show={isOpen} as={Fragment}>
        {/* Dialog is full-screen; z lower than the toggle button so the toggle remains visible and clickable */}
        <Dialog onClose={closeMobileMenu} className="fixed inset-0 z-50">
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-[.5px]"
              aria-hidden="true"
            />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition-transform ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="fixed inset-0 pt-16 left-0 right-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
              <div className="p-4">
                {/* optional: you can keep this internal close button if you want an additional visible target inside the panel;
                    removed here to honor the "single-button" requirement. */}
                <div className="mb-4 w-full">
                  <Search />
                </div>

                {menu.length > 0 ? (
                  <ul className="flex w-full flex-col">
                    {menu.map((item: Menu) => (
                      <li
                        className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                        key={item.title}
                      >
                        <Link
                          href={item.path}
                          prefetch={true}
                          onClick={closeMobileMenu}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

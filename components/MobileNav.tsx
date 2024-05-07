import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
            <Image
            src="/icons/hamburger.svg"
            alt="open"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
            />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1" >
         
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

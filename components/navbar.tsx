"use client";
import { Button } from "@nextui-org/button";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { SendIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { PAGE_ANCHORS } from "@/definitions/costants";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [links] = useState([
    { label: "Projects", href: "#" },
    { label: "Work Experience", href: "#" },
    { label: "Education", href: "#" },
  ]);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NextUINavbar
      shouldHideOnScroll={false}
      maxWidth="2xl"
      position="sticky"
      className={`transition-opacity duration-100	${
        showNav ? "lg:opacity-100" : "lg:opacity-0"
      }`}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li">
          <NextLink className="flex justify-start items-center" href="#">
            <p className="font-semibold text-2xl text-inherit">
              Leonardo Borsi
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <ul className="hidden lg:flex gap-10">
          {PAGE_ANCHORS.map((link, i) => (
            <NavbarItem key={i}>
              <NextLink
                className="text-xl font-light hover:text-primary-600"
                href={link.href}
              >
                {link.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-2" justify="end">
        <NavbarItem className="mr-2">
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem>
          <Button
            isExternal
            as={Link}
            className="text-sm font-medium border-default-700"
            href="#"
            startContent={<DownloadIcon />}
            variant="bordered"
          >
            CV
          </Button>
        </NavbarItem> */}
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            color="primary"
            className="text-sm font-medium bg-primary-600"
            href="#contacts"
            startContent={<SendIcon />}
            variant="solid"
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 pt-20 flex flex-col items-center gap-10">
          {PAGE_ANCHORS.map((link, i) => (
            <NavbarMenuItem key={i}>
              <NextLink
                className="text-2xl font-light hover:text-primary-600"
                href={link.href}
              >
                {link.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

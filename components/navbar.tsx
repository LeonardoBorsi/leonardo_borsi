'use client'
import { SendIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/theme-switch'
import { PAGE_ANCHORS } from '@/definitions/costants'
import { Button } from '@nextui-org/button'
import { NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar as NextUINavbar } from '@nextui-org/navbar'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NextUINavbar maxWidth='2xl' isBordered className={`top-0 transition-opacity duration-100	${showNav ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
      <NavbarContent justify='start'>
        <NavbarBrand as='li'>
          <Link className='flex justify-start items-center' href='#'>
            <p className='font-semibold text-2xl text-inherit'>Leonardo Borsi</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='center'>
        <ul className='hidden lg:flex gap-10'>
          {PAGE_ANCHORS.map((link, i) => (
            <NavbarItem key={i}>
              <Link className='text-xl font-light hover:text-primary' href={link.href}>
                {link.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className='hidden lg:flex gap-2' justify='end'>
        <NavbarItem className='mr-2'>
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
        <NavbarItem className='hidden md:flex'>
          <Button as={Link} color='primary' className='text-sm font-medium bg-primary' href='#contacts' startContent={<SendIcon />} variant='solid'>
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='lg:hidden' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 pt-20 flex flex-col items-center gap-10'>
          {PAGE_ANCHORS.map((link, i) => (
            <NavbarMenuItem key={i}>
              <Link className='text-2xl font-light hover:text-primary' href={link.href}>
                {link.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}

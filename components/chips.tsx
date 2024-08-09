'use client'
import { Image } from '@nextui-org/image'
import { Chip } from '@nextui-org/react'
import React from 'react'

export function SkillChip(props: { label: string; image: React.ReactNode; white?: boolean }) {
  return (
    <Chip
      startContent={props.image}
      variant='flat'
      className={`bg-white border-1.5 text-black ${props.white ? 'border-white' : 'border-default-700 dark:border-white'}`}
    >
      {props.label}
    </Chip>
  )
}

export function AlbumentationsChip(props: { white?: boolean }) {
  const label = 'Albumentations'
  const image = <Image src='/images/albumentations.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function AlexaChip(props: { white?: boolean }) {
  const label = 'Alexa'
  const image = <Image src='/images/alexa.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function BalsamiqChip(props: { white?: boolean }) {
  const label = 'Balsamiq'
  const image = <Image src='/images/balsamiq.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function BootstrapChip(props: { white?: boolean }) {
  const label = 'Bootstrap'
  const image = <Image src='/images/bootstrap.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function CChip(props: { white?: boolean }) {
  const label = 'C'
  const image = <Image src='/images/c.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function CPlusPlusChip(props: { white?: boolean }) {
  const label = 'C++'
  const image = <Image src='/images/c++.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function CSSChip(props: { white?: boolean }) {
  const label = 'CSS'
  const image = <Image src='/images/css.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function DjangoChip(props: { white?: boolean }) {
  const label = 'Django'
  const image = <Image src='/images/django.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function ElectronChip(props: { white?: boolean }) {
  const label = 'Electron'
  const image = <Image src='/images/electron.png' width={20} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function GraphQLChip(props: { white?: boolean }) {
  const label = 'GraphQL'
  const image = <Image src='/images/graphql.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function HibernateChip(props: { white?: boolean }) {
  const label = 'Hibernate'
  const image = <Image src='/images/hibernate.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function HTMLChip(props: { white?: boolean }) {
  const label = 'HTML'
  const image = <Image src='/images/html.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function JavaChip(props: { white?: boolean }) {
  const label = 'Java'
  const image = <Image src='/images/java.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function JavaScriptChip(props: { white?: boolean }) {
  const label = 'JavaScript'
  const image = <Image src='/images/javascript-centered.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function JQueryChip(props: { white?: boolean }) {
  const label = 'jQuery'
  const image = <Image src='/images/jquery.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function LitChip(props: { white?: boolean }) {
  const label = 'Lit Element'
  const image = <Image src='/images/lit-logo.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function MaterialUIChip(props: { white?: boolean }) {
  const label = 'Material UI'
  const image = <Image src='/images/material-ui.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function MySQLChip(props: { white?: boolean }) {
  const label = 'MySQL'
  const image = <Image src='/images/mysql.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function NextChip(props: { white?: boolean }) {
  const label = 'Next.js'
  const image = <Image src='/images/next-js.svg' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function PHPChip(props: { white?: boolean }) {
  const label = 'PHP'
  const image = <Image src='/images/php.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function PostgresqlChip(props: { white?: boolean }) {
  const label = 'PostgreSQL'
  const image = <Image src='/images/postgresql.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function PremiereChip(props: { white?: boolean }) {
  const label = 'Premiere'
  const image = <Image src='/images/premiere.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function PrismaChip(props: { white?: boolean }) {
  const label = 'Prisma'
  const image = <Image src='/images/prisma.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function PythonChip(props: { white?: boolean }) {
  const label = 'Python'
  const image = <Image src='/images/python.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}
export function PyTorchChip(props: { white?: boolean }) {
  const label = 'PyTorch'
  const image = <Image src='/images/pytorch.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function RaspberryChip(props: { white?: boolean }) {
  const label = 'Raspberry'
  const image = <Image src='/images/raspberry.png' width={20} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function ReactChip(props: { white?: boolean }) {
  const label = 'React'
  const image = <Image src='/images/react.png' width={20} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function ReactNativeChip(props: { white?: boolean }) {
  const label = 'React Native'
  const image = <Image src='/images/react.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function ScriptChip(props: { white?: boolean }) {
  const label = 'Script'
  const image = <Image src='/images/script.jpg' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function TailwindChip(props: { white?: boolean }) {
  const label = 'Tailwind'
  const image = <Image src='/images/tailwind.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function TypeScriptChip(props: { white?: boolean }) {
  const label = 'TypeScript'
  const image = <Image src='/images/typescript-centered.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

export function YOLOChip(props: { white?: boolean }) {
  const label = 'YOLO'
  const image = <Image src='/images/yolo.png' width={18} />

  return <SkillChip label={label} image={image} white={props.white} />
}

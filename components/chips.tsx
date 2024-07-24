"use client";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/react";
import React from "react";

export function SkillChip(props: {
  label: string;
  image: React.ReactNode;
  white?: boolean;
}) {
  return (
    <Chip
      startContent={props.image}
      variant="flat"
      className={`bg-white border-1.5 text-black ${
        props.white ? "border-white" : "border-default-700 dark:border-white"
      }`}
    >
      {props.label}
    </Chip>
  );

  /* switch (props.color) {
    case "white":
      return (
        <Chip
          startContent={props.image}
          variant="flat"
          className="bg-white border-white border-1.5 text-black"
        >
          {props.label}
        </Chip>
      );
    case "bordered":
      return (
        <Chip
          startContent={props.image}
          variant="flat"
          className="bg-white border-black border-1.5 text-black"
        >
          {props.label}
        </Chip>
      );
    case "theme":
      return (
        <Chip
          startContent={props.image}
          variant="flat"
          className="border-default-700 border-1.5"
        >
          {props.label}
        </Chip>
      );
  } */
}

export function BootstrapChip(props: { white?: boolean }) {
  const label = "Bootstrap";
  const image = <Image src="/images/bootstrap.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function GraphQLChip(props: { white?: boolean }) {
  const label = "GraphQL";
  const image = <Image src="/images/graphql.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function HibernateChip(props: { white?: boolean }) {
  const label = "Hibernate";
  const image = <Image src="/images/hibernate.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function JavaChip(props: { white?: boolean }) {
  const label = "Java";
  const image = <Image src="/images/java.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function JQueryChip(props: { white?: boolean }) {
  const label = "jQuery";
  const image = <Image src="/images/jquery.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function LitChip(props: { white?: boolean }) {
  const label = "Lit Element";
  const image = <Image src="/images/lit-logo.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function MaterialUIChip(props: { white?: boolean }) {
  const label = "Material UI";
  const image = <Image src="/images/material-ui.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function MySQLChip(props: { white?: boolean }) {
  const label = "MySQL";
  const image = <Image src="/images/mysql.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function NextChip(props: { white?: boolean }) {
  const label = "Next.js";
  const image = <Image src="/images/next-js.svg" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function PHPChip(props: { white?: boolean }) {
  const label = "PHP";
  const image = <Image src="/images/php.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function PrismaChip(props: { white?: boolean }) {
  const label = "Prisma";
  const image = <Image src="/images/prisma.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function ReactChip(props: { white?: boolean }) {
  const label = "React";
  const image = <Image src="/images/react.png" width={20} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function ReactNativeChip(props: { white?: boolean }) {
  const label = "React Native";
  const image = <Image src="/images/react.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function ScriptChip(props: { white?: boolean }) {
  const label = "Script";
  const image = <Image src="/images/script.jpg" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function TailwindChip(props: { white?: boolean }) {
  const label = "Tailwind";
  const image = <Image src="/images/tailwind.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

export function TypescriptChip(props: { white?: boolean }) {
  const label = "Typescript";
  const image = <Image src="/images/typescript.png" width={18} />;

  return <SkillChip label={label} image={image} white={props.white} />;
}

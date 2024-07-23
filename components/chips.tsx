"use client";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/react";
import React from "react";

export function SkillChip(props: {
  label: string;
  image: React.ReactNode;
  color: "white" | "bordered" | "theme";
}) {
  switch (props.color) {
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
  }
}

export function BootstrapChip(props: {
  color: "white" | "bordered" | "theme";
}) {
  const label = "Bootstrap";
  const image = <Image src="/images/bootstrap.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function GraphQLChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "GraphQL";
  const image = <Image src="/images/graphql.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function HibernateChip(props: {
  color: "white" | "bordered" | "theme";
}) {
  const label = "Hibernate";
  const image = <Image src="/images/hibernate.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function JavaChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Java";
  const image = <Image src="/images/java.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function JQueryChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "jQuery";
  const image = <Image src="/images/jquery.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function LitChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Lit Element";
  const image = <Image src="/images/lit-logo.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function MaterialUIChip(props: {
  color: "white" | "bordered" | "theme";
}) {
  const label = "Material UI";
  const image = <Image src="/images/material-ui.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function MySQLChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "MySQL";
  const image = <Image src="/images/mysql.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function NextChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Next.js";
  const image = <Image src="/images/next-js.svg" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function PHPChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "PHP";
  const image = <Image src="/images/php.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function PrismaChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Prisma";
  const image = <Image src="/images/prisma.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function ReactChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "React";
  const image = <Image src="/images/react.png" width={20} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function ReactNativeChip(props: {
  color: "white" | "bordered" | "theme";
}) {
  const label = "React Native";
  const image = <Image src="/images/react.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function ScriptChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Script";
  const image = <Image src="/images/script.jpg" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function TailwindChip(props: { color: "white" | "bordered" | "theme" }) {
  const label = "Tailwind";
  const image = <Image src="/images/tailwind.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

export function TypescriptChip(props: {
  color: "white" | "bordered" | "theme";
}) {
  const label = "Typescript";
  const image = <Image src="/images/typescript.png" width={18} />;

  return <SkillChip label={label} image={image} color={props.color} />;
}

import { JavaChip } from "@/components/chips";
import Course from "@/components/course";

export default function Lab() {
  return (
    <Course
      course="Laboratorio di Programmazione"
      project="Dragon Slayer"
      description="Web application developed entirely with Django which simulates a management system used to assign domains to IP addresses. Project developed for the multimedia design and production exam and distributed with Ren"
      skills={<JavaChip color="bordered" />}
    />
  );
}

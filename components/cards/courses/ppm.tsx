import { JavaChip } from "@/components/chips";
import Course from "@/components/course";

export default function PPM() {
  return (
    <Course
      course="Progettazione e Produzione Multimediale"
      project="DNS Management System"
      description="Web application developed entirely with Django which simulates a management system used to assign domains to IP addresses. Project developed for the multimedia design and production exam and distributed with Ren"
      skills={<JavaChip />}
    />
  );
}

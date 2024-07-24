import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import CardContent from "../card-content";
import { HibernateChip, JavaChip } from "../chips";
import { ExternalLinkIcon } from "../icons";

export default function MultidataCard() {
  return (
    <Card className="bg-multidata text-white">
      <CardContent
        title="Multidata"
        subtitle="Backend Developer Intern"
        period="2020 - 2021"
        imageSrc="/images/multidata-white.png"
        imageSize={60}
        description="Development of APIs for a web applications ecosystem aimed at  companies textile supply chain via Hibernate."
        externalLink={
          <Button
            className="text-base font-medium border-white text-white"
            href="https://keyless.io"
            startContent={<ExternalLinkIcon />}
            variant="bordered"
          >
            Multidata Website
          </Button>
        }
        skills={
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <HibernateChip white />
            <JavaChip white />
          </div>
        }
      />
    </Card>
  );
}

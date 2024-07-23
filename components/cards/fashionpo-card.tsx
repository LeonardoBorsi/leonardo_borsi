import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import CardContent from "../card-content";
import { BootstrapChip, JQueryChip, MySQLChip, PHPChip } from "../chips";
import { ExternalLinkIcon } from "../icons";

export default function FashionpoCard() {
  return (
    <Card className="bg-fashionpo text-white">
      <CardContent
        title="FashionPO"
        subtitle="Fullstack Developer"
        period="2021 - 2022"
        imageSrc="/images/fashionpo-logo-white.png"
        imageSize={60}
        description="Development of B2B Ecommerce and related CMS using PHP and HTML/jQuery. Restyling of the UX/UI of both desktop and mobile versions.  Design and development of a labeling system via Zebra printers used to optimize warehouse operations."
        externalLink={
          <Button
            className="text-base font-medium border-white text-white"
            href="https://keyless.io"
            startContent={<ExternalLinkIcon />}
            variant="bordered"
          >
            FashionPO Website
          </Button>
        }
        skills={
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <PHPChip color="white" />
            <JQueryChip color="white" />
            <MySQLChip color="white" />
            <BootstrapChip color="white" />
          </div>
        }
      />
    </Card>
  );
}

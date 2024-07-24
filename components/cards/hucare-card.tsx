import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import CardContent from "../card-content";
import {
  GraphQLChip,
  MaterialUIChip,
  ReactChip,
  ReactNativeChip,
  TypescriptChip,
} from "../chips";
import { ExternalLinkIcon } from "../icons";

export default function HucareCard() {
  return (
    <Card className="bg-hucare text-white">
      <CardContent
        title="HuCare"
        subtitle="Frontend Developer"
        period="2022 - 2023"
        imageSrc="/images/hucare-logo-nobg.png"
        imageSize={60}
        description="Development of an ecosystem of web applications and native apps for  data collection and management of doctor-patient relationships through  React and React Native frameworks, also taking care of the UX/UI of all applications"
        externalLink={
          <Button
            className="text-base font-medium border-white text-white"
            href="https://keyless.io"
            startContent={<ExternalLinkIcon />}
            variant="bordered"
          >
            HuCare Website
          </Button>
        }
        skills={
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <ReactChip white />
            <ReactNativeChip white />
            <TypescriptChip white />
            <GraphQLChip white />
            <MaterialUIChip white />
          </div>
        }
      />
    </Card>
  );
}

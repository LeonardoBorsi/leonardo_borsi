import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import CardContent from "../card-content";
import { ScriptChip } from "../chips";
import { ExternalLinkIcon } from "../icons";

export default function SwarmCard() {
  return (
    <Card className="bg-swarm text-white">
      <CardContent
        title="The SwARM"
        subtitle="Summer Internship"
        period="2018"
        imageSrc="/images/the-swarm-logo-white.png"
        imageSize={60}
        description="Assembly of servers intended for Cloud Storage and script development  batches intended for testing."
        externalLink={
          <Button
            className="text-base font-medium border-white text-white"
            href="https://keyless.io"
            startContent={<ExternalLinkIcon />}
            variant="bordered"
          >
            The SwARM Website
          </Button>
        }
        skills={
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <ScriptChip color="white" />
          </div>
        }
      />
    </Card>
  );
}

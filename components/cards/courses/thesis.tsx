import { JavaChip } from "@/components/chips";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

export default function Thesis() {
  return (
    <Card
      className="border-default-700 border-2 shadow-none bg-dark-950/50 p-2 text-white"
      style={{
        background: "url(/images/thesis.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0px -120px",
      }}
    >
      <CardHeader className="flex flex-col items-start">
        <span className="font-thin text-lg md:text-xl">Thesis</span>
        <span className="font-medium text-lg md:text-xl">
          Object Detection in thermal images using a combination of augmentation
          techniques
        </span>
      </CardHeader>
      <CardBody className="flex flex-col items-start">
        {/* <p className="text-base md:text-lg font-light">{props.description}</p> */}
      </CardBody>
      <CardFooter className="flex flex-col flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-4">
        <Button
          isIconOnly
          className="text-sm font-medium border-default-700"
          variant="bordered"
        >
          <GithubIcon size={28} />
        </Button>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <JavaChip color="bordered" />
        </div>
      </CardFooter>
    </Card>
  );
}

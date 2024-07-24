import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

interface CourseProps {
  course: string;
  project: string;
  description: string;
  skills?: React.ReactNode;
}

export default function Course(props: CourseProps) {
  return (
    <Card className="border-default-700 border-2 shadow-none bg-trasparent p-2">
      <CardHeader className="flex flex-col items-start">
        <span className="font-thin text-lg md:text-xl">{props.course}</span>
        <span className="font-medium text-lg md:text-xl">{props.project}</span>
      </CardHeader>
      <CardBody className="flex flex-col items-start">
        <p className="text-base md:text-lg font-light">{props.description}</p>
      </CardBody>
      <CardFooter className="flex flex-col flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-4">
        <Button
          isIconOnly
          className="text-sm font-medium border-default-700"
          variant="bordered"
        >
          <GithubIcon size={28} />
        </Button>
        {props.skills && (
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {props.skills}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

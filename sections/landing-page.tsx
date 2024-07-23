import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
} from "@/components/icons";
import { PAGE_ANCHORS } from "@/definitions/costants";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section>
      <div className="h-screen pb-32">
        <div className="h-full flex flex-col justify-between py-20">
          <div className="text-center lg:text-left">
            <h1 className="hidden lg:block text-5xl lg:text-7xl font-medium">
              Leonardo Borsi
            </h1>
            <h2 className="text-4xl lg:text-5xl font-thin mt-3">
              Software Engineer
            </h2>
            <h3 className="text-3xl lg:text-4xl font-thin text-primary-600 mt-3">
              UX/UI Designer
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <div className="flex gap-5">
                <Button
                  isIconOnly
                  className="text-sm font-medium border-default-700 w-1/2"
                  variant="bordered"
                  size="lg"
                >
                  <GithubIcon size={28} />
                </Button>
                <Button
                  isIconOnly
                  className="text-sm font-medium border-default-700 w-1/2"
                  variant="bordered"
                  size="lg"
                >
                  <LinkedinIcon size={28} />
                </Button>
              </div>

              <Button
                className="text-base font-medium border-default-700"
                href="#"
                startContent={<DownloadIcon />}
                variant="bordered"
                size="lg"
              >
                Download CV
              </Button>
              <Button
                as={Link}
                color="primary"
                className="text-base font-medium bg-primary-600"
                href="#contacts"
                startContent={<SendIcon />}
                variant="solid"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5">
            {PAGE_ANCHORS.map((link, i) => (
              <Link
                key={i}
                className="text-[32px] font-light hover:text-primary-600 w-fit"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

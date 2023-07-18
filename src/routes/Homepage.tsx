import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex justify-center">
      <PageHeader className="pb-8 items-center mt-150 h-150">
        <PageHeaderHeading>Jonathan Bean</PageHeaderHeading>
        <PageHeaderDescription className="max-w-lg">
          A versatile software developer driven by curiosity, creativity, and a
          firm belief in using the transformative power of technology to tackle
          real-life challenges. <br /> <br />
          With a keen eye for problem-solving and a love for logical puzzles, I
          find joy in crafting clean and elegant code. <br /> <br />
          Proficient in JavaScript, TypeScript, React, SQL, and more, I thrive
          in collaborative environments, delivering exceptional teamwork and
          communication skills. Equally comfortable working independently, I am
          a self-motivated quick learner who embraces new technologies and
          concepts with enthusiasm.
        </PageHeaderDescription>
        <div className="flex w-full space-x-4 pb-8 pt-4 md:pb-10">
          <Link to="/projects" className={cn(buttonVariants())}>
            View all projects
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            to={"https://github.com/DrawnInward"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}

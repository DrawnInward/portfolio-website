import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function () {
  function CardContainer({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div
        className={cn(
          "flex items-center justify-center [&>div]:w-full",
          className
        )}
        {...props}
      />
    );
  }

  return (
    <>
      <CardContainer>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Twodemi</CardTitle>
            <CardDescription>
              A collaborative project to create an interactive e-learning
              platform that connects teachers and students.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src="https://picsum.photos/400/300" alt="" />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Twodemi</CardTitle>
            <CardDescription>
              A collaborative project to create an interactive e-learning
              platform that connects teachers and students.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src="https://picsum.photos/400/300" alt="" />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </CardContainer>
    </>
  );
}

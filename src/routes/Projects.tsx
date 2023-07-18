import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export default function Projects() {
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
    <div className="flex flex-col items-center justify-center space-y-4">
      <CardContainer className="w-full sm:w-96 md:w-128 lg:w-160 xl:w-192">
        <Card>
          <CardHeader>
            <CardTitle>Twodemi</CardTitle>
            <CardDescription>
              An interactive e-learning platform that connects teachers and
              students.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={`https://picsum.photos/id/${
                200 + Math.floor(Math.random() * 100)
              }/400/300`}
              alt=""
            />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContent>
                  JavaScript, MongoDB, Mongoose, Express, Bcrypt, React,
                  Tailwind
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Developed by</AccordionTrigger>
                <AccordionContent>
                  Jonathan Bean, Ben Smith, Saksia Wells, Karlie Guan and Martin
                  Abbott.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <p>links?</p>
          </CardFooter>
        </Card>
      </CardContainer>
      <CardContainer className="w-full sm:w-96 md:w-128 lg:w-160 xl:w-192">
        <Card>
          <CardHeader>
            <CardTitle>Play Rate Share</CardTitle>
            <CardDescription>
              An platform where people can review, rate, and discuss board
              games.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={`https://picsum.photos/id/${
                200 + Math.floor(Math.random() * 100)
              }/400/300`}
              alt=""
            />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContent>
                  JavaScript, PSQL, Express, Bcrypt, React, CSS
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Developed by</AccordionTrigger>
                <AccordionContent>Jonathan Bean</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <p>links</p>
          </CardFooter>
        </Card>
      </CardContainer>
      <CardContainer className="w-full sm:w-96 md:w-128 lg:w-160 xl:w-192">
        <Card>
          <CardHeader>
            <CardTitle>Calculator</CardTitle>
            <CardDescription>
              A left to right calculator with optional PEDMAS and Scientific
              Mode
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/projects/calculator">
              <img
                src="https://i.imgur.com/E170VNY.png"
                alt="a calculator application"
                style={{ width: "400px", height: "300px" }}
              />
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContent>JavaScript, React, CSS</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Developed by</AccordionTrigger>
                <AccordionContent>Jonathan Bean</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <p>links</p>
          </CardFooter>
        </Card>
      </CardContainer>
      <CardContainer className="w-full sm:w-96 md:w-128 lg:w-160 xl:w-192">
        <Card>
          <CardHeader>
            <CardTitle>Noughts And Crosses</CardTitle>
            <CardDescription>
              A noughts and crosses game which keeps score.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={`https://picsum.photos/id/${
                200 + Math.floor(Math.random() * 100)
              }/400/300`}
              alt=""
            />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Tech Stack</AccordionTrigger>
                <AccordionContent>HTML, CSS, JavaScript</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Developed by</AccordionTrigger>
                <AccordionContent>Jonathan Bean</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p>Something</p>
          </CardContent>
          <CardFooter>
            <p>Developed by Jonathan Bean</p>
          </CardFooter>
        </Card>
      </CardContainer>
    </div>
  );
}

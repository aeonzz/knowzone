import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import rrl1 from "../../../public/rrl1.png";
import { EllipsisVertical } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface RrrlCardProps {
  rrl: {
    title: string;
    description: string;
    year: string;
    course: string;
    yearLevel: string;
    category: string;
  };
}

const RrlCard: React.FC<RrrlCardProps> = ({ rrl }) => {
  return (
    <Link href={"/details"} className="relative h-[360px] overflow-hidden">
      <div className="relative h-36">
        <Image src={rrl1} alt="gg" objectFit="cover" fill />
      </div>
      <CardHeader className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
            >
              <EllipsisVertical className=" h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Save</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <CardTitle>{rrl.title}</CardTitle>
        <CardDescription>{rrl.description.slice(0, 120)} ...</CardDescription>
      </CardHeader>
      <div className="absolute bottom-4 right-4 space-x-3">
        <Button variant="secondary" size="sm" className="text-sm">
          View
        </Button>
        <Button size="sm" className="text-xs">
          Download
        </Button>
      </div>
    </Link>
  );
};

export default RrlCard;

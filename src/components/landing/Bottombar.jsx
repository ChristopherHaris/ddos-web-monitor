import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

function Bottombar() {
  return (
    <div className="my-11">
      <Separator />
      <div className="my-11 flex justify-center bg-white">
        <HoverCard>
          <div className="flex">
            <h1 className="flex flex-col justify-center">©</h1>
            <HoverCardTrigger asChild>
              <Button variant="link">DDOROCARE INDONESIA</Button>
            </HoverCardTrigger>
          </div>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/assets/favicon-32x32.png" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@DDOROCARE</h4>
                <p className="text-sm">
                  DDOROCARE: Pemuda NTB, Satu Asa, Hijaukan Wisata, Lestarikan
                  Bumi!
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Since 2019
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}

export default Bottombar;

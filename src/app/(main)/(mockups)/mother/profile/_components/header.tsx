import { Button } from "@/components/ui/button";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { PenLine, UserRound } from "lucide-react";
import Link from "next/link";

export default function HeaderProfile() {
    return (
        <div className="pb-7 mb-4">
            <div className="bg-blue-200/40 relative h-24 grid rounded-sm">
                {/* Profile */}
                <div className="rounded-full bg-background size-fit p-1.5 absolute -bottom-14 left-8">
                    <div className="rounded-full size-20 bg-secondary flex items-center justify-center">
                        <UserRound className="size-7" />
                    </div>
                </div>

                {/* actions */}
                <div className="flex mt-auto ml-auto p-2">
                    <Link href="?isEdit=true">
                        <Button className="h-8 hover:bg-primary hover:text-primary-foreground" variant="ghost">
                            <PenLine />
                            <span>Edit profile</span>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="pl-34 pt-1 leading-4">
                <TypographyLarge className="text-base">Lorem ipsum dolor est</TypographyLarge>
                <TypographySmall className="text-muted-foreground font-normal">Mother</TypographySmall>
            </div>
        </div>
    )
}
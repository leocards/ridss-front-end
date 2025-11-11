import { TypographySmall } from "@/components/ui/typography";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";

export default function Page() {
    return (
        <div className="">
            <div className="flex justify-end mb-4">
                <Button variant="outline">
                    <MailOpen />
                    <span>Read all</span>
                </Button>
            </div>

            <div className="grid gap-3">
                <TypographySmall className="text-muted-foreground">{format(new Date, "MMMM dd, y")}</TypographySmall>

                <div className="space-y-2">
                    <Card className="p-2 relative shadow-xs">
                        <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full"></span>
                        <CardContent className="px-2 text-[15px]">
                            <div className="line-clamp-2 mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi quas quisquam provident maiores error laudantium ullam repellat quia. Quaerat dolorum iste quisquam magni quae numquam voluptas aliquid commodi harum!
                            </div>
                            <div className="flex justify-between">
                                <TypographySmall className="text-[13px]">{format(new Date(), "HH:mm a")}</TypographySmall>

                                <span className="text-xs hover:underline cursor-pointer">Mark as read</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="p-2 shadow-xs">
                        <CardContent className="px-2 text-[15px]">
                            <div className="line-clamp-2 text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi quas quisquam provident maiores error laudantium ullam repellat quia. Quaerat dolorum iste quisquam magni quae numquam voluptas aliquid commodi harum!
                            </div>
                            <TypographySmall className="text-[13px] text-muted-foreground/80">{format(new Date(), "HH:mm a")}</TypographySmall>
                        </CardContent>
                    </Card>
                    <Card className="p-2 shadow-xs">
                        <CardContent className="px-2 text-[15px]">
                            <div className="line-clamp-2 text-muted-foreground mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi quas quisquam provident maiores error laudantium ullam repellat quia. Quaerat dolorum iste quisquam magni quae numquam voluptas aliquid commodi harum!
                            </div>
                            <TypographySmall className="text-[13px] text-muted-foreground/80">{format(new Date(), "HH:mm a")}</TypographySmall>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="rounded-full shadow-xs dark:shadow-white/25 size-fit mx-auto mt-5">
                <div className="rounded full shadow-inner shadow-zinc-300/80 dark:shadow-white/25 size-2"></div>
            </div>
        </div>
    )
}
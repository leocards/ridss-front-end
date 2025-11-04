import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Send, X } from "lucide-react";

export default function Page() {
    return (
        <div className="grid grid-cols-[20rem_1fr] gap-3 h-full">
            <Card className="p-0 gap-0 shadow-xs rounded-lg h-full grid grid-rows-[auto_1fr]">
                <TypographyLarge className="p-3">Messages</TypographyLarge>
                <div className="overflow-y-auto py-1">
                    <div className="p-3 hover:bg-secondary cursor-pointer flex">
                        <div className="w-full">
                            <TypographySmall className="font-semibold">Brgy. New Visayas</TypographySmall>
                            <div className="leading-3 w-full">
                                <TypographySmall className="text-[13px]">Lorem ipsum dolor sit amet consectetur</TypographySmall>
                            </div>
                        </div>
                        <div className="flex flex-col pl-2 ml-auto">
                            <div className="size-2.5 bg-primary rounded-full shrink-0 mt-auto mx-auto"></div>
                            <div className="text-[13px] leading-3 mt-auto">now</div>
                        </div>
                    </div>
                    <div className="p-3 hover:bg-secondary cursor-pointer flex">
                        <div className="">
                            <TypographySmall className="font-semibold">Brgy. San Francisco</TypographySmall>
                            <div className="leading-3 w-full">
                                <TypographySmall className="text-muted-foreground text-[13px] font-normal">Lorem ipsum dolor sit amet consectetur</TypographySmall>
                            </div>
                        </div>
                        <div className="text-[13px] leading-3 flex ml-auto">
                            <span className="mt-auto">5w</span>
                        </div>
                    </div>
                    <div className="p-3 hover:bg-secondary cursor-pointer flex">
                        <div className="">
                            <TypographySmall className="font-semibold">Brgy. Gredu</TypographySmall>
                            <div className="leading-3 w-full">
                                <TypographySmall className="text-muted-foreground text-[13px] font-normal">Lorem ipsum dolor sit amet consectetur</TypographySmall>
                            </div>
                        </div>
                        <div className="text-[13px] leading-3 flex ml-auto">
                            <span className="mt-auto">6w</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="p-0 gap-0 shadow-xs rounded-lg h-full grid grid-rows-[auto_1fr_auto]">
                <div className="h-12 flex items-center justify-between px-3 border-b border-border">
                    <TypographySmall className="font-semibold">Brgy. San Francisco</TypographySmall>

                    <Button className="size-8" size="icon" variant={'ghost'}>
                        <X />
                    </Button>
                </div>
                <div className="p-3 space-y-1">
                    <div className="rounded-xl bg-primary text-primary-foreground p-3 max-w-2xl ml-auto">
                        <div className="text-[13px] mb-2">Nov 1, 2025 9:45 AM</div>
                        <div className="text-[15px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod expedita ipsa, atque placeat, id aut error quasi illum delectus adipisci sint commodi ea porro pariatur quibusdam architecto sit vitae?
                        </div> 
                    </div>
                    <div className="rounded-xl bg-primary text-primary-foreground p-3 max-w-2xl ml-auto">
                        <div className="text-[13px] mb-2">Nov 1, 2025 9:45 AM</div>
                        <div className="text-[15px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod expedita ipsa, atque placeat, id aut error quasi illum delectus adipisci sint commodi ea porro pariatur quibusdam architecto sit vitae?
                        </div> 
                    </div>
                </div>
                <div className="max-h-45 overflow-hidden p-3 border-t border-border flex items-end gap-3">
                    <Textarea className="min-h-9 max-h-35 resize-none rounded-sm" placeholder="Send a message..." />
                    <Button className="size-9" size="icon">
                        <Send />
                    </Button>
                </div>
            </Card>            
        </div>
    )
}
import { Card, CardContent } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";

interface Props {
    isCancel?: boolean;
}
export default function CancelImmunizationCard({ isCancel }: Props ) {
    return (
        <Card className="!p-3 shadow-xs">
            <CardContent className="space-y-2 px-1.5">
                <div className="text-sm text-right">
                    <TypographySmall className="text-muted-foreground font-normal text-xs">2d ago</TypographySmall>
                </div>
                <TypographyLarge className="">Scheduled Immunization</TypographyLarge>
                <div className="grid gap-4">
                    <div className="text-[15px] dark:text-zinc-300">
                        <div className="">
                            Your child is scheduled for immunization on{" "}
                            <span className="font-medium">December 11, 2025</span> at{" "}
                            <span className="font-medium">10:30 AM</span>
                        </div>
                        <div className="mt-2.5 text-sm">
                            Child to immunize: <span className="font-medium">Anna Doe</span>
                        </div>
                        <div className="text-sm">
                            Immunization Type: <span className="font-medium">OPV</span>
                        </div>
                        <div className="text-sm">
                            Immunization Dose: <span className="font-medium">2nd</span>
                        </div>
                    </div>

                    {isCancel && (<div className="text-sm">
                        <div className="">Reason:</div>
                        <div className="italic line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut error qui ab quam facere. Sequi, dignissimos ex dolorum consectetur eius ab, quos voluptatibus itaque ipsam officia, recusandae odio ea.</div>
                    </div>)}
                </div>
            </CardContent>
        </Card>
    );
}

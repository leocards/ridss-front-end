import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { TypographySmall } from "@/components/ui/typography";
import { useEffect, useState } from "react";

interface Props {
    isSelectAll: boolean;
    user: {
        id: number;
        parent: string;
        child: string;
    };
}
export default function ParticipantsCard({ user, isSelectAll }: Props) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isSelectAll)
    }, [isSelectAll])

    return (
        <div className="">
            <label htmlFor={"checker" + user.id}>
                <Card className="gap-0 overflow-hidden rounded-md p-0 shadow-xs">
                    <div className="border-border hover:bg-secondary cursor-pointer flex items-center justify-between border-b px-4 py-2.5">
                        <div className="flex flex-col leading-5">
                            <TypographySmall className="text-[15px]">{user.child}</TypographySmall>
                            <TypographySmall className="text-muted-foreground text-[13px] font-normal">
                                Parent: {user.parent}
                            </TypographySmall>
                        </div>
                        <div className="leading-5">
                            <Checkbox
                                className="size-5.5 cursor-pointer"
                                id={"checker" + user.id}
                                checked={checked}
                                onCheckedChange={(check) => setChecked(!!check)}
                            />
                        </div>
                    </div>
                    {checked && (
                        <div className="flex flex-wrap gap-2 p-3">
                            <Label
                                htmlFor={"Penta 1 " + user.id}
                                className="border-border rounded-sm border p-1 shadow-xs"
                            >
                                <Checkbox id={"Penta 1 " + user.id} defaultChecked />
                                <span>Pentavalent 1</span>
                            </Label>
                            <Label
                                htmlFor={"Penta 2 " + user.id}
                                className="border-border rounded-sm border p-1 shadow-xs"
                            >
                                <Checkbox id={"Penta 2 " + user.id} defaultChecked />
                                <span>Pentavalent 2</span>
                            </Label>
                            <Label
                                htmlFor={"Penta 3 " + user.id}
                                className="border-border rounded-sm border p-1 shadow-xs"
                            >
                                <Checkbox id={"Penta 3 " + user.id} defaultChecked />
                                <span>Pentavalent 3</span>
                            </Label>
                            <Label
                                htmlFor={"Hepa B " + user.id}
                                className="border-border rounded-sm border p-1 shadow-xs"
                            >
                                <Checkbox id={"Hepa B " + user.id} defaultChecked />
                                <span>Hepatitis B</span>
                            </Label>
                            <Label
                                htmlFor={"BCG " + user.id}
                                className="border-border rounded-sm border p-1 shadow-xs"
                            >
                                <Checkbox id={"BCG " + user.id} defaultChecked />
                                <span>BCG</span>
                            </Label>
                        </div>
                    )}
                </Card>
            </label>
        </div>
    );
}

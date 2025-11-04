import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TypographyLarge, TypographySmall } from "@/components/ui/typography";
import { Fragment } from "react";

export default function Page() {
    return (
        <div className="">
            <TypographyLarge>Data Verification</TypographyLarge>

            <div className="mt-6">
                <Card className="gap-0 overflow-hidden rounded-md border-none p-0 shadow-xs">
                    <div className="overflow-x-auto rounded-[inherit]">
                        <div className="border-primary bg-primary text-primary-foreground grid h-12 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center rounded-t-[inherit] border">
                            <div className="text-center">
                                <TypographySmall className="px-4 break-words">Activities</TypographySmall>
                            </div>
                            <div className="text-center">
                                <TypographySmall className="px-4 break-words">New Visayas</TypographySmall>
                            </div>
                            <div className="text-center">
                                <TypographySmall className="px-4 break-words">New Malitbog</TypographySmall>
                            </div>
                            <div className="text-center">
                                <TypographySmall className="px-4 break-words">Gredu</TypographySmall>
                            </div>
                            <div className="text-center">
                                <TypographySmall className="px-4 break-words">Caganguhan</TypographySmall>
                            </div>
                            <div className="flex h-full items-center justify-center text-center">
                                <TypographySmall className="px-4 break-words">Total</TypographySmall>
                            </div>
                        </div>
                        <div className="divide-border border-border divide-y rounded-b-[inherit] border border-t-0">
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        1. Immunization status of infants (0-11 months old)
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["BCG", "PENTAVALENT 1", "PENTAVALENT 2", "PENTAVALENT 3"].map((vacc, index) => (
                                <Fragment key={index}>
                                    <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                        <div className="pl-10">
                                            <TypographySmall className="break-words">{vacc}</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">-</TypographySmall>
                                        </div>
                                        <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                            <TypographySmall className="break-words">200</TypographySmall>
                                        </div>
                                    </div>
                                    <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                        <div className="pl-14">
                                            <TypographySmall className="break-words">Male</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">-</TypographySmall>
                                        </div>
                                        <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                            <TypographySmall className="break-words">200</TypographySmall>
                                        </div>
                                    </div>
                                    <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                        <div className="pl-14">
                                            <TypographySmall className="break-words">Female</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">50</TypographySmall>
                                        </div>
                                        <div className="px-4 text-center">
                                            <TypographySmall className="break-words">-</TypographySmall>
                                        </div>
                                        <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                            <TypographySmall className="break-words">200</TypographySmall>
                                        </div>
                                    </div>
                                </Fragment>
                            ))}
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        2. No. of Fully Immunized Child (FIC)
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        3. No. of Completely Immunized Children (CIC) 12 - 23 months
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        4. No. of Livebirths, born in the current year registered in the EPI-TCL this
                                        month
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="pl-10">
                                    <TypographySmall className="break-words">
                                        No. of infants (0 -11 mos old) protected at birth (PAB) from neonatal tetanus
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-14">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        5. No. of infants with Birth Certificate
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        6. No. of infants referred for newborn screening
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        7. No. of Infants underwent for newborn screening within 25 hours to 72 hours
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="pl-10">
                                    <TypographySmall className="break-words">Government</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-14">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="pl-10">
                                    <TypographySmall className="break-words">Private</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-14">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        8. No. of infants exclusively breastfeed up to 6th months
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        9. No. of infants 6-8 months of age who started/received complementary feeding
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        10. No. of infants (2-6 months old) with low-birth weight (LBW) less than 2,500
                                        g
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                <div className="px-4">
                                    <TypographySmall className="break-words">
                                        11. No. of infants with low-birth weight (2,500 g) given iron supplementation
                                        for four (4) months
                                    </TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">50</TypographySmall>
                                </div>
                                <div className="px-4 text-center">
                                    <TypographySmall className="break-words">-</TypographySmall>
                                </div>
                                <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                    <TypographySmall className="break-words">200</TypographySmall>
                                </div>
                            </div>
                            {["Male", "Female"].map((sex, index) => (
                                <div
                                    key={index}
                                    className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10"
                                >
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">{sex}</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                            ))}

                            <Fragment>
                                <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                    <div className="px-4">
                                        <TypographySmall className="break-words">
                                            12. Anemic children seen
                                        </TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">100</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">100</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">100</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">300</TypographySmall>
                                    </div>
                                </div>
                                <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">0 - 11 months old</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                                {["Male", "Female"].map((sex, index) => (
                                    <Fragment key={index}>
                                        <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                            <div className="pl-14">
                                                <TypographySmall className="break-words">{sex}</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">-</TypographySmall>
                                            </div>
                                            <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                                <TypographySmall className="break-words">200</TypographySmall>
                                            </div>
                                        </div>
                                        <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                            <div className="pl-18">
                                                <TypographySmall className="break-words">
                                                    No. given iron suppl'n{" "}
                                                </TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">-</TypographySmall>
                                            </div>
                                            <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                                <TypographySmall className="break-words">200</TypographySmall>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                                <div className="bg-secondary hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                    <div className="pl-10">
                                        <TypographySmall className="break-words">12 - 59 months old</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">50</TypographySmall>
                                    </div>
                                    <div className="px-4 text-center">
                                        <TypographySmall className="break-words">-</TypographySmall>
                                    </div>
                                    <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                        <TypographySmall className="break-words">200</TypographySmall>
                                    </div>
                                </div>
                                {["Male", "Female"].map((sex, index) => (
                                    <Fragment key={index}>
                                        <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                            <div className="pl-14">
                                                <TypographySmall className="break-words">{sex}</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">-</TypographySmall>
                                            </div>
                                            <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                                <TypographySmall className="break-words">200</TypographySmall>
                                            </div>
                                        </div>
                                        <div className="hoverShadow grid min-h-9 grid-cols-[1fr_repeat(4,minmax(7rem,_10rem))_5rem] items-center hover:relative hover:z-10">
                                            <div className="pl-18">
                                                <TypographySmall className="break-words">
                                                    No. given iron suppl'n{" "}
                                                </TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">50</TypographySmall>
                                            </div>
                                            <div className="px-4 text-center">
                                                <TypographySmall className="break-words">-</TypographySmall>
                                            </div>
                                            <div className="bg-secondary flex h-full items-center justify-center px-4 text-center">
                                                <TypographySmall className="break-words">200</TypographySmall>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </Fragment>
                        </div>
                    </div>
                </Card>

                <div className="mt-6 flex justify-end">
                    <Button disabled>
                        Approve for Report
                    </Button>
                </div>
            </div>
        </div>
    );
}

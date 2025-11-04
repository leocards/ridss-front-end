"use client"

import { Button } from "@/components/ui/button"
import { Fragment, useState } from "react"
import DataConfirmation from "./data-confirmation"

export default function DataConfirmationButton() {
    const [open, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="flex items-center justify-end mt-5">
                <Button onClick={() => setOpen(true)}>Submit to CHO</Button>
            </div>

            <DataConfirmation open={open} onClose={setOpen} />
        </Fragment>
    )
}
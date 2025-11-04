import { PropsWithChildren } from "react";

export default function Layout({children} : PropsWithChildren) {
    return (
        <div className="max-w-sm mx-auto">
            {children}
        </div>
    )
}
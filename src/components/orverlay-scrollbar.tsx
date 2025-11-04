"use client"

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { CSSProperties, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { ScrollbarsAutoHideBehavior } from 'overlayscrollbars';

type Props = PropsWithChildren & {
    style?: CSSProperties;
    className?: string;
    autoHide?: ScrollbarsAutoHideBehavior;
}
export default function OverlayScrollbar({ children, style, autoHide = 'leave', className }: Props) {
    return (
        <OverlayScrollbarsComponent
            element='div'
            options={{ scrollbars: { autoHide } }}
            style={style}
            className={cn("", className)}
            defer
        >
            {children}
        </OverlayScrollbarsComponent>
    )
}
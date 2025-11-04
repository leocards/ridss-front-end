import {
    Forklift,
    Mail,
    MessageSquare,
    Calendar,
    Kanban,
    ReceiptText,
    Users,
    Lock,
    Fingerprint,
    SquareArrowUpRight,
    LayoutDashboard,
    ChartBar,
    Banknote,
    Gauge,
    GraduationCap,
    type LucideIcon,
    CalendarDays,
    CalendarCheck,
    ClipboardCheck,
    ChartColumnBig,
    ClipboardList,
    List,
    Logs,
    ClipboardClock,
    User2,
    Bell,
    ClipboardPenLine,
    PillBottle,
    Warehouse,
    ListChecks,
    Building,
    MessageSquareText,
    FileText,
    Layers,
} from "lucide-react";

export interface NavSubItem {
    title: string;
    url: string;
    icon?: LucideIcon;
    comingSoon?: boolean;
    newTab?: boolean;
    isNew?: boolean;
}

export interface NavMainItem {
    title: string;
    url: string;
    id: string;
    icon?: LucideIcon;
    subItems?: NavSubItem[];
    comingSoon?: boolean;
    newTab?: boolean;
    isNew?: boolean;
}

export interface NavGroup {
    id: number;
    label?: string;
    items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
    {
        id: 1,
        label: "Mobile - Mother",
        items: [
            {
                id: "/mother/dashboard",
                title: "Dashboard",
                url: "/mother/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/mother/registration",
                title: "Registration",
                url: "/mother/registration",
                icon: ClipboardPenLine,
            },
            {
                id: "/mother/my-schedule",
                title: "My Schedule",
                url: "/mother/my-schedule",
                icon: CalendarDays,
            },
            {
                id: "/mother/history",
                title: "Immunization History",
                url: "/mother/history",
                icon: ClipboardClock,
            },
            {
                id: "/mother/profile",
                title: "Profile",
                url: "/mother/profile",
                icon: User2,
            },
            {
                id: "/mother/notification",
                title: "Notifications",
                url: "/mother/notification",
                icon: Bell,
            }
            
        ],
    },
    {
        id: 2,
        label: "BHW - Staff",
        items: [
            {
                id: "/bhw-staff/dashboard",
                title: "Dashboard",
                url: "/bhw-staff/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/bhw-staff/registration",
                title: "Registration",
                url: "/bhw-staff/registration",
                icon: ClipboardPenLine,
            },
            {
                id: "/bhw-staff/schedule",
                title: "Schedule",
                url: "/bhw-staff/schedule",
                icon: CalendarDays,
            },
            {
                id: "/bhw-staff/attendance",
                title: "Attendance",
                url: "/bhw-staff/attendance",
                icon: ClipboardCheck,
            },
            {
                id: "/bhw-staff/vaccine-request",
                title: "Vaccine Request",
                url: "/bhw-staff/vaccine-request",
                icon: ReceiptText,
            },
            {
                id: "/bhw-staff/reports",
                title: "Reports",
                url: "/bhw-staff/reports",
                icon: ChartColumnBig,
            },
            {
                id: "/bhw-staff/notification-log",
                title: "Notification Log",
                url: "/bhw-staff/notification-log",
                icon: List,
            },
            {
                id: "/bhw-staff/records",
                title: "Records",
                url: "/bhw-staff/records",
                icon: ClipboardList,
            },
            {
                id: "/bhw-staff/audits-log",
                title: "Audit Logs",
                url: "/bhw-staff/audits-log",
                icon: ClipboardClock,
            }
            
        ],
    },
    {
        id: 3,
        label: "BHW - Head",
        items: [
            {
                id: "/bhw-head/dashboard",
                title: "Dashboard",
                url: "/bhw-head/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/bhw-head/vaccine-approval",
                title: "Vaccine Approval",
                url: "/bhw-head/vaccine-approval",
                icon: PillBottle,
            },
            {
                id: "/bhw-head/immunization-verification",
                title: "Immunization Verification",
                url: "/bhw-head/immunization-verification",
                icon: ClipboardCheck,
            },
            {
                id: "/bhw-head/reports",
                title: "Reports",
                url: "/bhw-head/reports",
                icon: ChartColumnBig,
            },
            {
                id: "/bhw-head/inventory",
                title: "Inventory",
                url: "/bhw-head/inventory",
                icon: Warehouse,
            },
            {
                id: "/bhw-head/approval-logs",
                title: "Approval Logs",
                url: "/bhw-head/approval-logs",
                icon: ListChecks,
            },
            {
                id: "/bhw-head/barangay-data",
                title: "Baranggay Data",
                url: "/bhw-head/barangay-data",
                icon: Building,
            },
            
        ],
    },
    {
        id: 4,
        label: "CHO - Staff",
        items: [
            {
                id: "/cho-staff/dashboard",
                title: "Dashboard",
                url: "/cho-staff/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/cho-staff/vaccine-inventory",
                title: "Vaccine Inventory",
                url: "/cho-staff/vaccine-inventory",
                icon: PillBottle,
            },
            {
                id: "/cho-staff/request-queue",
                title: "Request Queue",
                url: "/cho-staff/request-queue",
                icon: Layers,
            },
            {
                id: "/cho-staff/issuance",
                title: "Issuance Processing",
                url: "/cho-staff/issuance",
                icon: FileText,
            },
            {
                id: "/cho-staff/reports",
                title: "Reports",
                url: "/cho-staff/reports",
                icon: ChartColumnBig,
            },
            {
                id: "/cho-staff/notifications",
                title: "Notifications",
                url: "/cho-staff/notifications",
                icon: Bell,
            },
            {
                id: "/cho-staff/messaging",
                title: "Messages",
                url: "/cho-staff/messaging",
                icon: MessageSquareText,
            },
            {
                id: "/cho-staff/validation",
                title: "Validation",
                url: "/cho-staff/validation",
                icon: ClipboardCheck,
            }
            
        ],
    },
    {
        id: 5,
        label: "CHO - Head",
        items: [
            {
                id: "/cho-head/dashboard",
                title: "Dashboard",
                url: "/cho-head/dashboard",
                icon: LayoutDashboard,
            },
            {
                id: "/cho-head/registration",
                title: "Registration",
                url: "/cho-head/registration",
                icon: ChartBar,
            },
            {
                id: "cho-head",
                title: "Vaccine ",
                url: "/cho-head/vaccine-approval",
                icon: ReceiptText,
            },
            {
                id: "cho-head",
                title: "Reports",
                url: "/cho-head/city-reports",
                icon: ChartColumnBig,
            },
            {
                id: "cho-head",
                title: "Users",
                url: "/cho-head/user-management",
                icon: ClipboardList,
            },
            {
                id: "cho-head",
                title: "Audit Logs",
                url: "/cho-head/audit-logs",
                icon: Logs,
            }
            
        ],
    },
    // {
    //     id: 2,
    //     label: "Pages",
    //     items: [
    //         {
    //             title: "Email",
    //             url: "/dashboard/coming-soon",
    //             icon: Mail,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Chat",
    //             url: "/dashboard/coming-soon",
    //             icon: MessageSquare,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Calendar",
    //             url: "/dashboard/coming-soon",
    //             icon: Calendar,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Kanban",
    //             url: "/dashboard/coming-soon",
    //             icon: Kanban,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Invoice",
    //             url: "/dashboard/coming-soon",
    //             icon: ReceiptText,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Users",
    //             url: "/dashboard/coming-soon",
    //             icon: Users,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Roles",
    //             url: "/dashboard/coming-soon",
    //             icon: Lock,
    //             comingSoon: true,
    //         },
    //         {
    //             title: "Authentication",
    //             url: "/auth",
    //             icon: Fingerprint,
    //             subItems: [
    //                 { title: "Login v1", url: "/auth/v1/login", newTab: true },
    //                 { title: "Login v2", url: "/auth/v2/login", newTab: true },
    //                 { title: "Register v1", url: "/auth/v1/register", newTab: true },
    //                 { title: "Register v2", url: "/auth/v2/register", newTab: true },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     id: 3,
    //     label: "Misc",
    //     items: [
    //         {
    //             title: "Others",
    //             url: "/dashboard/coming-soon",
    //             icon: SquareArrowUpRight,
    //             comingSoon: true,
    //         },
    //     ],
    // },
];

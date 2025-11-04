import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

interface Props {
    hover: boolean;
    id: string | number;
    className?: string
}

export default function AnimatedHover({ hover, id, className }: Props) {
	return (
		<AnimatePresence initial={false}>
			{hover && (
				<motion.span
					layoutId={id + "hover"}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						type: "tween",
						duration: 0.17,
					}}
					className={cn(
						"absolute inset-0 -z-[1] bg-neutral-200 dark:bg-secondary rounded-[inherit]",
                        className
					)}
				></motion.span>
			)}
		</AnimatePresence>
	);
}

import { cn } from "@/lib/utils";

export function Marquee({ children, reverse = false, className, pauseOnHover = false }: { children: React.ReactNode, reverse?: boolean, className?: string, pauseOnHover?: boolean }) {
    return (
        <div className={cn("flex overflow-hidden w-full select-none group mask-linear-fade", className)}>
            <div className={cn(
                "flex shrink-0 gap-4 py-4 pr-4",
                reverse ? "animate-scroll-reverse" : "animate-scroll",
                pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}>
                {children}
            </div>
            <div className={cn(
                "flex shrink-0 gap-4 py-4 pr-4",
                reverse ? "animate-scroll-reverse" : "animate-scroll",
                pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}>
                {children}
            </div>
        </div>
    );
}

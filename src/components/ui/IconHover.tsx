import * as Tooltip from "@radix-ui/react-tooltip";

export const IconHover = ({ label, children }: { label: string; children: React.ReactNode }) => {
    return (
        <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        side="right"
                        sideOffset={8}
                        style={{ maxWidth: "320px" }}
                        className="
                            overflow-hidden rounded-lg
                            bg-toltip-bg px-3 py-1.5 text-sm text-toltip
                            shadow-lg 
                            z-9999 select-none
                            animate-in fade-in-0 zoom-in-95
                            data-[state=closed]:animate-out
                            data-[state=closed]:fade-out-0
                            data-[state=closed]:zoom-out-95
                            data-[side=right]:slide-in-from-left-2
                        "
                    >
                        <div className="whitespace-pre-wrap wrap-break-word font-sans text-xs leading-relaxed">{label}</div>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

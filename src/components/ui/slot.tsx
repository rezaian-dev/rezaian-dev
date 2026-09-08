import { cloneElement, isValidElement, type HTMLAttributes, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLElement> & { children?: ReactNode };

// 🪆 Minimal `asChild` slot — merges props/className onto the single child (replaces radix Slot, zero deps)
export function Slot({ children, className, ...props }: Props) {
  if (!isValidElement(children)) return null;
  const child = children as ReactElement<Props>;
  return cloneElement(child, { ...props, ...child.props, className: cn(className, child.props.className) });
}

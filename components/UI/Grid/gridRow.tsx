import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rowVariants = cva(["flex flex-wrap", "lg:-mx-3", "md:-mx-3", "-mx-3"], {
  variants: {
    variant: {
      default: "",
      fluid: "!max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type RowProps = Pick<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "className" | "children"
> &
  VariantProps<typeof rowVariants>;

/**
 * GridRow
 *
 * @param children - jsxElement: what is inside the component
 * @param className - string: classes to be passed to component
 * @param variant - 'default' | 'fluid' | null | undefined: the varaint of the row
 * @spacing - 'none' | 'default- 48px ' | 'large - 48px' | 'medium - 24px' | 'small - 16px' | null | undefined: the spacing between the rows
 */

export const GridRow = ({ children, className, variant }: RowProps) => {
  return (
    <div className={cn(rowVariants({ variant, className }))}>{children}</div>
  );
};

import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

const buttonVariants = cva(
  "font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        warning: "bg-yellow-500 text-black hover:bg-yellow-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        inverse: "bg-gray-800 text-white hover:bg-gray-900",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-3 py-1.5 text-base",
        large: "px-4 py-2 text-lg",
        "extra-large": "px-6 py-3 text-xl",
      },
      roundness: {
        square: "rounded-none",
        small: "rounded-sm",
        base: "rounded",
        medium: "rounded-md",
        large: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      roundness: "base",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  roundness,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(buttonVariants({ variant, size, roundness }), className)}
      {...props}
    />
  );
};

export default Button;

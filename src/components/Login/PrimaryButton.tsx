import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      variant="default" 
      className={cn(
        "w-full",
        // Default variant uses primary color, which is set to accent color via CSS variables
        // text-primary-foreground is also set via CSS variables for button text
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

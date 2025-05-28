import React from 'react';
import { Input, type InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormInputProps extends InputProps {
  id: string;
  label: string;
  containerClassName?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  className,
  containerClassName,
  ...props
}) => {
  return (
    <div className={cn("w-full", containerClassName)}>
      <Label htmlFor={id} className="sr-only">
        {label}
      </Label>
      <Input
        id={id}
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  );
};

export default FormInput;

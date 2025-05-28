import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

interface SecondaryLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({
  to,
  children,
  className,
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "text-sm text-center text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default SecondaryLink;

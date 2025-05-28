import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface MainAppLayoutProps {
  children: React.ReactNode;
  cardClassName?: string;
  contentClassName?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  cardClassName,
  contentClassName,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className={cn('w-[320px]', cardClassName)}>
        {/* 
          Layout Requirements for mainContent:
          - Overall: "flex flex-col gap-4 p-6 bg-surface rounded-lg shadow-lg w-[320px]"
          - Card handles: bg-surface (via bg-card), rounded-lg, shadow-lg. w-[320px] is applied here.
          - CardContent handles: p-6, flex flex-col, gap-4.
          The explicit 'p-6' in CardContent's className ensures it overrides any default
          padding behavior like 'pt-0' that might occur if CardHeader was present.
        */}
        <CardContent
          className={cn(
            'p-6 flex flex-col gap-4',
            contentClassName
          )}
        >
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default MainAppLayout;

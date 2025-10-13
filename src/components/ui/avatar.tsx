import * as React from 'react';
import Image from 'next/image';

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props}
  />
));

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentProps<typeof Image>
>(({ className = '', alt = '', width = 40, height = 40, ...props }, ref) => (
  <Image
    ref={ref}
    className={`h-full w-full object-cover ${className}`}
    alt={alt}
    width={width}
    height={height}
    {...props}
  />
));

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}
    {...props}
  />
));

export { Avatar, AvatarImage, AvatarFallback };

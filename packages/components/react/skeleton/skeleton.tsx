import React from 'react'
import { cn, skeleton } from '@openui-org/theme'
import type { VariantProps } from '@openui-org/theme'

export interface Props extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof skeleton> {}

function Skeleton({
  className,
  rounded,
  children,
  ...props
}: Props) {
  return (
    <div
      className={cn(skeleton({ rounded }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default Skeleton

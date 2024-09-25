import { ReactNode } from "react";
import { WavyBackground } from "../_components/ui/wavy-background";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
  <WavyBackground>
    <h1 className="text-orange-300 dark:text-foreground text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  </WavyBackground>
  );
}

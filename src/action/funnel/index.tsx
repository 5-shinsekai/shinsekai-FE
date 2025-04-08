'use client';
import React, { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: ReactElement<StepProps>[];
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);
  const [data, setData] = useState<Record<string, string>>({});

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );
    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, step, data, setData } as const;
};

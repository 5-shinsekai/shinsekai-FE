import React from 'react';
import { Button } from './Button';

export default function SubmitButton({
  value,
  onClick,
}: {
  value?: string;
  onClick?: () => void;
}) {
  return (
    <section className="w-full fixed bottom-0 pt-3 pb-8 px-7 bg-white border-t-4 border-custom-gray-100">
      <Button
        color="blue"
        className="
              w-full text-lg font-bold
              group-has-[button[data-state=unchecked][data-required=true]]:bg-custom-gray-300
              group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
              group-has-[.unclear]:bg-custom-gray-300
              group-has-[.unclear]:pointer-events-none
            "
        onClick={onClick}
      >
        {value}
      </Button>
    </section>
  );
}

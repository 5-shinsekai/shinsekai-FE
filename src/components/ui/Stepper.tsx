import React, { useContext } from 'react';
import { SignUpContext } from '@/context/SignUpContext';

export default function Stepper({ totalSteps }: { totalSteps: number }) {
  const { steps } = useContext(SignUpContext);

  if (steps === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-full my-8">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }, (_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors delay-300 duration-500 ease-in-out
                ${
                  index + 1 <= steps
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}
            >
              {index + 1}
            </div>

            {/* Connector Line */}
            {index < totalSteps - 1 && (
              <div className="relative w-10 mx-1">
                <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                <div
                  className="absolute top-1/2 h-0.5 bg-black -translate-y-1/2 origin-left transition-all duration-300 ease-out"
                  style={{
                    width: index + 1 < steps ? '100%' : '0%',
                  }}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

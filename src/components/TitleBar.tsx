import * as React from 'react';

export interface ITitleBarProps {
}

export default function TitleBar (props: ITitleBarProps) {
  return (
    <div className='font-bold text-2xl mb-3'>TODO List <span className='text-lg font-normal italic'>(with TypeScript)</span></div>
  );
}

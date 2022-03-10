import * as React from 'react';

export interface ITitleBarProps {
}

export default function TitleBar (props: ITitleBarProps) {
  return (
    <div className='font-bold text-2xl mb-3'>TODO List</div>
  );
}

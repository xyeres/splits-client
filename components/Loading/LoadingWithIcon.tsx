import React from "react";

type Props = {
    icon: React.ReactNode,
    text?: String,
    color?: String,
}

function LoadingWithIcon({ icon, text = "Loading...", color = "text-dark-active" }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center h-full gap-2 ${color}`}>
      <span className='text-9xl'>
        {icon}
      </span>
      <p>{text}</p>
    </div>
  );
}

export default LoadingWithIcon;
import React from "react";
import IconTypes from "./icon";

export const EyeView: React.FC<IconTypes> = ({
  size = 20,
  color = "rgba(3, 1, 76, 0.5)",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M25 16.9534C20.5605 16.9534 16.9534 20.5605 16.9534 25C16.9534 29.4395 20.5605 33.0466 25 33.0466C29.4395 33.0466 33.0466 29.4395 33.0466 25C33.0466 20.5605 29.4395 16.9534 25 16.9534ZM24.3896 22.6138C23.3907 22.6138 22.5583 23.4462 22.5583 24.4451H19.8945C19.95 21.9478 21.9478 19.95 24.3896 19.95V22.6138Z"
        fill={color}
      />
      <path
        d="M49.4173 23.3352C46.6981 19.9501 36.9867 8.90678 25 8.90678C13.0133 8.90678 3.30189 19.9501 0.582686 23.3352C-0.194229 24.2786 -0.194229 25.6659 0.582686 26.6648C3.30189 30.05 13.0133 41.0932 25 41.0932C36.9867 41.0932 46.6981 30.05 49.4173 26.6648C50.1942 25.7214 50.1942 24.3341 49.4173 23.3352ZM25 36.6537C18.5627 36.6537 13.3463 31.4373 13.3463 25C13.3463 18.5627 18.5627 13.3463 25 13.3463C31.4373 13.3463 36.6537 18.5627 36.6537 25C36.6537 31.4373 31.4373 36.6537 25 36.6537Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
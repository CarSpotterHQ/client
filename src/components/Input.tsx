import React from 'react';
import RefreshIcon from '@//assets/icons/refresh.svg';

type InputProps = {
  value?: string;
  placeholder?: string;
  isRefresh?: boolean;
  onRefresh?: () => void;
};

const Input = ({ value, placeholder, isRefresh, onRefresh }: InputProps) => {
  return (
    <div className="input-box px-6">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className={`h-14 w-full border-b-4 border-mainGreenColor bg-mainBgColor text-mainTextWhiteColor ${isRefresh ? 'pr-8' : 'pr-0'} text-2xl focus:outline-none`}
        />
        {isRefresh && (
          <RefreshIcon
            className="absolute right-0 top-1/2 -translate-y-1/2 transform cursor-pointer"
            onClick={onRefresh}
          />
        )}
      </div>
    </div>
  );
};

export default Input;

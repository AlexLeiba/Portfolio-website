'use client';
import { cn } from '@/lib/utils';
import React, { ChangeEventHandler, useState } from 'react';

import { Eye, EyeOff, Search } from 'lucide-react';
import { Spacer } from '../spacer/spacer';

type InputProps = {
  type: 'text' | 'password' | 'email' | 'textarea';
  inputType?: 'text' | 'password' | 'email' | 'textarea' | 'search';
  placeholder: string;
  className: string;
  label: string;
  error: string | undefined;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
export function Input({
  type = 'text',
  placeholder,
  className,
  label,
  error = '',
  leftIcon,
  disabled = false,
  inputType = 'text',
  defaultValue,
  readOnly,
  onChange,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <p>{label}</p>
      <Spacer size={1} />
      <label
        className={cn([
          ' flex items-center gap-2 relative',
          `${error ? ' border-red-500' : ' flex items-center gap-2'}`,
        ])}
      >
        {leftIcon}
        {type == 'textarea' ? (
          <textarea
            onChange={onChange}
            defaultValue={defaultValue ? defaultValue : ''}
            {...props}
            disabled={disabled}
            className={cn(' w-full  grow', [
              `${
                error ? 'border border-error-600' : 'border border-baseline-300'
              }`,
              'p-4 rounded  focus:border-white focus:ring focus:ring-offset-1',
              className,
            ])}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        ) : (
          <input
            onChange={onChange}
            defaultValue={defaultValue ? defaultValue : ''}
            {...props}
            disabled={disabled}
            type={showPassword ? 'text' : type}
            className={cn(' w-full  grow', [
              `${error && ' text-red-500'}`,
              className,
            ])}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        )}

        {inputType === 'search' && (
          <Search
            className={cn('absolute w-5 h-5 cursor-pointer left-2 top-3', [
              `${error && 'grow text-red-500'}`,
            ])}
          />
        )}
      </label>
      <Spacer size={1} />
      <p className='text-xs text-error-600'>{error}</p>

      {inputType === 'password' &&
        (showPassword ? (
          <EyeOff
            onClick={() => setShowPassword(false)}
            className={cn('absolute w-5 h-5 cursor-pointer top-0 right-0', [
              `${error && 'grow text-red-500'}`,
            ])}
          />
        ) : (
          <Eye
            onClick={() => setShowPassword(true)}
            className={cn('absolute w-5 h-5 cursor-pointer top-0 right-0', [
              `${error && 'grow text-red-500'}`,
            ])}
          />
        ))}
    </div>
  );
}

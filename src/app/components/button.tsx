'use client'
import clsx from 'clsx'

export interface ButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  disabled?: boolean
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 rounded bg-gray-900 text-zinc-50 font-medium text-center',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zink-100 opacity-50 cursor-not-allowed',
      )}
    />
  )
}

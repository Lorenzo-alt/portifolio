import React from 'react';
import { UseFormRegister, FieldValues, FieldError, Path } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

interface FormInputProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  type: 'text' | 'textarea';
  mask?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  disabled?: boolean;
  rows?: number;
  lazy?: boolean;
  onAccept?: (value: string) => void;
  onChange?: (value: string) => void;
}

const FormInput = <T extends FieldValues>({
  label,
  id,
  type,
  mask,
  register,
  error,
  disabled = false,
  rows = 3,
  lazy,
  onAccept,
  onChange,
}: FormInputProps<T>) => {
  const commonProps = {
    id,
    disabled,
    className: 'rounded-[10px] p-2.5 pl-3 text-[12px] transition disabled:opacity-45',
    style: {
      background: 'linear-gradient(180deg, rgba(176,176,176,0.3) 0%, rgba(56, 56, 56, 0.3) 100%)',
    },
  };

  return (
    <div className='flex flex-col gap-1 transition'>
      <label htmlFor={id} className='pl-3 text-[12px] font-medium transition'>
        {label + ':'}
      </label>
      {mask ? (
        <IMaskInput
          mask={mask}
          {...commonProps}
          {...register(id)}
          lazy={lazy}
          onChange={(e) => onChange && onChange(e.currentTarget.value)}
          onAccept={(e, value) => onAccept && onAccept(value._unmaskedValue)}
        />
      ) : type === 'textarea' ? (
        <textarea {...register(id)} {...commonProps} rows={rows} className={`${commonProps.className} resize-none`} />
      ) : (
        <input type={type} {...register(id)} {...commonProps} />
      )}

      <label htmlFor={id} className='h-min min-h-5 pl-3 text-[12px] font-bold text-red-400 transition'>
        {error?.message}
      </label>
    </div>
  );
};

export default FormInput;

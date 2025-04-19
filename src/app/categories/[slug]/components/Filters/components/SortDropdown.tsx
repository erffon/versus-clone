import { Dropdown } from '@/app/components/ui/Dropdown'
import { Controller, useFormContext } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa'

const SortDropdown = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext()

  return (
    <div>
      <label className='text-sm font-bold uppercase mb-1 block text-deep-charcoal'>Sort by</label>
      {isLoading ? (
        <div className='h-9 bg-gray-200 rounded-md animate-pulse' />
      ) : (
        <Controller
          control={control}
          name='sort'
          render={({ field }) => (
            <Dropdown
              label={`${field.value}`}
              renderTrigger={() => (
                <button className='w-full rounded-xl bg-white p-2 shadow-md flex items-center justify-between text-deep-charcoal text-sm border border-gray-500'>
                  {`${field.value}`} <FaChevronDown className='text-neutral-gray' />
                </button>
              )}
            >
              <Dropdown.Item onClick={() => field.onChange('Popularity')}>Popularity</Dropdown.Item>
              <Dropdown.Item onClick={() => field.onChange('Price: Low to High')}>Price: Low to High</Dropdown.Item>
              <Dropdown.Item onClick={() => field.onChange('Price: High to Low')}>Price: High to Low</Dropdown.Item>
            </Dropdown>
          )}
        />
      )}
    </div>
  )
}

export default SortDropdown

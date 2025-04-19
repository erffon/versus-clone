'use client'

import { ICheckboxGroupInput, IRangeInput } from '@/app/components'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react'
import { useState } from 'react'
import { Fields } from './components'

export interface IOtherFilters {
  title: string
  filters: TFilters[]
}

type TFilters = {
  title: string
} & TFilterTypes

export type TFilterTypes = TRangeFilter | TCheckboxFilter

type TRangeFilter = {
  type: 'range'
} & IRangeInput

type TCheckboxFilter = {
  type: 'checkbox'
} & ICheckboxGroupInput

const OtherFilters = ({ title, filters }: IOtherFilters) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      <h4 className='font-bold text-sm text-deep-charcoal mb-1'>{title}</h4>

      <Accordion collapseAll clearTheme>
        {filters.slice(0, showMore ? filters.length : 5).map(item => {
          return (
            <AccordionPanel key={item.title}>
              <AccordionTitle
                clearTheme
                theme={{
                  base: 'px-3 py-2 text-sm font-semibold text-deep-charcoal flex items-center justify-between w-full  hover:bg-gray-200 cursor-pointer',
                  arrow: {
                    base: 'h-6 w-6 shrink-0 transition-all duration-300',
                    open: {
                      off: '-rotate-90',
                      on: 'rotate-0'
                    }
                  },
                  open: {
                    off: 'rounded-xl bg-transparent',
                    on: 'rounded-t-xl bg-gray-100'
                  }
                }}
              >
                {item.title}
              </AccordionTitle>
              <AccordionContent
                clearTheme
                theme={{
                  base: 'p-4 bg-gray-100 rounded-b-xl'
                }}
              >
                <Fields field={item} />
              </AccordionContent>
            </AccordionPanel>
          )
        })}
      </Accordion>

      {!showMore && filters.length > 5 && (
        <button
          onClick={() => setShowMore(true)}
          className='text-base font-semibold uppercase hover:underline text-vibrant-blue cursor-pointer'
        >
          Show more
        </button>
      )}
    </div>
  )
}

export default OtherFilters

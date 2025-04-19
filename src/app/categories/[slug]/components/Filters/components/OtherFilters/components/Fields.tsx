'use client'

import { JSX } from 'react'
import { TFilterTypes } from '../OtherFilters'
import { CheckboxGroupInput, ICheckboxGroupInput, IRangeInput, RangeInput } from '@/app/components'

interface IFileds {
  field: TFilterTypes
}

const Fields = ({ field }: IFileds) => {
  const { type, ...rest } = field

  const fieldCmp: Record<typeof type, JSX.Element> = {
    checkbox: <CheckboxGroupInput {...(rest as ICheckboxGroupInput)} />,
    range: <RangeInput {...(rest as IRangeInput)} />
  }

  return fieldCmp[type]
}

export default Fields

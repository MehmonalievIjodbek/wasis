import { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { siteSettings } from '@settings/site-settings'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const { site_header } = siteSettings
  const { t } = useTranslation('common')
  const options = site_header.languageMenu
  const router = useRouter()
  const { asPath, locale } = router
  const currentSelectedItem = locale
    ? options.find((o) => o.value === locale)!
    : options[2]
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem)

  function handleItemClick(values: any) {
    setSelectedItem(values)
    router.push(asPath, undefined, {
      locale: values.value,
    })
  }

  useEffect(() => {
    localStorage.setItem('lang', currentSelectedItem?.value)
  }, [])

  return (
    <Listbox value={selectedItem} onChange={handleItemClick}>
      <Listbox.Options
        static
        className=" listbox-language  absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60  focus:outline-none text-[14px]"
      >
        {options?.map((option) => (
          <Listbox.Option
            key={option.id}
            className={({ active }) =>
              `${active ? 'text-amber-900 bg-gray-100  ' : 'text-gray-900'}
												cursor-pointer select-none relative py-2 px-3 `
            }
            value={option}
          >
            {({ selected, active }) => (
              <span className="flex items-center cursorCenter">
                <span
                  className={`${
                    selected ? 'font-medium' : 'font-normal'
                  } block truncate ms-1.5`}
                >
                  {option.icon}
                </span>
                {selected ? (
                  <span
                    className={`${active && 'text-amber-600'}
                                 absolute inset-y-0 start-0 flex items-center ps-3`}
                  />
                ) : null}
              </span>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      {({ open }) => (
        <div className="relative ms-2 lg:ms-0 w-[100px] sm:w-[100px] lg:w-[100px] xl:w-[100px] z-20">
          <Listbox.Button className="flex justify-around text-heading text-base text-[#475467] xl:text-[14px] font-semibold  relative  py-2 ps-3 pe-7 text-start  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 cursor-pointer">
            <span className="flex truncate items-center gap-2">
              <span className="me-1.5 flex items-center">
                {selectedItem?.icon}
              </span>
              <HiOutlineChevronDown
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="absolute inset-y-0 end-0 flex items-center pe-1.5 pointer-events-none"></span>
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></Transition>
        </div>
      )}
    </Listbox>
  )
}

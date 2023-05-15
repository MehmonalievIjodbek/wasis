import { useTranslation } from 'next-i18next'
import { IoIosArrowForward } from 'react-icons/io'
import Link from './link'
import cn from 'classnames'

const ListMenu = ({
  dept,
  data,
  hasSubMenu,
  hasMegaMenu,
  menuIndex,
}: any) => {
  const { t } = useTranslation('menu')
  return (
    <li className={cn(!hasMegaMenu ? 'group relative' : '')}>
      <Link
        href={data.path}
        className='flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300'
      >
        {data.icon && <span className='inline-flex me-2'>{data.icon}</span>}
        {t(data.label)}
        {data.subMenu && (
          <span className='text-sm mt-0.5 shrink-0 ml-auto'>
            <IoIosArrowForward className='transition duration-300 ease-in-out text-body group-hover:text-black' />
          </span>
        )}
      </Link>
      {hasSubMenu && (
        <SubMenu dept={dept} data={data.subMenu} menuIndex={menuIndex} />
      )}
    </li>
  )
}

const SubMenu: React.FC<any> = ({ dept, data, menuIndex }) => {
  dept = dept + 1
  return (
    <ul className='absolute z-0 invisible w-56 py-3 bg-gray-200 opacity-0 subMenuChild shadow-subMenu end-full 2xl:end-auto 2xl:start-full top-4'>
      {data?.map((menu: any, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

        return (
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.subMenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
        )
      })}
    </ul>
  )
}

export default ListMenu

const NavBadge = ({ badge }: { badge: string }) => {
  return (
    <div className='border border-badge-border bg-badge-back text-active rounded-full leading-[11px] text-[10px] flex items-center py-0.5 px-2'>
      {badge}
    </div>
  )
}

export default NavBadge

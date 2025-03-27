const IconButton = ({
  icon,
  onClickIcon,
}: {
  icon: React.ReactNode
  onClickIcon: () => void
}) => {
  return (
    <div onClick={onClickIcon} className="cursor-pointer">
      {icon}
    </div>
  )
}

export default IconButton

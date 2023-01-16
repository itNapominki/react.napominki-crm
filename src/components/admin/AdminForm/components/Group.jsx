import { Separator } from '../../..'

export default function Group(data) {
  const { button, children, title } = data

  return (
    <>
      <div className="admin-form__group">
        {title && <div className="admin-form__group-title">{title}</div>}
        <div className="admin-form__group-row row">{children}</div>
        {button && (
          <button className="admin-form__group-button" onClick={button.onClick}>
            {button.text}
          </button>
        )}
      </div>

      <Separator />
    </>
  )
}

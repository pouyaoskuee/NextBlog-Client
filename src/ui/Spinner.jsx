export function SpinnerMini({text}) {
  return (
      <div className={'flex items-center justify-center'}>
          <p>{text}</p>
          <div className="spinner-mini"></div>
      </div>
  )
}

export function Spinner({text}) {
  return (
      <div className={'flex items-center justify-center'}>
          <p>{text}</p>
          <div className="spinner"></div>
      </div>
  )
}

type ErrorMessageProps = {
  errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <p>{errorMessage}</p>
}

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>
}
export const ContentEditable = (props:Props) => {

  const handleInput = (e:React.KeyboardEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.innerHTML)
    console.log(e.currentTarget.innerHTML)
  }

  return (
    <div
      contentEditable
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: props.value}}
    />
  );
};
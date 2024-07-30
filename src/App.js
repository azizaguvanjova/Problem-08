// Statik değerleri alın ve prop'ları kullanarak dinamik hale getirin
// Örneğin: label id, label text, input placeholder, input description
function FormInput({labelID,labelText,inputType,inputPlaceholder,inputDescription}) {
  return (
    <div className='max-w-sm p-8'>
      <label
        htmlFor={labelID}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {labelText}
      </label>
      <div className='mt-2'>
        <input
          id={labelID}
          name={labelText}
          type={inputType}
          placeholder={inputPlaceholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        {inputDescription}
      </p>
    </div>
  )
}

export default function App() {
  return (
    <form>
      <FormInput
      labelID='email'
      labelText='email'
      inputType='email'
      inputPlaceholder='you@example.com'
      inputDescription='Bunu sadece spam için kullanacağız.'
      />
      <FormInput 
      labelID='username'
      labelText='Username'
      inputType='text'
      inputPlaceholder='you@example.com'
      inputDescription='Bu kullanıcı adınız olacak'
      />
    </form>
  )
}

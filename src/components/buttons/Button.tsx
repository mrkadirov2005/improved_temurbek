
interface PROPS{
  data:string
}
export default function Button({data}:PROPS) {
  return (
    <button className='bg-blue-500 px-5 py-2 rounded-2xl w-full sm:w-auto text-white hover:bg-blue-800'>
      {data}
    </button>
  )
}

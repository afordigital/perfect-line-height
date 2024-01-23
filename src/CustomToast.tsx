import toast from 'react-hot-toast'

export function showToast(content: string) {
  toast.success(
    <span className='text-center py-1 px-2 text-[14px] text-white'>
      <strong>{content}</strong>
      <br />
      <small>Is now your clipboard!</small>
    </span>,
    {
      duration: 3000,
      style: { background: 'rgb(67,56,202)' }
    }
  )
}

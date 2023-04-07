// import { Button, Label, Textarea, TextInput, Toast } from 'flowbite-react'
// import React from 'react'
// import {
//   EnvelopeIcon,
//   InformationCircleIcon,
//   ExclamationTriangleIcon,
// } from '@heroicons/react/24/solid'
// import { SubmitHandler, useForm } from 'react-hook-form'
// import cls from 'classnames'
import { Button, Tooltip } from 'flowbite-react'
import { linkForm } from '../../../utils/metadata'

interface MyFormProps { }

// interface IFormInput {
//   email: string
//   name: string
//   text: string
// }

const MyForm = (props: MyFormProps) => {
  // const { register, handleSubmit, reset } = useForm<IFormInput>()
  // const [show, setShow] = React.useState<boolean>(false)
  // const [message, setMessage] = React.useState<string>('Loading...')
  // const [type, setType] = React.useState<'info' | 'error'>('info')
  // const onSubmit: SubmitHandler<IFormInput> = (data) => {
  //   const body = JSON.stringify({ data })
  //   console.log(body)
  //   fetch('/api/v1/messages', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body,
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result)
  //       if (result.message === 'OK') {
  //         setType('info')
  //         setMessage(result.response)
  //       } else {
  //         setType('error')
  //         setMessage(`ERROR: Message not sent! Details: ${result.error}`)
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       alert('work in progress!!!')
  //     })
  //   setShow(true)
  // }

  const handleOnClick = () => {
    window.location.href = linkForm
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Tooltip content="Fill out the form">
        <Button onClick={handleOnClick}>Send me a message</Button>
      </Tooltip>
    </div>
    // <form
    //   className="flex flex-col gap-4 m-10"
    //   onSubmit={handleSubmit(onSubmit)}
    // >
    //   {show && (
    //     <Toast
    //       className={type === 'info' ? 'text-blue-500' : 'text-red-500'}
    //       onClick={() => {
    //         setShow(false)
    //         reset()
    //       }}
    //     >
    //       <div
    //         className={cls([
    //           'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
    //           type === 'info'
    //             ? 'bg-blue-100 text-blue-500'
    //             : 'bg-red-100 text-red-500',
    //         ])}
    //       >
    //         {type === 'info' && <InformationCircleIcon className="h-5 w-5" />}
    //         {type === 'error' && (
    //           <ExclamationTriangleIcon className="h-5 w-5" />
    //         )}
    //       </div>
    //       <div className="ml-3 text-sm font-normal">{message}</div>
    //       <Toast.Toggle />
    //     </Toast>
    //   )}
    //   <p className="text-center font-bold text-2xl">Send a Message</p>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="email" value="Your email" />
    //     </div>
    //     <TextInput
    //       {...register('email')}
    //       icon={EnvelopeIcon}
    //       id="email"
    //       type="email"
    //       required={true}
    //       shadow={true}
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="name" value="Your name" />
    //     </div>
    //     <TextInput
    //       {...register('name')}
    //       id="name"
    //       type="text"
    //       required={true}
    //       shadow={true}
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="text" value="Your text" />
    //     </div>
    //     <Textarea
    //       {...register('text')}
    //       id="text"
    //       rows={4}
    //       required={true}
    //       shadow={true}
    //     />
    //   </div>
    //   <div className="mb-20">
    //     <Button type="submit" disabled>Send</Button>
    //   </div>
    // </form>
  )
}

export default MyForm

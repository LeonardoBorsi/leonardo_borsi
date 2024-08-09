'use client'

import emailjs from '@emailjs/browser'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Spinner } from '@nextui-org/react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

enum SubmitButtonState {
  ERROR = 'error',
  LOADING = 'loading',
  SUCCESS = 'success'
}

export const ContactForm = () => {
  const [disabled, setDisabled] = useState(false)
  const [submitFeedback, setSubmitFeedback] = useState<SubmitButtonState>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const displaySubmitFeedback = (feedback: SubmitButtonState) => {
    setSubmitFeedback(feedback)
    setTimeout(() => {
      setSubmitFeedback(undefined)
      if (feedback === SubmitButtonState.SUCCESS) {
        reset()
      }
    }, 2000)
  }

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    const { name, email, subject, message } = data
    try {
      setDisabled(true)
      setSubmitFeedback(SubmitButtonState.LOADING)

      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not set')
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { name, email, subject, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      displaySubmitFeedback(SubmitButtonState.SUCCESS)
    } catch (e) {
      console.error(e)
      displaySubmitFeedback(SubmitButtonState.ERROR)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <Card className='p-2 md:p-4'>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CardHeader>
          <p className='text-lg font-light text-gray-900 dark:text-white'>Fill this form to contact me</p>
        </CardHeader>
        <CardBody className='space-y-5'>
          <div>
            <Input
              fullWidth
              isRequired
              type='text'
              label='Full Name'
              variant='bordered'
              {...register('name', { required: true })}
              isInvalid={!!errors.name}
              errorMessage='Please enter your full name'
            />
          </div>
          <Input
            fullWidth
            isRequired
            type='email'
            label='Email'
            variant='bordered'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
            isInvalid={!!errors.email}
            errorMessage='Please enter a valid email address'
          />
          <Input fullWidth type='text' label='Subject' variant='bordered' {...register('subject')} />
          <Textarea
            fullWidth
            isRequired
            type='text'
            label='Message'
            variant='bordered'
            {...register('message', { required: true })}
            isInvalid={!!errors.message}
            errorMessage='Please enter a message'
          />
        </CardBody>
        <CardFooter>
          <Button
            fullWidth
            color={submitFeedback === SubmitButtonState.SUCCESS ? 'success' : submitFeedback === SubmitButtonState.ERROR ? 'danger' : 'primary'}
            className='text-white'
            size='lg'
            type='submit'
            disabled={disabled}
          >
            {!submitFeedback && <span>Send</span>}
            {submitFeedback === SubmitButtonState.LOADING && <Spinner color='white' size='sm' />}
            {submitFeedback === SubmitButtonState.SUCCESS && <span>Email Sent</span>}
            {submitFeedback === SubmitButtonState.ERROR && <span>Error, try again</span>}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

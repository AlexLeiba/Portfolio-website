'use client';
import React from 'react';
import { Spacer } from '../UI/spacer/spacer';
import { Col, Row } from '../UI/Grid';
import { Button } from '../UI/Button/Button';
import Link from 'next/link';
import { Input } from '../UI/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input as InputTextarea } from '../UI/Input/Input';
import { cn } from '@/lib/utils';
import { contactSchema, type FormDataType } from '@/lib/schemas';

function Contact() {
  const formMethods = useForm<FormDataType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  async function onSubmit(formData: FormDataType) {
    const url = process.env.NEXT_PUBLIC_FORM_URL;
    try {
      if (url) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('The message was sent successfully!');
        }
      } else {
        toast.error('Error sending the message. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    }
  }
  return (
    <div>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className='flex justify-center '>
            <h2 className='text-center' data-aos='fade-left'>
              Cont
            </h2>
            <h2 className=' text-primary-400' data-aos='fade-right'>
              act
            </h2>
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        <Col lg={4} className='flex flex-col justify-between'>
          <Link
            data-aos='fade-up'
            href='mailto:leiba.alexandru@gmail.com'
            className='flex gap-2 items-center animate-pulse'
          >
            <div className='flex flex-col gap-1 items-center'>
              <Mail width={80} height={80} className='shadow-xl rounded-lg' />
              <p className='body-xs !font-bold text-primary-500'>Gmail</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p>leiba.alexandru@gmail.com</p>
            </div>
          </Link>

          <Link
            data-aos='fade-up'
            className='flex gap-2 items-center animate-pulse'
            href={
              'https://www.linkedin.com/in/alex-leiba-9205801ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            }
          >
            <div className='flex flex-col gap-1 items-center'>
              <Linkedin
                width={80}
                height={80}
                className='shadow-xl rounded-lg'
              />

              <p className='body-xs !font-bold text-primary-500'>Linkedin</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p>Alex Leiba</p>
            </div>
          </Link>

          <Link
            data-aos='fade-up'
            href={'https://github.com/AlexLeiba'}
            className='flex gap-2 items-center animate-pulse'
          >
            <div className='flex flex-col gap-1 items-center'>
              <Github width={80} height={80} className='shadow-xl rounded-lg' />
              <p className='body-xs !font-bold text-primary-500'>Github</p>
            </div>
            <div className='flex gap-4 items-center'>
              <p>AlexLeiba</p>
            </div>
          </Link>
          <Spacer md={12} sm={8} />
        </Col>
        <Col lg={8}>
          <div
            className='rounded-lg bg-baseline-100 p-4 dark:bg-baseline-900 shadow-xl'
            data-aos='fade-up'
          >
            <h4 className='inline'>Contact</h4>
            <h4 className='inline text-primary-400'> me</h4>
            <Spacer size={2} />
            <p className='inline'>Send me a message and </p>
            <p className='inline text-primary-400'>let`s get in touch!</p>
            <Spacer size={4} />

            <Row>
              <Col lg={6} className='flex flex-col gap-2'>
                <Input
                  iconHelpText='Your First Name'
                  {...register('firstName')}
                  type={'text'}
                  placeholder={'Type here'}
                  className={''}
                  label={'First Name *'}
                  error={errors.firstName?.message}
                />
                <Input
                  iconHelpText='Your Last name'
                  {...register('lastName')}
                  type={'text'}
                  placeholder={'Type here'}
                  className={''}
                  label={'Last Name'}
                  error={errors.lastName?.message}
                />
              </Col>
              <Col lg={6} className='flex flex-col gap-2'>
                <Input
                  iconHelpText='Your email address'
                  {...register('email')}
                  type={'email'}
                  placeholder={'Type here'}
                  className={''}
                  label={'Email *'}
                  error={errors.email?.message}
                />

                <Input
                  iconHelpText='Your phone number'
                  {...register('phone')}
                  type={'phone'}
                  placeholder={'Type here'}
                  className={''}
                  label={'Phone'}
                  error={errors.phone?.message}
                />
              </Col>
            </Row>
            <Row>
              <Col className='mt-4'>
                <InputTextarea
                  {...register('message')}
                  type={'textarea'}
                  placeholder={'Type here'}
                  className={cn('')}
                  label={'Your Message *'}
                  error={errors.message?.message}
                />

                <Spacer size={8} />
                <Button
                  onClick={handleSubmit(onSubmit)}
                  variant={'baseline'}
                  className='w-full animate-pulse'
                >
                  Send Message
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;

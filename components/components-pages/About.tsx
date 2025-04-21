'use client';
import React from 'react';
import { Spacer } from '../UI/spacer/spacer';
import { ChevronDown } from 'lucide-react';
import { Col, Row } from '../UI/Grid';
import { Button } from '../UI/Button/Button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { aboutMeData } from '@/consts/localDB';

function About() {
  const router = useRouter();
  const [showMore, setShowMore] = React.useState(false);

  function handleShowMoreOrLess() {
    setShowMore((prev) => !prev);
  }
  return (
    <>
      <Row>
        <Col lgOffset={2} lg={8}>
          <div className='flex justify-center gap-4'>
            <h2 className='text-center' data-aos='fade-left'>
              About
            </h2>
            <h2 className=' text-primary-400' data-aos='fade-right'>
              me
            </h2>
          </div>
          <Spacer size={16} />

          <p
            className={cn(
              'body-lg text-center line-clamp-2',
              showMore ? 'line-clamp-none' : 'line-clamp-2'
            )}
          >
            My name is Alexandru Leiba Lapteacru, and I am a Front-End Developer
            passionate about improving my programming skills and creating tools
            that enhance user experience. I’m drawn to development because I
            consider myself a creative person, and this field allows me to
            design functionalities, interfaces, and tools that bring joy, value,
            and fulfillment—not only to myself but, more importantly, to others.
          </p>
          <p
            className={cn(
              'body-lg text-center line-clamp-2',
              showMore ? 'block' : 'hidden'
            )}
          >
            I approach problems and tasks from multiple perspectives, which
            helps me maintain strong attention to detail. I prefer to test a
            task one extra time before marking it as done to avoid small
            inconsistencies or bugs, ultimately saving time on debugging in the
            future.
          </p>
          <p
            className={cn(
              'body-lg text-center line-clamp-2',
              showMore ? 'block' : 'hidden'
            )}
          >
            I have experience working on large team projects and consider myself
            a reliable team player. I`m always ready to lend a hand when needed
            and trust in my colleagues’ decisions.
          </p>
          <div
            data-aos='fade-up'
            className='flex gap-1 items-center cursor-pointer'
            onClick={handleShowMoreOrLess}
          >
            <Button variant={'link'} className='text-primary-400'>
              {showMore ? 'Show less' : 'Show more'}
            </Button>
            <ChevronDown
              width={20}
              height={20}
              className={cn(
                'transition-all',
                showMore ? 'rotate-180' : 'rotate-0'
              )}
            />
          </div>
        </Col>
      </Row>

      <Spacer size={16} />
      <Row>
        {aboutMeData.map((data, index) => {
          return (
            <Col key={index} className='w-full' lg={data.col}>
              <div
                data-aos-delay={index * 100}
                data-aos='fade-up'
                key={index}
                className='flex  border mb-4 border-primary-200 pb-6 items-center lg:h-56 min-h-56 p-4 rounded-xl flex-wrap overflow-hidden shadow-lg'
              >
                <div className='flex items-center  lg:gap-8 md:gap-6 gap-2  h-full w-full lg:flex-row md:flex-row flex-col'>
                  <div>{data.icon}</div>
                  <div className='flex flex-col gap-4 justify-between h-full'>
                    <h5 className='text-primary-400 '>{data.title}</h5>

                    <div className='flex gap-4 flex-wrap lg:h-[115px] md:h-[80px] items-center'>
                      {data.description.map((description, index) => {
                        return (
                          <div key={index}>
                            <p className='body-base font-bold'>
                              {description.title}
                            </p>

                            {description.description.map((desc, index) => (
                              <p className='body-base ml-2' key={index}>
                                {desc}
                              </p>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <></>
              </div>
            </Col>
          );
        })}
        <Col className='w-full'>
          <div
            data-aos-delay={100}
            data-aos='fade-left'
            onClick={() => router.push('#skills')}
            className='cursor-pointer flex justify-center items-center  gap-4 border mb-4 border-primary-200 pb-4  p-4 rounded-xl flex-wrap overflow-hidden shadow-lg'
          >
            <h5 className='text-primary-400'>Skills</h5>
            <ChevronDown
              className='text-primary-400 animate-pulse'
              width={50}
              height={50}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default About;

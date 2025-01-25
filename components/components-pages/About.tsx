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
    <div>
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
            My name is Alexandru Leiba Lapteacru, I am a Front end developer
            driven to develop my programmer development skills and develop tools
            which will enhance user experience. I am passionate about
            development because I consider myself a creative person and this
            field allows me to create tools ,functionalities, different UI’s
            which brings joy ,benefits and fulfillment not only to me but most
            important to others. By looking at a particular problem or task from
            different perspectives I can say that I have a good attention to
            details, I prefer to test a task one extra time before to move it to
            done in order to avoid some small inconsistencies (bugs) and saving
            time on debugging for the future . I have experience working on the
            same projects with a big team and I can say that I am a team player
            who can always give a hand when needed and trust my colleagues’s
            decisions .
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
                className='flex gap-4 border mb-4 border-primary-200 pb-4 items-center min-h-56 p-4 rounded-xl flex-wrap overflow-hidden shadow-lg'
              >
                <div className='flex items-center  gap-8'>
                  <div>{data.icon}</div>
                  <div className='flex flex-col gap-4'>
                    <h5 className='text-primary-400 '>{data.title}</h5>

                    <div className='flex gap-4 flex-wrap'>
                      {data.description.map((description, index) => {
                        return (
                          <div key={index}>
                            <p className='body-base font-bold'>
                              {description.title}
                            </p>

                            {description.description.map((desc, index) => (
                              <p className='body-base' key={index}>
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
    </div>
  );
}

export default About;

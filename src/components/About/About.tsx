import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './About.module.css';
import Link from 'next/link';

const links = [
    { link: '/courses', label: 'Courses' },
  ];

export function About() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          About{' '}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Umass Course Reviews was designed to better the course selection 
          experience for Umass students. It is an alternative to rate my professor 
          that exposes details of the course you are looking for regardless of the professor. 
          Your fellow classmates will leave reviews including the ins and outs of each course that 
          you cannot find anywhere else.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component='a' href='/courses' className={classes.control} variant="white" size="lg">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
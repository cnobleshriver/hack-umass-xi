'use client'

import { Input, Text, Group, Anchor } from '@mantine/core';
import classes from './AddReview.module.css';


export function AddReview() {
  return (
    <div className={classes.container}>
      <h1>Add Your Review</h1>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Course
        </Text>
      </Group>
      <Input placeholder="Enter the Course" id="your-password" mb={20}/>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Professor
        </Text>
      </Group>
      <Input placeholder="Enter the Professor" id="your-password"mb={20}/>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Department
        </Text>
      </Group>
      <Input placeholder="Enter the Department" id="your-password"mb={20}/>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Course Description
        </Text>
      </Group>
      <Input placeholder="Describe the Course" id="your-password"mb={20}/>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Rating
        </Text>
      </Group>
      <Input placeholder="Enter the Rating" id="your-password" mb={20}/>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="Enter the Department" size="sm" fw={500}>
          Difficulty
        </Text>
      </Group>
      <Input placeholder="Enter the Difficulty" id="your-password" mb={20}/>
    </div>
  );
}

export default AddReview
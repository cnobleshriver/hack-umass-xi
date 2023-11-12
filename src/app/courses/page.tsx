'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import styles from './courses.module.css';
import { Button, Select, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SchoolCheckbox } from '@/components/SchoolCheckbox/SchoolCheckbox';
import { ProfCheckbox } from '@/components/ProfCheckbox/ProfCheckbox';
import CourseCard from '@/components/CourseCard/CourseCard';

const classes = [
  {
      key: 1,
      name: 'Introduction to Programming',
      numReviews: 120,
      avgRating: 4.5,
      avgDifficulty: 3.2,
  },
  {
      key: 2,
      name: 'Advanced Algorithms',
      numReviews: 85,
      avgRating: 4.2,
      avgDifficulty: 4.7,
  },
  // Add more courses as needed
];

const courses = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <div className={styles.innerSearchBox}>
          <div>
            <TextInput
              className={styles.searchElement}
              placeholder="Search"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              leftSection={<IconSearch className={styles.leftIcon} stroke={1.5} />}
            />
            <div className={styles.searchElement}>
              <SchoolCheckbox />
            </div>
            <div className={styles.searchElement}>
              <ProfCheckbox />
            </div>
            <div className={styles.searchElement}>
              <Button color="blue">
                Apply Filters
              </Button>
            </div>
          </div>
          <Button color="blue" size='compact-xl'>
            Add Review
          </Button>
        </div>
      </div>
      <div className={styles.courseContainer}>
        <div className={styles.courseSection}>

          <div className={styles.courseCriteria}>
            <div>Course Name</div>
            <div>Num. Reviews</div>
            <div>Avg Rating</div>
            <div>Avg Difficulty</div>
          </div>
          {classes.map((course) => (
            <CourseCard
              key={course.key}
              name={course.name}
              numReviews={course.numReviews}
              avgRating={course.avgRating}
              avgDifficulty={course.avgDifficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default courses;
'use client'

import React, { useState, useEffect } from 'react';
import styles from './courses.module.css';
import { Button } from '@mantine/core';
import { SchoolCheckbox } from '@/components/SchoolCheckbox/SchoolCheckbox';
import { ProfCheckbox } from '@/components/ProfCheckbox/ProfCheckbox';
import { TableReviews } from '@/components/Table/TableReviews';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSchools, setSelectedSchools] = useState([]);
  const [selectedProfs, setSelectedProfs] = useState([]);

  // Use useSearchParams to access the query parameters
  const searchParams = useSearchParams();

  // Update the search query based on the URL query parameter
  useEffect(() => {
    // Ensure that searchParams is defined
    if (searchParams) {
      const search = searchParams.get('search');
      if (search) {
        setSearchQuery(search);
      }
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <div className={styles.innerSearchBox}>
          <div>
            {/* Removed the TextInput for search */}
            <div className={styles.searchElement}>
              <SchoolCheckbox onSelect={setSelectedSchools} />
            </div>
            <div className={styles.searchElement}>
              <ProfCheckbox onSelect={setSelectedProfs} />
            </div>
            <div className={styles.searchElement}>
              <Button color="blue">Apply Filters</Button>
            </div>
          </div>
          <Button component='a' href='/AddReview' color="blue" size='compact-xl'>Add Review</Button>
        </div>
      </div>
      <div className={styles.courseContainer}>
        <TableReviews searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Courses;

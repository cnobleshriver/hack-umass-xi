import { useState } from 'react';
import { Table, Progress, Anchor, Group, Text, Center, UnstyledButton } from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import classes from './TableReviews.module.css';

const initialData = [
  {
    className: 'Introduction to Psychology',
    numberOfReviews: 120,
    avgDifficultyRating: 3.5,
    avgCourseRating: 8.7,
  },
  {
    className: 'Calculus I',
    numberOfReviews: 180,
    avgDifficultyRating: 7.2,
    avgCourseRating: 6.3,
  },
  {
    className: 'Modern World History',
    numberOfReviews: 95,
    avgDifficultyRating: 4.8,
    avgCourseRating: 8.1,
  },
  {
    className: 'Introduction to Philosophy',
    numberOfReviews: 110,
    avgDifficultyRating: 3.9,
    avgCourseRating: 7.9,
  },
  {
    className: 'Principles of Microeconomics',
    numberOfReviews: 135,
    avgDifficultyRating: 5.4,
    avgCourseRating: 7.5,
  },
  {
    className: 'Organic Chemistry',
    numberOfReviews: 200,
    avgDifficultyRating: 8.1,
    avgCourseRating: 5.8,
  },
  {
    className: 'Basic Astrophysics',
    numberOfReviews: 85,
    avgDifficultyRating: 6.7,
    avgCourseRating: 7.2,
  },
  {
    className: 'Environmental Science',
    numberOfReviews: 150,
    avgDifficultyRating: 4.2,
    avgCourseRating: 8.5,
  },
  {
    className: 'Introduction to Computer Science',
    numberOfReviews: 170,
    avgDifficultyRating: 5.6,
    avgCourseRating: 8.0,
  },
  {
    className: 'Sociology of Work',
    numberOfReviews: 100,
    avgDifficultyRating: 4.5,
    avgCourseRating: 7.7,
  },
  {
    className: 'Contemporary World Literature',
    numberOfReviews: 90,
    avgDifficultyRating: 3.8,
    avgCourseRating: 8.2,
  },
  {
    className: 'Developmental Biology',
    numberOfReviews: 140,
    avgDifficultyRating: 6.9,
    avgCourseRating: 6.5,
  }
];


const getRatingColor = (rating, isDifficulty = false) => {
  if (isDifficulty) {
    if (rating <= 4) return 'green';
    if (rating <= 7.5) return 'orange';
    return 'red';
  } else {
    if (rating >= 7.5) return 'green';
    if (rating >= 4) return 'orange';
    return 'red';
  }
};

function Th({ children, reversed, sorted, onSort }) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: 16, height: 16 }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function sortData(data, sortBy, reverseSortDirection) {
  if (!sortBy) {
    return data;
  }

  return [...data].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA < valueB) {
      return reverseSortDirection ? 1 : -1;
    }
    if (valueA > valueB) {
      return reverseSortDirection ? -1 : 1;
    }
    return 0;
  });
}

export function TableReviews() {
  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const isReversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(isReversed);
    setSortBy(field);
    setData(sortData(data, field, isReversed));
  };

  const rows = data.map((course) => (
    <Table.Tr key={course.className}>
      <Table.Td>
        <Anchor component="button" fz="sm">
          {course.className}
        </Anchor>
      </Table.Td>
      <Table.Td>{Intl.NumberFormat().format(course.numberOfReviews)}</Table.Td>
      <Table.Td>
        <Progress.Root>
          <Progress.Section
            className={classes.progressSection}
            value={course.avgDifficultyRating * 10}
            color={getRatingColor(course.avgDifficultyRating, true)}
          />
        </Progress.Root>
        {course.avgDifficultyRating.toFixed(1)} / 10
      </Table.Td>
      <Table.Td>
        <Progress.Root>
          <Progress.Section
            className={classes.progressSection}
            value={course.avgCourseRating * 10}
            color={getRatingColor(course.avgCourseRating)}
          />
        </Progress.Root>
        {course.avgCourseRating.toFixed(1)} / 10
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Th
              sorted={sortBy === 'className'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('className')}
            >
              Class Name
            </Th>
            <Th
              sorted={sortBy === 'numberOfReviews'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('numberOfReviews')}
            >
              Number of Reviews
            </Th>
            <Th
              sorted={sortBy === 'avgDifficultyRating'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('avgDifficultyRating')}
            >
              Avg. Difficulty Rating
            </Th>
            <Th
              sorted={sortBy === 'avgCourseRating'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('avgCourseRating')}
            >
              Avg. Course Rating
            </Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

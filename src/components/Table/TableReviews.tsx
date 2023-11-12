import { Table, Progress, Anchor } from '@mantine/core';
import classes from './TableReviews.module.css';

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

const data = [
  {
    className: 'Introduction to Psychology',
    numberOfReviews: 152,
    avgDifficultyRating: 5.7,
    avgCourseRating: 8.3,
  },
  {
    className: 'Calculus I',
    numberOfReviews: 200,
    avgDifficultyRating: 7.6,
    avgCourseRating: 7.2,
  },
  {
    className: 'World History',
    numberOfReviews: 98,
    avgDifficultyRating: 4.0,
    avgCourseRating: 9.1,
  },
];

export function TableReviews() {
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
            <Table.Th>Class Name</Table.Th>
            <Table.Th>Number of Reviews</Table.Th>
            <Table.Th>Avg. Difficulty Rating</Table.Th>
            <Table.Th>Avg. Course Rating</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

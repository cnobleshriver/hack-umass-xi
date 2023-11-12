import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    RingProgress
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './CourseReview.module.css';

const mockdata = [
    {
        title: 'Avgerage rating',
        value: 9,
        isDifficulty: false,
    },
    {
        title: 'Average difficulty',
        value: 7,
        isDifficulty: true,
    },
    {
        title: 'No third parties',
        value: 3,
        isDifficulty: false,
    },
];

export function CourseReview({ courseName }) {
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
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <RingProgress
                sections={[{ value: feature.value*10, color: getRatingColor(feature.value) }]}
                label={
                    <Text c={getRatingColor(feature.value)} fw={700} ta="center" size="xl">
                        {feature.value}/10
                    </Text>
                }
            />
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            {/* <Group justify="center">
          <Badge variant="filled" size="lg">
            Best company ever
          </Badge>
        </Group> */}

            <Title order={2} className={classes.title} ta="center" mt="sm">
                {courseName}
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Course Description
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
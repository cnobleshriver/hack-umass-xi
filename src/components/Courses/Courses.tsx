import styles from './Courses.module.css';
import { Button, Select, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SchoolCheckbox } from '../SchoolCheckbox/SchoolCheckbox';
import { ProfCheckbox } from '../ProfCheckbox/ProfCheckbox';


export function Courses() {
    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <div className={styles.innerSearchBox}>
                    <div>
                        <TextInput
                            className={styles.searchElement}
                            placeholder="Search"
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
            <div className={styles.courseCriteria}>
                <div>Course Name</div>
                <div>Num. Reviews</div>
                <div>Avg Rating</div>
                <div>Avg Difficulty</div>
            </div>
        </div>
    );
}
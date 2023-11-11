import styles from './Courses.module.css';
import { Select, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { SchoolCheckbox } from '../SchoolCheckbox/SchoolCheckbox';
import { ProfCheckbox } from '../ProfCheckbox/ProfCheckbox';


export function Courses() {
    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <div className={styles.innerSearchBox}>
                    <TextInput
                        className={styles.inputField}
                        placeholder="Search"
                        leftSection={<IconSearch className={styles.leftIcon} stroke={1.5} />}
                    />
                    <div className={styles.checkbox}>
                        <SchoolCheckbox />   
                    </div>
                    <div className={styles.checkbox}>
                        <ProfCheckbox />  
                    </div>
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
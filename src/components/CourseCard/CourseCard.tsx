import React from 'react';
import styles from './CourseCard.module.css';

interface Props {
    id: number;
    name: string;
    numReviews: number;
    avgRating: number;
    avgDifficulty: number;
}

const CourseCard: React.FC<Props> = (props) => {
    // Component logic here

    return (
        <div className={styles.courseCard}>
            <p>{props.name}</p>
            <p>{props.numReviews}</p>
            <p>{props.avgRating}</p>
            <p>{props.avgDifficulty}</p>
        </div>
    );
};

export default CourseCard;

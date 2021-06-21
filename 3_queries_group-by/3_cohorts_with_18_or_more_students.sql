SELECT cohorts.name AS cohort_name, 
COUNT(cohort_id) AS student_count
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(cohort_id) >= 18
ORDER BY student_count;
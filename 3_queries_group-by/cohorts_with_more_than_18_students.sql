SELECT cohorts.name AS cohort_name, COUNT(*) as student_count
FROM students
INNER JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(*) >= 18
ORDER BY COUNT(*) ASC;

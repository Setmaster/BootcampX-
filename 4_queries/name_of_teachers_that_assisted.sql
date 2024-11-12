SELECT teachers.name, MIN(cohorts.name)
FROM assistance_requests
INNER JOIN teachers ON assistance_requests.teacher_id = teachers.id
INNER JOIN students ON assistance_requests.student_id = students.id
INNER JOIN cohorts ON students.cohort_id = cohorts.id
GROUP BY teachers.name;

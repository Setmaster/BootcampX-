SELECT SUM(subs.duration) AS total_duration
FROM students
LEFT JOIN assignment_submissions AS subs ON subs.student_id = students.id
WHERE cohort_id = 1;

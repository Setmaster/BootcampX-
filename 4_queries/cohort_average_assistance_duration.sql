SELECT AVG(sub.total_duration) AS average_duration
FROM (
	SELECT cohorts.name, SUM(assistance_requests.completed_at - assistance_requests.started_at) AS total_duration
	FROM assistance_requests
	INNER JOIN students ON assistance_requests.student_id = students.id
	INNER JOIN cohorts ON students.cohort_id = cohorts.id
	GROUP BY cohorts.name
) AS sub;

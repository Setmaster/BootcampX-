const { Pool } = require("pg");

const cohort_name = process.argv[2];

const pool = new Pool({
    user: "development",
    password: "development",
    host: "localhost",
    database: "bootcampx",
});

pool
    .query(
        `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
         JOIN assistance_requests ON teacher_id = teachers.id
         JOIN students ON student_id = students.id
         JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort_name || 'JUL02'}'
ORDER BY teacher;
`
    )
    .then((res) => {
        res.rows.forEach((entry) => {
            console.log(
                `${entry.cohort}: ${entry.teacher}`
            );
        });
    })
    .catch((err) => console.error("query error", err.stack));
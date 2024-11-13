const { Pool } = require("pg");

const cohort_name = process.argv[2];
const limit = process.argv[3];

const pool = new Pool({
    user: "development",
    password: "development",
    host: "localhost",
    database: "bootcampx",
});

pool
    .query(
        `
SELECT students.id as student_id, students.name, cohorts.name AS cohort
FROM students
INNER JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohort_name}%'
LIMIT ${limit};
`
    )
    .then((res) => {
        res.rows.forEach((user) => {
            console.log(
                `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
            );
        });
    })
    .catch((err) => console.error("query error", err.stack));
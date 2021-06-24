const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT students.id AS id, students.name AS student, cohorts.name AS cohort
// FROM students
// JOIN cohorts ON cohorts.id = students.cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
//   })
// })
// .catch(err => console.error('query error', err.stack));

pool.query(`
SELECT students.id AS id, students.name AS student, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));



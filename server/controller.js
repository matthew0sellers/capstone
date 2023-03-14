require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize")

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  });
  
module.exports = {
    getCompliment: (req, res) => {
        const compliment = ["Northern Lights"];

        res.status(200).send(compliment);
    },
    getCompliment2: (req, res) => {
        const compliment2 = ["The Grand Canyon"];
      
        res.status(200).send(compliment2);
    },
    getCompliment3: (req, res) => {
        const compliment3 = ["The Sakura blossoms of Japan"];

        res.status(200).send(compliment3);
    },
    getCompliment4: (req, res) => {
        const compliment4 = ["The Colleseum is one of Rome's grandest attractions"];

        res.status(200).send(compliment4);
    },

    getProfile: (req, res) => {
        sequelize.query(`
        SELECT * FROM profile
        WHERE customer_id = 1
        `).then((dbRes) => {
        res.status(200).send(dbRes[0])
        })
},
    updateProfile: (req, res) => {
        const { name, email, birthday } = req.body;
        console.log(name)
        sequelize.query(`
        UPDATE profile
        SET name = '${name}',
        email = '${email}',
        birthday = '${birthday}'
        WHERE customer_id = 1
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
            })
},

    createComment: (req, res) => {
        console.log(req.body)
        const  { comment, customer_id } = req.body;
        sequelize.query(`
        INSERT INTO comments
        (comment, customer_id) values ('${comment}', ${customer_id})
        RETURNING *
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
},
    getComment: (req, res) => {
        sequelize.query(`
        SELECT name, comment, id FROM comments
        INNER JOIN profile ON profile.customer_id = comments.customer_id
        WHERE profile.customer_id = 1
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
},
    deleteComment: (req, res) => {
        const {id} = req.params
        sequelize.query(`
        DELETE FROM comments
        WHERE id = ${id}
        `).then((dbRes) => {
        res.status(200).send(dbRes[0])
        })
},

}    
































  
// module.exports = {
//     getCountries: (req, res) => {
//         sequelize.query(`SELECT * from countries;`)
//         .then (dbRes => res.status(200).send(dbRes[0]))
//     },
    
//     seed: (req, res) => {
//     sequelize.query(`
//         drop table if exists countries;

//         create table countries (
//             country_id serial primary key, 
//             name varchar
//         );

//         INSERT INTO countries (name) 
//         values ('Cuba'),
//         ('Italy'),
//         ('Jamaica'),
//         ('Japan'),
//         ('Morocco'),
//         ('Panama'),
//         ('South Africa'),
//         ('South Korea'),
//         ('South Sudan'),
//         ('Spain'),

//     `).then(() => {
//         console.log('DB seeded!')
//         res.sendStatus(200)
//     }).catch(err => console.log('error seeding DB', err))
// }
// }
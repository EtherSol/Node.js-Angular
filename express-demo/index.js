const Joi = require('joi')
const express = require('express')
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'courses1' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' },
]

app.get('/', (req, res) => {
    res.send('hello world!')
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Error 404: Course doesn't exist.");
    res.send(course);
})

app.post('/api/courses/', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    app.put('api/courses/:id', (req, res) => {
        // Look for the coarse
        // Return 404, if the coarse does not exist

        // Validate
        // if invalid, return 400 - Bad request

        // Update course 
        // Return the updated course
    });



    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

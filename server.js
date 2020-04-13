// One route that returns an array
const express = require('express');

const app = express();

app.get('/api/customers', (req,res)=>{
    const customers =[
        {id: 1, firstName:"Justine", lastName: 'Shaw' },
        {id: 2, firstName:"Galen", lastName: 'Hare' },
        {id: 3, firstName:"Danelle", lastName: 'Julal' },
        {id: 4, firstName:"Jordon", lastName: 'Hayles' }
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
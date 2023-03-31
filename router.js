const router = require('express').Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./controllers/users');

const { getLegends, getLegend, createLegend, updateLegend, deleteLegend
    , getLegendsByClass, getLegendClasses
} = require('./controllers/legends');

const { getWeapons, getWeapon, createWeapon, updateWeapon, deleteWeapon } = require('./controllers/weapons');



router.get("/", (req, res) => {
    res.send("Home page")
});

module.exports = router;

// Users
router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

// Category Legends
router.get('/legends/classes', getLegendClasses);
router.get('/legends/classes/:class', getLegendsByClass);

// Legends
router.get('/legends', getLegends);

router.get('/legends/:id', getLegend);

router.post('/legends', createLegend);

router.put('/legends/:id', updateLegend);

router.delete('/legends/:id', deleteLegend);




// Weapons
router.get('/weapons', getWeapons);

router.get('/weapons/:id', getWeapon);

router.post('/weapons', createWeapon);

router.put('/weapons/:id', updateWeapon);

router.delete('/weapons/:id', deleteWeapon);



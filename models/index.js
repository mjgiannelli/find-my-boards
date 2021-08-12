// import all models
const User = require('./User');
const Rank = require('./Rank');
const Friends = require('./Friends');
const Game = require('./Game');
const Categories = require('./Categories');
const Comment = require('./Comment');


// create associations here

//Game belongs to Categories
Game.belongsTo(Categories, {
    foreignKey: 'category_id'
})

//Categories has many games
Categories.hasMany( Game, {
    foreignKey: 'category_id'
})

module.exports = { User, Rank, Friends, Game, Categories, Comment};

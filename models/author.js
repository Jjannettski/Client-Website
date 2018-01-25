module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  // Insert default values so it creates an admin if there are none

      // Associating Author with Posts
  Author.associate = function(models) {
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {onDelete: "cascade"});
    Author.hasMany(models.Post2, {onDelete: "cascade"});
  };
  return Author;
};

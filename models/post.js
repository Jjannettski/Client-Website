module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Blank"
      // validate: {
      //   len: [1]
      // }
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Blank",
      len: [1]
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Blank",
      len: [1]
    },
    setsReps: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Blank",
      len: [1]
    },
    seatNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Blank",
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};

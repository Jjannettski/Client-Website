module.exports = function(sequelize, DataTypes) {
    var Post2 = sequelize.define("Post2", {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank"
        // validate: {
        //   len: [1]
        // }
      },
      hips: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      thigh: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      calf: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      waist: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      neck: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      arm: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      chest: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      shoulders: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      },
      bodyWeight: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Blank",
        len: [1]
      }
    });
  
    Post2.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post2.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post2;
  };
  
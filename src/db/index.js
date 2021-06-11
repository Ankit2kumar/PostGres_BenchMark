import e from 'express'
import s from 'sequelize'
const {Sequelize, DataTypes}= s
const {PGUSER,PGPORT,PGDATABASE,PGPASSWORD}= process.env

const sequelize= new Sequelize(PGDATABASE,PGUSER,PGPASSWORD,{
    port:PGPORT,
    host: 'localhost',
    dialect:'postgres',
})

sequelize
.authenticate()
.then(()=>{
    console.log("Connected");
})
    .catch((e)=>console.log(e))

    const product= sequelize.define("product",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        brand:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageUrl:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    })


    const review=sequelize.define('review',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        comment:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        rate:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        productId:{
            type:DataTypes.TEXT,
            allowNull:false
        },
    })
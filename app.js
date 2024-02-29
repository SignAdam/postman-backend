const express = require('express') 
const app = express()  
const mongoose = require('mongoose') 
const url = 'mongodb+srv://dbAdam:3zY901FBsEfo0j5l@cluster0.busgrrs.mongodb.net/?retryWrites=true&w=majority'
app.use(express.json());
const stuffRoutes = require('./routes/stuff.js');
const userRoutes = require('./routes/user');
const cors = require('cors');
const path = require('path');


async function connectDatabase() {       
  try {              
    await mongoose.connect(url, {               
      useNewUrlParser: true,               
      useUnifiedTopology: true,           
    });           
    console.log('Connexion à MongoDB réussie !');       
  } catch (error) {           
    console.error('Erreur de connexion à la base de données :', error);       
  }   
}   

connectDatabase();

app.use( cors());
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);



module.exports = app; 







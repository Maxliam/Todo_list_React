const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://tyko9000:Ahzammt7@freecluster.lbn9r.mongodb.net/project?retryWrites=true&w=majority';

const connect = async () => {
  try{
      // mongodb connection string
      const con = await mongoose.connect(DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      })

      console.log(`MongoDB connected : ${con.connection.host}`);
  }catch(err){
      console.log(err);
      process.exit(1);
  }
}

function close() {
    return mongoose.disconnect();
  }

module.exports = { connect, close };

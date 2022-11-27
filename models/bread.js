const mongoose = require('mongoose');
const { Schema } = mongoose;


const breadSchema = new Schema({
  name: { type: String, required: true, unique: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: { 
    type: Schema.Types.ObjectId,
    ref: 'Baker' // Model name
  }
});

// helper methods 
breadSchema.methods.getBakedBy = function(){
  if(!this.baker === undefined){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
  }else {
    return `${this.name} was baked with no assigned baker`;
  }
}

const Bread = mongoose.model('Bread', breadSchema);
module.exports = Bread;


import { Mongo } from 'meteor/mongo';


// Define a collection to hold our tasks
const Tasks = new Mongo.Collection("tasks");

export default Tasks;

//===========================================

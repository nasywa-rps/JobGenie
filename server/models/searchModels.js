import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  jobType: [String],
  experience: String,
  location: String,
  salaryRange: String,
  cvPath: String,
}, { timestamps: true });

const Search = mongoose.model('Search', searchSchema);
export default Search;

import Search from '../models/searchModels.js';

export const searchJob = async (req, res) => {
  try {
    const { jobType, experience, location, salaryRange } = req.body;
    const cvPath = req.file?.path;

    const search = new Search({
      jobType: jobType ? JSON.parse(jobType) : [],
      experience,
      location,
      salaryRange,
      cvPath,
    });

    await search.save();
    res.status(201).json({ message: 'Search succeeded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

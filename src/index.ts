import express from 'express';
import extensionsRoutes from './api/routes/extensionsDataModel.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', extensionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import 'dotenv/config';
import app from './app';

const PORT = process.env.APP_PORT ?? 3001;

app.listen(PORT, () => console.log('ouvindo porta', PORT));

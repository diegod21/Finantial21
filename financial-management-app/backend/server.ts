import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Conecte ao MongoDB com opções de conexão tipadas corretamente
mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as unknown as ConnectOptions)
  .then(() => console.log("MongoDB conectado"))
  .catch((err: Error) => console.error("Erro ao conectar ao MongoDB", err));

// Middleware para JSON
app.use(express.json());

// Rotas principais
app.get('/', (req: Request, res: Response) => {
  res.send("API funcionando!");
});

// Escuta do servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

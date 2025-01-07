import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Conecte ao MongoDB com opções de conexão tipadas corretamente
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB", err));
// Middleware para JSON
app.use(express.json());
// Rotas principais
app.get('/', (req, res) => {
    res.send("API funcionando!");
});
// Escuta do servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

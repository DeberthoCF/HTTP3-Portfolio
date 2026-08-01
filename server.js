import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Service des fichiers statiques du build React
app.use(express.static(path.join(__dirname, 'dist')));

// Route d'API pour le formulaire de contact
app.post('/api/contact', (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont obligatoires.',
    });
  }

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Adresse email invalide.',
    });
  }

  const nouveauMessage = {
    nom,
    email,
    message,
    date: new Date(),
  };

  const fichier = path.join(__dirname, 'messages.json');

  let messages = [];

  if (fs.existsSync(fichier)) {
    try {
      messages = JSON.parse(fs.readFileSync(fichier, 'utf-8'));
    } catch (error) {
      console.error('Erreur lors de la lecture de messages.json:', error);
      messages = [];
    }
  }

  messages.push(nouveauMessage);

  fs.writeFileSync(fichier, JSON.stringify(messages, null, 2));

  res.json({
    success: true,
    message: 'Message reçu avec succès.',
  });
});

//CORRECTION an se paske : Utilisation de /{*path} au lieu de '*' ou '/*'
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

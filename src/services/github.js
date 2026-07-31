const API = 'https://api.github.com/users';

export async function getGithubUser(username) {
  const response = await fetch(`${API}/${username}`);

  if (!response.ok) {
    throw new Error('Utilisateur GitHub introuvable');
  }

  return await response.json();
}

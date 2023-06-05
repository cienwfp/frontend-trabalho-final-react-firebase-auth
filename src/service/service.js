import api from './connection';

export async function respostaChat(data) {
  return await api.post("/pergunta", data)
}
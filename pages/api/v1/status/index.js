function status(request, response) {
  response.status(200).json({ chave: "Gametab está rodando!" });
}

export default status;

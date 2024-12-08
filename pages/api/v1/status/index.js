function status(request, response) {
  response.status(200).send("Server is running");
}

export default status;

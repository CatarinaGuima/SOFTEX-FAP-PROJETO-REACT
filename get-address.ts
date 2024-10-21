export async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ocorreu um erro inesperado:", error);
  }
}


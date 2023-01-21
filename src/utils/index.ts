const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

export const formatDate = (createdAt: string) => {
    const date = new Date(createdAt);
    return `${date.getDate()} de ${meses[date.getMonth()]}, ${date.getUTCFullYear()}`;
}

export const formatNumber = (number: number) => {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
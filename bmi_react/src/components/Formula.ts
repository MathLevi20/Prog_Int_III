

export function Formula({ peso, altura }: { peso: number; altura: number }) {
    console.log(typeof (altura))
    let resultado = (Number(peso) / (Number(altura) ** 2))
    console.log(typeof (resultado))
    return resultado
}
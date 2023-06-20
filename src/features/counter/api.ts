import Color from "./types/Color";

export async function save(count: number) : Promise<void> {
    // fetch (имитация запроса на бэк)
    console.log(`Count ${count} saved`);
}

export async function colorChange(color: Color): Promise<void> {
    // fetch (имитация запроса на бэк)
    console.log(`Color ${color} changed`);
}
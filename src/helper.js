export const helper = (board, id, currentPlayer) => {
    let newBoared = [...board];
    newBoared[id] = currentPlayer;
    const winList = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ];

    for (let i = 0; i < winList.length; i++) {
        const [c1, c2, c3, c4] = winList[i];
        if (newBoared[c1] > 0 && newBoared[c1] === newBoared[c2]
            && newBoared[c2] === newBoared[c3] && newBoared[c3] === newBoared[c4]) {
            return true;
        }
    }
    return false;
}
function getUser(callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Ali"
        });
    }, 2000);
}